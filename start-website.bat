@echo off
echo 🚀 Запуск сайта EventHelp...

REM Поиск Git Bash
set GIT_BASH_PATH=""
if exist "C:\Program Files\Git\bin\bash.exe" (
    set GIT_BASH_PATH="C:\Program Files\Git\bin\bash.exe"
) else if exist "C:\Program Files (x86)\Git\bin\bash.exe" (
    set GIT_BASH_PATH="C:\Program Files (x86)\Git\bin\bash.exe"
) else (
    echo ❌ Git Bash не найден! Установите Git for Windows
    echo 📥 Скачайте: https://git-scm.com/download/win
    pause
    exit /b 1
)

echo ✅ Найден Git Bash: %GIT_BASH_PATH%
echo 🔧 Установка зависимостей...
echo 🌐 Запуск сайта...

REM Запуск через Git Bash
%GIT_BASH_PATH% --login -i -c "cd '%~dp0' && npm install && npm run dev"

echo 🎉 Сайт запущен! Откройте http://localhost:5173
pause
