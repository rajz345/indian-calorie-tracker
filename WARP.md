# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

Indian Calorie Tracker is a React-based web application for tracking caloric intake specifically designed for Indian cuisine. The app features a comprehensive database of 70+ Indian dishes from various regional cuisines, smart search functionality, daily meal tracking, and analytics dashboard with interactive charts.

## Development Commands

### Essential Commands
```bash
# Install dependencies
npm install

# Start development server (runs on http://localhost:3000)
npm start

# Build for production
npm run build

# Run tests
npm test

# Run single test file
npm test -- --testNamePattern="specific test name"

# Run tests in watch mode
npm test -- --watch

# Eject from Create React App (irreversible)
npm run eject
```

### Testing Individual Components
```bash
# Test specific file
npm test src/components/FoodSearch.test.js

# Run tests with coverage
npm test -- --coverage --watchAll=false
```

## Architecture Overview

### Component Structure
- **App.js**: Main application component managing global state (meals, selectedDate, activeTab)
- **FoodSearch**: Autocomplete search with category/region filters for food database
- **CalorieTracker**: Daily meal logging with four meal types (breakfast, lunch, dinner, snacks)
- **AddMealModal**: Modal for adding meals with quantity selection and nutrition preview
- **Dashboard**: Analytics dashboard with charts showing weekly trends and macronutrient breakdowns

### Data Management
- **localStorage**: All meal data persists locally using browser storage
- **indianFood.js**: Central food database with 70+ dishes containing nutritional information
- **State management**: React hooks (useState, useEffect) with prop drilling for component communication

### Key Data Structures
```javascript
// Meal object structure
{
  id: "unique_id",
  food: {...foodObject},
  type: "breakfast|lunch|dinner|snacks",
  quantity: 1.5,
  date: "ISO string",
  timestamp: "ISO string"
}

// Food object structure
{
  id: number,
  name: string,
  category: string,
  type: "Veg|Non-Veg",
  servingSize: string,
  calories: number,
  protein: number,
  carbs: number,
  fat: number,
  fiber: number,
  region: string
}
```

### Food Database Categories
- **Regional**: North Indian, South Indian, Bengali, Gujarati, Rajasthani, Kashmiri, Odia
- **Meal Types**: Rice, Bread, Breakfast, Snacks, Desserts, Beverages
- **Geographic Coverage**: Punjab, Tamil Nadu, Kerala, Gujarat, West Bengal, Maharashtra, Rajasthan, Kashmir, Odisha

## Technical Stack

### Core Dependencies
- **React 19.1.1**: Main framework with functional components and hooks
- **date-fns**: Date manipulation and formatting
- **recharts**: Interactive charts for analytics dashboard
- **lucide-react**: Modern icon library
- **react-scripts**: Create React App build tooling

### Key Features Implementation
- **Search**: Real-time autocomplete with fuzzy matching on name, category, and region
- **Filtering**: Category and region-based filtering with dropdown selectors
- **Persistence**: localStorage integration with automatic save/load
- **Responsive**: Mobile-first CSS design with flexbox/grid layouts
- **Analytics**: Weekly trends, macronutrient breakdown, meal distribution charts

## Development Patterns

### State Management
- Global state in App.js passed down via props
- Local state in components for UI-specific data (editing mode, form inputs)
- localStorage sync using useEffect hooks for persistence

### Component Communication
- Parent-to-child: Props passing
- Child-to-parent: Callback functions (onAddMeal, onRemoveMeal, onUpdateMeal)
- No external state management library (Redux/Context API)

### Styling Approach
- Custom CSS with BEM-like naming conventions
- CSS Grid and Flexbox for layouts
- CSS custom properties for consistent theming
- Mobile-first responsive design

### Data Flow
1. **Search**: FoodSearch → food selection → AddMealModal → meal creation → App state update
2. **Tracking**: CalorieTracker displays filtered meals by date and type
3. **Analytics**: Dashboard processes all meals for trend analysis and visualization

## Adding New Foods

When adding dishes to `src/data/indianFood.js`:
- Follow existing object structure with all required nutritional fields
- Include accurate serving sizes with units (g/ml)
- Classify by appropriate category and region
- Ensure nutritional data is per serving size specified
- Add unique sequential ID numbers

## Testing Strategy

Current test setup uses React Testing Library. When adding tests:
- Test component rendering and user interactions
- Mock localStorage for persistence tests  
- Test search functionality with various query types
- Verify meal calculations and date filtering logic
- Test modal open/close behaviors

## Common Development Tasks

### Adding New Chart Types
- Import chart component from recharts
- Create data transformation function in Dashboard.js
- Add responsive container with proper height
- Include custom tooltips for better UX

### Extending Food Database
- Add new food objects to indianFoodDatabase array
- Include new categories/regions in appropriate arrays
- Test search functionality with new additions
- Verify nutritional calculations are accurate

### Adding New Meal Categories
- Update mealTypes array in CalorieTracker.js and AddMealModal.js
- Add appropriate icons from lucide-react
- Update filtering logic in getMealsByType function
- Test meal distribution charts include new category

## Performance Notes

- Food search debounces after 2 characters to avoid excessive filtering
- Charts use ResponsiveContainer for optimal rendering
- localStorage operations are batched in useEffect hooks
- Component re-renders minimized through proper dependency arrays
