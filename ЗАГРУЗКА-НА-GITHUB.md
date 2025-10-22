# 🚀 Загрузка сайта на GitHub Pages

## ✅ Сборка завершена!

После `npm run build` у вас создалась папка `dist` с готовыми файлами.

## 📁 Что нужно загрузить на GitHub

### 🎯 Основные файлы (из папки `dist`):

- **`index.html`** - главная страница сайта
- **`vite.svg`** - иконка сайта
- **`assets/`** - папка со стилями и скриптами
  - `index-CCaBZN2z.js` - JavaScript файл
  - `index-cRVWiR9v.css` - CSS файл

## 🔧 Как загрузить на GitHub

### Способ 1: Через GitHub Desktop (РЕКОМЕНДУЕТСЯ)

1. **Скачайте GitHub Desktop**: https://desktop.github.com/
2. **Создайте новый репозиторий**:
   - Нажмите "Create a new repository"
   - Название: `eventhelp-website`
   - Выберите папку для сохранения
3. **Скопируйте файлы**:
   - Скопируйте ВСЕ файлы из папки `dist` в папку репозитория
4. **Загрузите на GitHub**:
   - Напишите commit message: "Initial website upload"
   - Нажмите "Commit to main"
   - Нажмите "Publish repository"

### Способ 2: Через веб-интерфейс GitHub

1. **Создайте новый репозиторий**:
   - Перейдите на https://github.com
   - Нажмите "New repository"
   - Название: `eventhelp-website`
   - Сделайте публичным
2. **Загрузите файлы**:
   - Нажмите "uploading an existing file"
   - Перетащите ВСЕ файлы из папки `dist`
   - Напишите commit message: "Initial website upload"
   - Нажмите "Commit changes"

### Способ 3: Через командную строку

1. **Создайте папку для репозитория**:

   ```bash
   mkdir eventhelp-website
   cd eventhelp-website
   ```

2. **Скопируйте файлы**:

   ```bash
   cp -r ../eventhelp/dist/* .
   ```

3. **Инициализируйте Git**:

   ```bash
   git init
   git add .
   git commit -m "Initial website upload"
   ```

4. **Создайте репозиторий на GitHub** и подключите:
   ```bash
   git remote add origin https://github.com/ВАШ_ЛОГИН/eventhelp-website.git
   git push -u origin main
   ```

## 🌐 Включение GitHub Pages

После загрузки файлов:

1. **Перейдите в настройки репозитория**:
   - Нажмите "Settings" в репозитории
2. **Найдите раздел "Pages"**:
   - В левом меню найдите "Pages"
3. **Настройте источник**:
   - Source: "Deploy from a branch"
   - Branch: "main"
   - Folder: "/ (root)"
4. **Сохраните настройки**:
   - Нажмите "Save"
5. **Дождитесь деплоя**:
   - Обычно занимает 1-2 минуты

## 🔗 Ваш сайт будет доступен по адресу:

**https://ВАШ_ЛОГИН.github.io/eventhelp-website**

## 📋 Чек-лист для загрузки

- [ ] Создан репозиторий на GitHub
- [ ] Скопированы ВСЕ файлы из папки `dist`
- [ ] Файлы загружены в репозиторий
- [ ] Включен GitHub Pages
- [ ] Сайт доступен по ссылке

## 🎉 Готово!

После выполнения всех шагов ваш сайт будет доступен в интернете!

**Удачной загрузки! 🚀**
