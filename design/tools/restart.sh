#!/bin/bash
cd "D:/iss/dsu online"
powershell.exe -NoProfile -Command "Get-NetTCPConnection -LocalPort 3111 -State Listen -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id \$_.OwningProcess -Force }"
sleep 1
npm run build 2>&1 | grep -E "rror|Compiled" 
(npx next start -p 3111 > /tmp/next2.log 2>&1 &)
sleep 5
