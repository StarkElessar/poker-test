# Buy-In Modal Component

Интерактивный React-компонент для покупки входа в покерные столы с выбором типа валюты, суммы и количества столов.

- Выбор типа денег (Real money / Cash money)
- Настройка суммы через input, слайдер или кнопки Min/Max
- Счётчик количества столов
- Автоматический расчёт итоговой суммы списания

## Скрипты

Если на компьютере среды выполнения bun.js, тогда нужно удалить `bun.lock` и запустить команду:

```bash
npm install && npm run dev
```

### Разработка

```bash
bun install
bun dev
bun build
bun preview
```

### Качество кода

```bash
bun lint	# ESLint: проверка и автоисправление TypeScript/JS
bun lint:css	# Stylelint: проверка и автоисправление SCSS
bun typecheck	# TypeScript: проверка типов
```
## Стек

- **React 19** + **TypeScript**
- **Vite + bun.js** — быстрая сборка
- **SASS** — модульные стили (`.module.scss`)
- **react-icons** — иконки
- **classnames** — условные стили
