@echo off
echo Removing old dependencies...
if exist node_modules rmdir /s /q node_modules
if exist package-lock.json del package-lock.json

echo Installing dependencies...
npm install

echo Starting development server...
npm run dev
