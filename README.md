# Mykhailo Potseluiev — Resume

Персональна сторінка-резюме з сучасною технологічною стеком: React, TypeScript, Material UI та Vite.

## 🚀 Технології

- **React 19** - сучасний UI фреймворк
- **TypeScript** - типізація для надійності коду
- **Material UI (MUI)** - компонентна бібліотека
- **Vite** - швидкий build tool
- **GitHub Actions** - автоматичний деплой

## 🎨 Особливості

### ✨ UI/UX:
- **Темна тема** з градієнтами
- **Адаптивний дизайн** для всіх пристроїв
- **Плавні анімації** та hover ефекти
- **Material Design** принципи
- **Оптимізована печать** (PDF)

### 🔧 Функціональність:
- **GitHub інтеграція** - автоматичне завантаження репозиторіїв
- **Smooth scrolling** - плавна навігація
- **Loading states** - індикатори завантаження
- **Error handling** - обробка помилок
- **SEO оптимізація** - метатеги та структуровані дані

## 📁 Структура проекту

```
src/
├── components/          # React компоненти
│   ├── Header.tsx      # Навігація
│   ├── About.tsx       # Про мене
│   ├── Skills.tsx      # Навички
│   ├── Education.tsx   # Освіта
│   ├── Experience.tsx  # Досвід
│   ├── Projects.tsx    # Проєкти
│   ├── Extras.tsx      # Додатково
│   └── Footer.tsx      # Підвал
├── hooks/              # React хуки
│   ├── useProfile.ts   # Завантаження профілю
│   └── useGitHubRepos.ts # GitHub API
├── types/              # TypeScript типи
│   └── profile.ts      # Типи даних
├── data/               # Дані
│   └── profile.json    # Профіль
├── styles/             # Стилі
│   └── print.css       # Стилі для друку
├── theme.ts            # Material UI тема
├── App.tsx             # Головний компонент
└── main.tsx            # Точка входу
```

## 🛠️ Розробка

### Встановлення залежностей:
```bash
npm install
```

### Запуск в режимі розробки:
```bash
npm run dev
```

### Збірка для продакшену:
```bash
npm run build
```

### Перегляд збірки:
```bash
npm run preview
```

## 📝 Редагування даних

Всі дані профілю знаходяться в `src/data/profile.json`:

```json
{
  "name": "Mykhailo Potseluiev",
  "title": "Senior Full‑Stack / Web Developer",
  "description": "...",
  "contact": {
    "email": "...",
    "phone": "...",
    "city": "...",
    "linkedin": "...",
    "github": "...",
    "telegram": "..."
  },
  "skills": {
    "main": ["..."],
    "technical": ["..."]
  },
  "education": [...],
  "experience": [...],
  "extras": [...],
  "github": {
    "username": "..."
  }
}
```

## 🚀 Деплой

### GitHub Actions
Проект автоматично деплоїться на GitHub Pages при пуші в `main` гілку.

Workflow файл: `.github/workflows/deploy.yml`

### Налаштування GitHub Pages

1. **Увімкнення GitHub Pages:**
   - Перейдіть в Settings репозиторію
   - Знайдіть розділ "Pages"
   - Виберіть "GitHub Actions" як Source

2. **Налаштування Actions:**
   - Actions вже налаштовані в `.github/workflows/deploy.yml`
   - При пуші в `main` гілку автоматично запуститься деплой

3. **Перевірка деплою:**
   - Перейдіть в Actions tab
   - Перевірте статус workflow "Deploy to GitHub Pages"
   - Після успішного деплою сайт буде доступний за адресою: `https://username.github.io`

### Ручний деплой
1. Збірка: `npm run build`
2. Завантаження `dist/` папки на GitHub Pages

## 🎨 Налаштування теми

Тема Material UI налаштовується в `src/theme.ts`:

```typescript
export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#4f8cff',
      // ...
    },
    // ...
  },
  // ...
});
```

## 📱 Адаптивність

- **Desktop** - повна функціональність
- **Tablet** - адаптивна сітка
- **Mobile** - вертикальна навігація

## ♿ Доступність

- ✅ ARIA labels та roles
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ High contrast mode
- ✅ Focus indicators

## 🖨️ Друк (PDF)

Оптимізовані стилі для друку в `src/styles/print.css`:
- Чистий layout без навігації
- Покращена типографіка
- Правильні page breaks
- Високий контраст

## 🔧 Налаштування

### Зміна кольорів:
Редагуйте `src/theme.ts` - всі кольори налаштовуються через palette.

### Додавання нових секцій:
1. Створіть компонент в `src/components/`
2. Додайте типи в `src/types/profile.ts`
3. Оновіть `src/App.tsx`

### GitHub інтеграція:
Змініть `github.username` в `src/data/profile.json`

## 📈 Продуктивність

- **Vite** - швидка збірка
- **Tree shaking** - оптимізація розміру
- **Lazy loading** - GitHub репозиторії
- **Code splitting** - автоматичний

## 🌐 GitHub Pages

Сайт доступний за адресою: https://mykhailo-potseluiev.github.io

Автоматичний деплой при кожному пуші в `main` гілку.

## 🔄 Оновлення

Для оновлення сайту просто зробіть push в `main` гілку:

```bash
git add .
git commit -m "Update resume"
git push origin main
```

GitHub Actions автоматично збілдить та задеплоїть оновлення.
