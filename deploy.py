"""
DSU Online Deployment Script
Usage: python deploy.py
"""
import os
import sys
import tarfile
import tempfile
import paramiko

sys.stdout.reconfigure(encoding='utf-8')

# Load .server.local config if present
env_file = os.path.join(os.path.dirname(__file__), '.server.local')
config = {
    'DEPLOY_HOST': '91.121.47.15',
    'DEPLOY_PORT': '22',
    'DEPLOY_USER': 'dev-inter-f3',
    'DEPLOY_PASS': 'Abhiram@123',
    'DEPLOY_DIR': 'web/dsuonline.intersmarthosting.in/frontend',
    'DEPLOY_PM2': 'dsuonline',
    'DEPLOY_APP_PORT': '3351'
}

if os.path.isfile(env_file):
    with open(env_file, 'r', encoding='utf-8') as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith('#') and '=' in line:
                k, v = line.split('=', 1)
                config[k.strip()] = v.strip()

host = config['DEPLOY_HOST']
port = int(config['DEPLOY_PORT'])
user = config['DEPLOY_USER']
password = config['DEPLOY_PASS']
remote_dir = config['DEPLOY_DIR']
pm2_name = config['DEPLOY_PM2']
app_port = config['DEPLOY_APP_PORT']

print(f"==> Connecting to {user}@{host}:{port}...")
ssh = paramiko.SSHClient()
ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
ssh.connect(host, port=port, username=user, password=password, timeout=30)
sftp = ssh.open_sftp()

print("==> Packaging project files for upload...")
exclude_dirs = {'.git', 'node_modules', '.next', 'shots'}
exclude_files = {'.server.local', 'GIT-PUSH.local.md', 'tsconfig.tsbuildinfo'}

with tempfile.NamedTemporaryFile(suffix='.tar.gz', delete=False) as tf:
    temp_archive_path = tf.name

try:
    with tarfile.open(temp_archive_path, 'w:gz') as tar:
        for root, dirs, files in os.walk('.'):
            # Prune excluded directories
            dirs[:] = [d for d in dirs if d not in exclude_dirs and not d.startswith('.next')]
            for file in files:
                if file in exclude_files or file.endswith('.tsbuildinfo'):
                    continue
                full_path = os.path.join(root, file)
                rel_path = os.path.relpath(full_path, '.')
                tar.add(full_path, arcname=rel_path)

    remote_tar = f"/home/{user}/dsuonline_deploy.tar.gz"
    print(f"==> Uploading archive ({os.path.getsize(temp_archive_path)} bytes) to {remote_tar}...")
    sftp.put(temp_archive_path, remote_tar)
finally:
    if os.path.exists(temp_archive_path):
        os.remove(temp_archive_path)

print("==> Extracting, installing dependencies, building and restarting on server...")
remote_script = f"""
set -e
export PATH=$PATH:/home/{user}/.nvm/versions/node/v24.22.0/bin
mkdir -p /home/{user}/{remote_dir}
cd /home/{user}/{remote_dir}
tar -xzf /home/{user}/dsuonline_deploy.tar.gz
rm -f /home/{user}/dsuonline_deploy.tar.gz

echo "==> Running npm install..."
npm install --no-audit --no-fund

echo "==> Running next build --webpack..."
NEXT_PUBLIC_OPT_IMAGES=1 NEXT_TELEMETRY_DISABLED=1 NODE_OPTIONS=--max-old-space-size=4096 npx next build --webpack

echo "==> Managing PM2 process '{pm2_name}'..."
if pm2 describe {pm2_name} >/dev/null 2>&1; then
    pm2 restart {pm2_name} --update-env
else
    NEXT_TELEMETRY_DISABLED=1 pm2 start node_modules/next/dist/bin/next --name {pm2_name} -- start -p {app_port}
fi
pm2 save

echo "==> Verifying health..."
sleep 3
curl -s -o /dev/null -w 'Local HTTP status: %{{http_code}}\\n' http://127.0.0.1:{app_port}/
curl -s -o /dev/null -w 'Public HTTPS status: %{{http_code}}\\n' https://dsuonline.intersmarthosting.in/
"""

stdin, stdout, stderr = ssh.exec_command(f"bash -lc '{remote_script}'")

# Stream output in real-time
for line in iter(stdout.readline, ""):
    print(line, end="")

err = stderr.read().decode('utf-8', errors='replace')
if err:
    print("\n--- STDERR / Warnings ---")
    print(err)

sftp.close()
ssh.close()
print("==> Deployment complete!")
