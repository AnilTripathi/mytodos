# GitHub Copilot Instructions for MyTodos

## Project Overview
MyTodos is a React TypeScript application that implements a todo management system with authentication. The project uses:
- React with TypeScript
- Vite for build tooling
- Zustand for state management
- React Router for navigation

## Key Files and Their Purpose

### Components
- `ProtectedRoute.tsx`: Handles route protection for authenticated users
- `TodoForm.tsx`: Form component for creating/editing todos
- `TodoItem.tsx`: Individual todo item display component
- `TodoList.tsx`: Container component for displaying todo items

### Pages
- `login.tsx`: Handles user authentication
- `Dashboard.tsx`: Main application view for authenticated users

### State Management
- `authStore.ts`: Zustand store managing authentication state

## Common Tasks

### Authentication
- Login state is managed in `authStore.ts`
- Protected routes redirect to login if user is not authenticated
- After login, users are automatically redirected to the dashboard

### Routing
- Public routes: `/login`
- Protected routes: `/dashboard`
- Root route (`/`) redirects based on authentication status

### State Management
- Use `useAuthStore` hook to access authentication state
- Authentication state includes:
  - `isAuthenticated`: boolean
  - `login()`: function
  - `logout()`: function

## Best Practices
1. Always use TypeScript types/interfaces
2. Keep components focused and single-responsibility
3. Use protected routes for authenticated content
4. Maintain consistent state management through Zustand stores

## Development Guidelines
1. Follow existing code structure and patterns
2. Maintain type safety throughout the application
3. Use React hooks appropriately
4. Keep components modular and reusable
