import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BarChart3, Home } from 'lucide-react';
import { format, addDays, subDays } from 'date-fns';
import './App.css';

// Import components
import FoodSearch from './components/FoodSearch';
import CalorieTracker from './components/CalorieTracker';
import AddMealModal from './components/AddMealModal';
import Dashboard from './components/Dashboard';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeTab, setActiveTab] = useState('tracker');
  const [meals, setMeals] = useState([]);
  const [selectedFood, setSelectedFood] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load meals from localStorage on component mount
  useEffect(() => {
    const savedMeals = localStorage.getItem('indianCalorieTracker_meals');
    if (savedMeals) {
      try {
        const parsedMeals = JSON.parse(savedMeals);
        setMeals(parsedMeals);
      } catch (error) {
        console.error('Error parsing saved meals:', error);
      }
    }
  }, []);

  // Save meals to localStorage whenever meals change
  useEffect(() => {
    localStorage.setItem('indianCalorieTracker_meals', JSON.stringify(meals));
  }, [meals]);

  const handleFoodSelect = (food) => {
    setSelectedFood(food);
    setIsModalOpen(true);
  };

  const handleAddMeal = (mealData) => {
    const newMeal = {
      id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
      ...mealData,
      date: selectedDate.toISOString(),
      timestamp: new Date().toISOString()
    };
    setMeals(prevMeals => [...prevMeals, newMeal]);
  };

  const handleRemoveMeal = (mealId) => {
    setMeals(prevMeals => prevMeals.filter(meal => meal.id !== mealId));
  };

  const handleUpdateMeal = (mealId, newQuantity) => {
    setMeals(prevMeals => 
      prevMeals.map(meal => 
        meal.id === mealId ? { ...meal, quantity: newQuantity } : meal
      )
    );
  };

  const handlePreviousDay = () => {
    setSelectedDate(prevDate => subDays(prevDate, 1));
  };

  const handleNextDay = () => {
    setSelectedDate(prevDate => addDays(prevDate, 1));
  };

  const handleToday = () => {
    setSelectedDate(new Date());
  };

  return (
    <div className="App">
      <header className="app-header">
        <div className="header-content">
          <h1 className="app-title">
            <span className="title-icon">🍛</span>
            Indian Calorie Tracker
          </h1>
          <nav className="main-nav">
            <button 
              className={`nav-btn ${activeTab === 'tracker' ? 'active' : ''}`}
              onClick={() => setActiveTab('tracker')}
            >
              <Home size={20} />
              <span>Tracker</span>
            </button>
            <button 
              className={`nav-btn ${activeTab === 'dashboard' ? 'active' : ''}`}
              onClick={() => setActiveTab('dashboard')}
            >
              <BarChart3 size={20} />
              <span>Analytics</span>
            </button>
          </nav>
        </div>
      </header>

      <main className="app-main">
        {activeTab === 'tracker' && (
          <>
            <div className="date-navigation">
              <button onClick={handlePreviousDay} className="date-nav-btn">
                <ChevronLeft size={20} />
              </button>
              <div className="date-display">
                <span className="current-date">
                  {format(selectedDate, 'EEEE, MMMM dd, yyyy')}
                </span>
                <button onClick={handleToday} className="today-btn">
                  Today
                </button>
              </div>
              <button onClick={handleNextDay} className="date-nav-btn">
                <ChevronRight size={20} />
              </button>
            </div>

            <div className="main-content">
              <div className="search-section">
                <FoodSearch onFoodSelect={handleFoodSelect} />
              </div>
              
              <div className="tracker-section">
                <CalorieTracker 
                  selectedDate={selectedDate}
                  meals={meals}
                  onAddMeal={handleAddMeal}
                  onRemoveMeal={handleRemoveMeal}
                  onUpdateMeal={handleUpdateMeal}
                />
              </div>
            </div>
          </>
        )}

        {activeTab === 'dashboard' && (
          <div className="dashboard-section">
            <Dashboard meals={meals} selectedDate={selectedDate} />
          </div>
        )}
      </main>

      <AddMealModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedFood={selectedFood}
        onAddMeal={handleAddMeal}
      />
    </div>
  );
}

export default App;
