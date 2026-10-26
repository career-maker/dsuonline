import os
from PIL import Image

def optimize_image(filepath):
    orig_size = os.path.getsize(filepath)
    ext = os.path.splitext(filepath)[1].lower()
    
    try:
        im = Image.open(filepath)
        w, h = im.size
        
        # Determine max dimension based on path
        rel = filepath.replace('\\', '/')
        max_w = None
        
        if '/partners/' in rel:
            max_w = 320
        elif '/awards/' in rel:
            max_w = 450
        elif '/brand/' in rel:
            if 'logo' in rel:
                max_w = 800
            elif 'naac' in rel:
                max_w = 600
            elif 'ugc' in rel:
                max_w = 450
            else:
                max_w = 400
        elif '/about/' in rel:
            max_w = 1200
        elif '/learn/' in rel:
            max_w = 1100
        elif '/faculty/' in rel:
            max_w = 500
        elif '/blog/' in rel:
            max_w = 700
        elif '/hero/' in rel:
            if 'mobile' in rel:
                max_w = 800
            else:
                max_w = 1920
        elif '/testimonials/' in rel:
            max_w = 700
        elif '/programs/' in rel:
            max_w = 800
        elif '/career/' in rel:
            max_w = 1000
            
        resized = False
        if max_w and w > max_w:
            new_h = int(h * max_w / w)
            im = im.resize((max_w, new_h), Image.Resampling.LANCZOS)
            resized = True
            
        temp_out = filepath + '.tmp'
        
        if ext == '.png':
            # Quantize or save optimized PNG
            im.save(temp_out, 'PNG', optimize=True)
        elif ext == '.webp':
            im.save(temp_out, 'WEBP', quality=82, method=6)
        elif ext in ('.jpg', '.jpeg'):
            im.save(temp_out, 'JPEG', quality=82, optimize=True)
        else:
            return
            
        new_size = os.path.getsize(temp_out)
        if new_size < orig_size:
            os.replace(temp_out, filepath)
            print(f"Compressed {rel}: {orig_size/1024:.1f}KB -> {new_size/1024:.1f}KB (-{(orig_size-new_size)/1024:.1f}KB)")
        else:
            os.remove(temp_out)
    except Exception as e:
        print(f"Error optimizing {filepath}: {e}")

def main():
    for root, _, files in os.walk('public/images'):
        for f in files:
            if f.endswith(('.png', '.webp', '.jpg', '.jpeg')):
                optimize_image(os.path.join(root, f))

if __name__ == '__main__':
    main()
