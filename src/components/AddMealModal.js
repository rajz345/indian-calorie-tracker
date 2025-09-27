import React, { useState } from 'react';
import { X, Coffee, Utensils, Cookie } from 'lucide-react';

const AddMealModal = ({ isOpen, onClose, selectedFood, onAddMeal }) => {
  const [selectedMealType, setSelectedMealType] = useState('breakfast');
  const [quantity, setQuantity] = useState(1);

  const mealTypes = [
    { type: 'breakfast', label: 'Breakfast', icon: Coffee },
    { type: 'lunch', label: 'Lunch', icon: Utensils },
    { type: 'dinner', label: 'Dinner', icon: Utensils },
    { type: 'snacks', label: 'Snacks', icon: Cookie }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedFood && quantity > 0) {
      onAddMeal({
        food: selectedFood,
        type: selectedMealType,
        quantity: quantity
      });
      onClose();
      setQuantity(1);
      setSelectedMealType('breakfast');
    }
  };

  const handleClose = () => {
    onClose();
    setQuantity(1);
    setSelectedMealType('breakfast');
  };

  if (!isOpen || !selectedFood) return null;

  const totalCalories = Math.round(selectedFood.calories * quantity);
  const totalProtein = Math.round(selectedFood.protein * quantity);
  const totalCarbs = Math.round(selectedFood.carbs * quantity);
  const totalFat = Math.round(selectedFood.fat * quantity);
  const totalFiber = Math.round(selectedFood.fiber * quantity);

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Add to Meal</h3>
          <button onClick={handleClose} className="close-btn">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="add-meal-form">
          <div className="food-preview">
            <div className="food-name">{selectedFood.name}</div>
            <div className="food-meta">
              <span className="category">{selectedFood.category}</span>
              <span className="separator">•</span>
              <span className="region">{selectedFood.region}</span>
              <span className="separator">•</span>
              <span className={`food-type ${selectedFood.type.toLowerCase()}`}>
                {selectedFood.type}
              </span>
            </div>
            <div className="serving-size">
              Serving size: {selectedFood.servingSize}
            </div>
          </div>

          <div className="meal-type-selection">
            <label>Add to:</label>
            <div className="meal-type-options">
              {mealTypes.map(({ type, label, icon: Icon }) => (
                <button
                  key={type}
                  type="button"
                  className={`meal-type-btn ${selectedMealType === type ? 'active' : ''}`}
                  onClick={() => setSelectedMealType(type)}
                >
                  <Icon size={20} />
                  <span>{label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="quantity-selection">
            <label htmlFor="quantity">Quantity:</label>
            <div className="quantity-input-group">
              <button
                type="button"
                className="quantity-btn"
                onClick={() => setQuantity(Math.max(0.1, quantity - 0.1))}
                disabled={quantity <= 0.1}
              >
                -
              </button>
              <input
                id="quantity"
                type="number"
                min="0.1"
                step="0.1"
                value={quantity}
                onChange={(e) => setQuantity(parseFloat(e.target.value) || 1)}
                className="quantity-input"
              />
              <button
                type="button"
                className="quantity-btn"
                onClick={() => setQuantity(quantity + 0.1)}
              >
                +
              </button>
            </div>
            <span className="quantity-note">
              {quantity}x {selectedFood.servingSize}
            </span>
          </div>

          <div className="nutrition-preview">
            <h4>Nutrition (for {quantity}x serving{quantity !== 1 ? 's' : ''})</h4>
            <div className="nutrition-grid">
              <div className="nutrition-item">
                <span className="nutrition-label">Calories</span>
                <span className="nutrition-value">{totalCalories}</span>
              </div>
              <div className="nutrition-item">
                <span className="nutrition-label">Protein</span>
                <span className="nutrition-value">{totalProtein}g</span>
              </div>
              <div className="nutrition-item">
                <span className="nutrition-label">Carbs</span>
                <span className="nutrition-value">{totalCarbs}g</span>
              </div>
              <div className="nutrition-item">
                <span className="nutrition-label">Fat</span>
                <span className="nutrition-value">{totalFat}g</span>
              </div>
              <div className="nutrition-item">
                <span className="nutrition-label">Fiber</span>
                <span className="nutrition-value">{totalFiber}g</span>
              </div>
            </div>
          </div>

          <div className="modal-actions">
            <button type="button" onClick={handleClose} className="cancel-btn">
              Cancel
            </button>
            <button type="submit" className="add-btn">
              Add to {mealTypes.find(m => m.type === selectedMealType)?.label}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMealModal;
