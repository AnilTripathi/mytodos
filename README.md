# MyTodos - React TypeScript Todo Application

A modern, responsive Todo application built with React, TypeScript, and Zustand for state management. Features a clean, centered design with Bootstrap styling and secure routing.

## 🚀 Features

- **Authentication System**
  - Secure login/logout functionality
  - Protected routes
  - Persistent authentication state
  
- **Todo Management**
  - Create new todos
  - Mark todos as complete/incomplete
  - Delete todos
  - Persistent todo storage
  
- **Modern UI/UX**
  - Bootstrap-based responsive design
  - Clean, centered layout
  - Icon-based interface
  - Mobile-friendly

## 🛠️ Tech Stack

- **Frontend Framework:** React 18 with TypeScript
- **Build Tool:** Vite
- **Routing:** React Router DOM v6
- **State Management:** Zustand
- **Styling:** Bootstrap 5 & Bootstrap Icons
- **Type Safety:** TypeScript

## 📁 Project Structure

```
src/
├── components/           # Reusable UI components
│   ├── Layout.tsx       # Main layout wrapper
│   ├── Navbar.tsx       # Navigation bar
│   ├── ProtectedRoute.tsx # Auth route protection
│   ├── TodoForm.tsx     # Todo creation form
│   ├── TodoItem.tsx     # Individual todo display
│   └── TodoList.tsx     # Todo items container
├── pages/               # Page components
│   ├── Dashboard.tsx    # Main todo management view
│   └── login.tsx        # Authentication page
├── store/               # State management
│   └── authStore.ts     # Authentication state
├── types/               # TypeScript definitions
│   └── index.ts        # Shared type definitions
├── App.tsx             # Root component
└── main.tsx           # Application entry

## 🚦 Getting Started

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

### Build for Production

```bash
npm run build
```

This will create an optimized build in the `dist` directory.

## 🔒 Authentication Flow

The application implements a secure authentication flow:

1. **Initial Access**
   - Users land on the login page (`/login`)
   - Authenticated users are automatically redirected to dashboard

2. **Route Protection**
   - All routes under `/dashboard` are protected
   - Unauthorized access attempts redirect to login
   - Authentication state persists across page reloads

3. **User Session**
   - Login state managed via Zustand store
   - Secure logout functionality
   - Automatic redirects based on auth state

## 🏗️ Application Architecture

### State Management with Zustand
- Centralized state management using Zustand
- Clean and simple store implementation
- Persistent authentication state
- Type-safe state access

### Routing
- React Router v6 for navigation
- Protected route wrapper component
- Automatic redirects based on auth state
- Clean URL structure

### Component Structure
- Reusable, focused components
- Clear separation of concerns
- TypeScript interfaces for props
- Bootstrap-based styling

## 🎨 Styling Guide

The application uses Bootstrap 5 for styling with custom enhancements:

- Centered card layouts
- Responsive design patterns
- Icon-based interactions
- Consistent spacing
- Mobile-first approach

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
