@echo off
echo 🚀 Подготовка файлов для загрузки на GitHub...

echo 📁 Создание папки для GitHub...
if not exist "github-upload" mkdir "github-upload"

echo 📋 Копирование файлов из dist...
xcopy "dist\*" "github-upload\" /E /I /Y

echo ✅ Файлы готовы для загрузки!
echo 📂 Откройте папку: github-upload
echo 📋 Скопируйте ВСЕ файлы из этой папки в ваш GitHub репозиторий

echo.
echo 🌐 Инструкции:
echo 1. Создайте новый репозиторий на GitHub
echo 2. Назовите его: eventhelp-website
echo 3. Загрузите ВСЕ файлы из папки github-upload
echo 4. Включите GitHub Pages в настройках
echo 5. Ваш сайт будет доступен по адресу: https://ВАШ_ЛОГИН.github.io/eventhelp-website

pause
