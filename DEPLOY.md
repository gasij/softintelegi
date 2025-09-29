# Деплой на Netlify

## Вариант 1: Через веб-интерфейс Netlify

1. Перейдите на [netlify.com](https://netlify.com)
2. Зарегистрируйтесь или войдите в аккаунт
3. Нажмите "New site from Git"
4. Подключите ваш GitHub репозиторий
5. Настройки сборки:
   - Build command: `npm run build`
   - Publish directory: `build`
6. Нажмите "Deploy site"

## Вариант 2: Drag & Drop

1. Перейдите на [netlify.com](https://netlify.com)
2. Перетащите папку `build` в область "Deploy manually"
3. Сайт автоматически задеплоится

## Вариант 3: Через Netlify CLI

```bash
# Установите Netlify CLI
npm install -g netlify-cli

# Войдите в аккаунт
netlify login

# Деплой
netlify deploy --prod --dir=build
```

## Настройки домена

После деплоя вы можете:
- Использовать автоматический домен netlify.app
- Подключить собственный домен в настройках сайта
- Настроить SSL сертификат

## Файлы для деплоя

- `build/` - собранная версия сайта
- `netlify.toml` - конфигурация Netlify
- `public/_redirects` - редиректы для SPA
