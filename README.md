# EventHelp - Профессиональный персонал для мероприятий

Этот проект создан с использованием React, TypeScript, Vite и Tailwind CSS.

## Установка и запуск

1. Установите зависимости:

```bash
npm install
```

2. Запустите сервер разработки:

```bash
npm run dev
```

3. Откройте браузер и перейдите по адресу, который покажет Vite (обычно http://localhost:5173)

## Структура проекта

- `src/components/` - React компоненты
- `src/styles/` - CSS стили
- `src/assets/` - Статические ресурсы
- `public/` - Публичные файлы

## Технологии

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Radix UI компоненты

## Решение проблем

Если проект не запускается:

1. Удалите `node_modules` и `package-lock.json`
2. Выполните `npm install`
3. Запустите `npm run dev`

Если Tailwind CSS не работает, убедитесь, что:

- Установлена правильная версия Tailwind CSS (3.x)
- В `src/styles/globals.css` есть правильные импорты
- Создан файл `tailwind.config.js`
