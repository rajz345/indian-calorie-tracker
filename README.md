# Indian Calorie Tracker 🍛

A comprehensive calorie tracking application specifically designed for Indian cuisine. This React-based web application helps users track their daily caloric intake using an extensive database of Indian dishes from various regional cuisines.

## Features

### 🍽️ Comprehensive Food Database
- **60+ Indian dishes** from various regional cuisines
- Coverage includes North Indian, South Indian, Bengali, Gujarati, Rajasthani, and Kashmiri dishes
- Categories: Main dishes, rice, bread, breakfast items, snacks, desserts, and beverages
- Detailed nutritional information including calories, protein, carbs, fat, and fiber
- Authentic serving sizes and regional classifications

### 🔍 Smart Food Search
- **Autocomplete search** with real-time suggestions
- **Category filters** (North Indian, South Indian, Breakfast, Snacks, etc.)
- **Regional filters** (Punjab, Tamil Nadu, Gujarat, West Bengal, etc.)
- Search by dish name, category, or region
- Visual indicators for vegetarian and non-vegetarian dishes

### 📊 Daily Calorie Tracking
- **Four meal categories**: Breakfast, Lunch, Dinner, and Snacks
- **Adjustable quantities** with decimal precision
- **Real-time nutritional calculations**
- **Edit and delete** logged meals
- **Date navigation** to track different days
- Daily summary with total calories and macronutrients

### 📈 Analytics Dashboard
- **Weekly calorie trends** with line charts
- **Macronutrient breakdown** with pie charts
- **Weekly nutrient analysis** with bar charts
- **Meal distribution** visualization
- **Statistical insights**: average daily calories, highest consumption day, etc.
- **Interactive charts** with detailed tooltips

### 💾 Data Persistence
- **Local storage** integration for offline functionality
- **Automatic saving** of all meal entries
- **Data persistence** across browser sessions
- **No account required** - all data stored locally

### 📱 Responsive Design
- **Mobile-first design** that works on all devices
- **Touch-friendly interface** with large buttons and easy navigation
- **Adaptive layouts** for different screen sizes
- **Modern UI** with smooth animations and transitions

## Technology Stack

- **Frontend**: React 18 with functional components and hooks
- **Charts**: Recharts for interactive data visualization
- **Icons**: Lucide React for modern iconography
- **Date Handling**: date-fns for robust date manipulation
- **Styling**: Custom CSS with modern design principles
- **Storage**: Browser localStorage for data persistence

## Getting Started

### Prerequisites
- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Start the development server**
   ```bash
   npm start
   ```

3. **Open your browser**
   Navigate to `http://localhost:3000`

### Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (one-way operation)

## Usage Guide

### Adding Meals
1. **Search for a dish** using the search bar
2. **Filter by category or region** if needed
3. **Click on a dish** from the search suggestions
4. **Select meal type** (Breakfast, Lunch, Dinner, or Snacks)
5. **Adjust quantity** using the input controls
6. **Review nutritional information** before adding
7. **Click "Add to [Meal Type]"** to log the meal

### Tracking Progress
1. **View daily summary** with total calories and nutrients
2. **Navigate between dates** using the date picker
3. **Edit meal quantities** by clicking the edit icon
4. **Remove meals** by clicking the delete icon
5. **Switch to Analytics tab** for detailed insights

### Viewing Analytics
1. **Click on the Analytics tab** in the navigation
2. **View weekly trends** in calorie consumption
3. **Analyze macronutrient distribution** 
4. **Compare daily intake** across the week
5. **Track meal timing patterns**

## Food Database

### Regional Cuisines Covered
- **North Indian**: Butter Chicken, Dal Makhani, Palak Paneer, Chole Bhature
- **South Indian**: Idli, Dosa, Sambar, Rasam, Fish Curry
- **Bengali**: Fish Curry, Aloo Posto, Shorshe Ilish
- **Gujarati**: Dhokla, Undhiyu, Thepla
- **Rajasthani**: Dal Baati Churma, Laal Maas
- **Kashmiri**: Rogan Josh, Dum Aloo
- **Street Food**: Samosa, Pani Puri, Vada Pav, Bhel Puri
- **Desserts**: Gulab Jamun, Rasgulla, Kheer, Halwa
- **Beverages**: Chai, Lassi, Fresh Lime Water

### Nutritional Information
Each dish includes:
- **Calories** per serving
- **Protein** content in grams
- **Carbohydrates** content in grams
- **Fat** content in grams
- **Fiber** content in grams
- **Serving size** with weight/volume
- **Vegetarian/Non-vegetarian** classification

## Project Structure

```
src/
├── components/
│   ├── FoodSearch.js          # Search and filter functionality
│   ├── CalorieTracker.js      # Daily meal tracking
│   ├── AddMealModal.js        # Modal for adding meals
│   └── Dashboard.js           # Analytics and charts
├── data/
│   └── indianFood.js          # Food database and helper functions
├── App.js                     # Main application component
├── App.css                    # Application styling
└── index.js                   # Application entry point
```

## Contributing

We welcome contributions to expand the food database or improve functionality:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/new-dishes`)
3. **Add new dishes** to the `indianFood.js` database
4. **Include accurate nutritional information**
5. **Test your changes**
6. **Submit a pull request**

### Adding New Dishes
When adding dishes to the database, please include:
- Accurate nutritional information from reliable sources
- Proper regional classification
- Standard serving sizes
- Vegetarian/non-vegetarian classification

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Nutritional data sourced from various Indian nutrition databases
- UI inspiration from modern fitness and health applications
- React community for excellent libraries and tools

---

**Enjoy tracking your Indian cuisine calories! 🍛📊**
