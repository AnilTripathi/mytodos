# MyTodos - React TypeScript Todo Application

A modern Todo application built with React, TypeScript, and Zustand for state management.

## Tech Stack

- React 18
- TypeScript
- Vite (Build Tool)
- React Router DOM (Navigation)
- Zustand (State Management)

## Features

- User Authentication (using Zustand for state management)
- Protected Routes
- Dashboard View
- Login Page
- Responsive Design

## Project Structure

```
src/
├── components/           # Reusable components
│   ├── ProtectedRoute.tsx
│   ├── TodoForm.tsx
│   ├── TodoItem.tsx
│   └── TodoList.tsx
├── pages/               # Page components
│   ├── Dashboard.tsx
│   └── login.tsx
├── store/               # State management
│   └── authStore.ts
├── types/              # TypeScript type definitions
│   └── index.ts
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm (v7 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/AnilTripathi/mytodos.git
cd mytodos
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Authentication Flow

The application implements a simple authentication flow:
1. Users start at the login page (`/login`)
2. Upon successful login, they are redirected to the dashboard (`/dashboard`)
3. Protected routes ensure only authenticated users can access certain pages
4. Unauthenticated users are automatically redirected to the login page

## State Management

The application uses Zustand for state management. The auth store (`authStore.ts`) manages:
- Authentication state
- Login/Logout functions

## Build and Development

The project uses Vite as the build tool, which provides:

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      ...tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      ...tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      ...tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
