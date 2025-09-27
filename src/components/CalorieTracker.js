import React, { useState } from 'react';
import { Trash2, Edit3, Coffee, Utensils, Cookie } from 'lucide-react';
import { format } from 'date-fns';

const CalorieTracker = ({ selectedDate, meals, onAddMeal, onRemoveMeal, onUpdateMeal }) => {
  const [editingMeal, setEditingMeal] = useState(null);
  const [editQuantity, setEditQuantity] = useState(1);

  const getMealsByType = (type) => {
    return meals.filter(meal => 
      meal.type === type && 
      format(new Date(meal.date), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
    );
  };

  const calculateMealCalories = (meals) => {
    return meals.reduce((total, meal) => total + (meal.food.calories * meal.quantity), 0);
  };

  const calculateMealNutrients = (meals) => {
    return meals.reduce((totals, meal) => ({
      protein: totals.protein + (meal.food.protein * meal.quantity),
      carbs: totals.carbs + (meal.food.carbs * meal.quantity),
      fat: totals.fat + (meal.food.fat * meal.quantity),
      fiber: totals.fiber + (meal.food.fiber * meal.quantity)
    }), { protein: 0, carbs: 0, fat: 0, fiber: 0 });
  };

  const mealTypes = [
    { type: 'breakfast', label: 'Breakfast', icon: Coffee },
    { type: 'lunch', label: 'Lunch', icon: Utensils },
    { type: 'dinner', label: 'Dinner', icon: Utensils },
    { type: 'snacks', label: 'Snacks', icon: Cookie }
  ];

  const allMeals = meals.filter(meal => 
    format(new Date(meal.date), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
  );
  
  const totalCalories = calculateMealCalories(allMeals);
  const totalNutrients = calculateMealNutrients(allMeals);

  const handleEditMeal = (meal) => {
    setEditingMeal(meal.id);
    setEditQuantity(meal.quantity);
  };

  const handleSaveEdit = (mealId) => {
    onUpdateMeal(mealId, editQuantity);
    setEditingMeal(null);
  };

  const handleCancelEdit = () => {
    setEditingMeal(null);
    setEditQuantity(1);
  };

  return (
    <div className="calorie-tracker">
      <div className="tracker-header">
        <h2>Daily Intake - {format(selectedDate, 'EEEE, MMM dd')}</h2>
        <div className="daily-summary">
          <div className="total-calories">
            <span className="calories-number">{Math.round(totalCalories)}</span>
            <span className="calories-label">calories</span>
          </div>
          <div className="nutrients-summary">
            <div className="nutrient">
              <span className="nutrient-value">{Math.round(totalNutrients.protein)}g</span>
              <span className="nutrient-label">Protein</span>
            </div>
            <div className="nutrient">
              <span className="nutrient-value">{Math.round(totalNutrients.carbs)}g</span>
              <span className="nutrient-label">Carbs</span>
            </div>
            <div className="nutrient">
              <span className="nutrient-value">{Math.round(totalNutrients.fat)}g</span>
              <span className="nutrient-label">Fat</span>
            </div>
            <div className="nutrient">
              <span className="nutrient-value">{Math.round(totalNutrients.fiber)}g</span>
              <span className="nutrient-label">Fiber</span>
            </div>
          </div>
        </div>
      </div>

      <div className="meals-container">
        {mealTypes.map(({ type, label, icon: Icon }) => {
          const mealItems = getMealsByType(type);
          const mealCalories = calculateMealCalories(mealItems);

          return (
            <div key={type} className="meal-section">
              <div className="meal-header">
                <div className="meal-title">
                  <Icon size={20} />
                  <span>{label}</span>
                </div>
                <span className="meal-calories">{Math.round(mealCalories)} cal</span>
              </div>

              <div className="meal-items">
                {mealItems.length === 0 ? (
                  <div className="empty-meal">
                    <p>No items added yet</p>
                  </div>
                ) : (
                  mealItems.map((meal) => (
                    <div key={meal.id} className="meal-item">
                      <div className="food-info">
                        <div className="food-name">{meal.food.name}</div>
                        <div className="food-details">
                          <span>{meal.food.servingSize}</span>
                          <span className="separator">•</span>
                          <span>{meal.food.category}</span>
                          <span className="separator">•</span>
                          <span className={`food-type ${meal.food.type.toLowerCase()}`}>
                            {meal.food.type}
                          </span>
                        </div>
                      </div>
                      
                      <div className="meal-actions">
                        {editingMeal === meal.id ? (
                          <div className="edit-quantity">
                            <input
                              type="number"
                              min="1"
                              max="100"
                              step="1"
                              value={editQuantity}
                              onChange={(e) => setEditQuantity(Math.min(100, Math.max(1, parseInt(e.target.value) || 1)))}
                              className="quantity-input"
                            />
                            <button
                              onClick={() => handleSaveEdit(meal.id)}
                              className="save-btn"
                            >
                              ✓
                            </button>
                            <button
                              onClick={handleCancelEdit}
                              className="cancel-btn"
                            >
                              ✕
                            </button>
                          </div>
                        ) : (
                          <>
                            <div className="quantity-info">
                              <span className="quantity">{meal.quantity}x</span>
                              <span className="meal-calories">
                                {Math.round(meal.food.calories * meal.quantity)} cal
                              </span>
                            </div>
                            <button
                              onClick={() => handleEditMeal(meal)}
                              className="edit-btn"
                            >
                              <Edit3 size={16} />
                            </button>
                            <button
                              onClick={() => onRemoveMeal(meal.id)}
                              className="remove-btn"
                            >
                              <Trash2 size={16} />
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalorieTracker;
