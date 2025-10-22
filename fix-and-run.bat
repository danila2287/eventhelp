@echo off
echo Исправление политики выполнения PowerShell...
powershell -Command "Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force"

echo Переход в папку проекта...
cd /d "%~dp0"

echo Установка зависимостей...
npm install

echo Запуск проекта...
npm run dev

pause
