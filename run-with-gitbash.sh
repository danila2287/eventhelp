#!/bin/bash

echo "Исправление проекта EventHelp с помощью Git Bash..."

# Переход в папку проекта
cd "$(dirname "$0")"

echo "Удаление старых зависимостей..."
rm -rf node_modules package-lock.json

echo "Установка зависимостей..."
npm install

echo "Запуск проекта..."
npm run dev
