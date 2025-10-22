@echo off
echo Запуск проекта через Git Bash...

REM Поиск Git Bash
set GIT_BASH_PATH=""
if exist "C:\Program Files\Git\bin\bash.exe" (
    set GIT_BASH_PATH="C:\Program Files\Git\bin\bash.exe"
) else if exist "C:\Program Files (x86)\Git\bin\bash.exe" (
    set GIT_BASH_PATH="C:\Program Files (x86)\Git\bin\bash.exe"
) else (
    echo Git Bash не найден! Установите Git for Windows
    pause
    exit /b 1
)

echo Найден Git Bash: %GIT_BASH_PATH%

REM Запуск Git Bash с нашим скриптом
%GIT_BASH_PATH% --login -i -c "cd '%~dp0' && bash run-with-gitbash.sh"

pause
