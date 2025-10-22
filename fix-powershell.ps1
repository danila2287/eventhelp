# Исправление политики выполнения PowerShell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force

Write-Host "Политика выполнения исправлена!" -ForegroundColor Green

# Переход в папку проекта
Set-Location ".\eventhelp\"

Write-Host "Установка зависимостей..." -ForegroundColor Yellow
npm install

Write-Host "Запуск проекта..." -ForegroundColor Yellow
npm run dev
