# Rick and Morty Character Explorer

A React-based web application that showcases characters from the Rick and Morty universe using the [Rick and Morty API](https://rickandmortyapi.com/).

## 🌟 Latest Deployment

[View Live Demo](https://candid-cheesecake-8f641b.netlify.app/)

## 🚀 Features

- **Character Listing**: Browse through all Rick and Morty characters with pagination
- **Character Details**: View detailed information about each character
- **Responsive Design**: Fully responsive UI that works on all device sizes
- **Breadcrumb Navigation**: Easy navigation through the application
- **Modern UI**: Built with Tailwind CSS for a clean, modern look

## 🛠️ Tech Stack

- React 18
- TypeScript
- Vite
- React Query for data fetching
- React Router v7 for routing
- Tailwind CSS for styling
- Vitest for testing
- MSW for API mocking
- ESLint + Prettier for code quality

## 🔧 Local Development Setup

1. Clone the repository:

   ```bash
   git clone https://github.com/Elerqsousy/tgx-task.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open http://localhost:5173 to view the app

## 🧪 Testing

The project includes comprehensive testing:

- **Unit Tests**: Components and utilities
- **Integration Tests**: Page-level functionality
- **API Mocking**: Using MSW (Mock Service Worker)
- **Coverage Reports**: Maintained at 90% or higher

Run tests:

```bash
npm test                 # Run tests in watch mode
npm run test:coverage    # Generate coverage report
```

## 🔍 Code Quality

- ESLint configuration with TypeScript support
- Prettier for consistent code formatting
- Git hooks for pre-commit validation
- Structured import ordering
- TypeScript strict mode enabled

## 🏗️ CI/CD Pipeline

The project uses GitHub Actions for automated workflows:

- **Continuous Integration**:
  - Code linting
  - Type checking
  - Unit and integration tests
  - Coverage reports

- **Continuous Deployment**:
  - Automated builds
  - Deployment to GitHub Pages
  - Environment-specific configurations

## 📦 Project Structure

```
src/
├── api/          # API integration
├── components/   # Reusable UI components
├── features/     # Feature-specific components
├── routes/       # Route definitions
└── utils/        # Utility functions
```

## 🔄 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm test` - Run tests
- `npm run deploy` - Deploy to GitHub Pages
- `npm run typecheck` - Check TypeScript types

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
