import React, { useState } from 'react';
import { X, Coffee, Utensils, Cookie } from 'lucide-react';

const CustomDishModal = ({ isOpen, onClose, onCreateDish }) => {
  const [dishName, setDishName] = useState('');
  const [calories, setCalories] = useState('');
  const [protein, setProtein] = useState('');
  const [carbs, setCarbs] = useState('');
  const [fat, setFat] = useState('');
  const [fiber, setFiber] = useState('');
  const [servingSize, setServingSize] = useState('');
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
    
    // Validation
    if (!dishName.trim()) {
      alert('Please enter a dish name');
      return;
    }
    if (!calories || calories <= 0) {
      alert('Please enter valid calories');
      return;
    }
    if (!servingSize.trim()) {
      alert('Please enter serving size');
      return;
    }

    // Create custom dish object
    const customDish = {
      id: Date.now(), // Simple ID generation for custom dishes
      name: dishName.trim(),
      category: 'Custom',
      type: 'Veg', // Default to Veg for custom dishes
      servingSize: servingSize.trim(),
      calories: parseFloat(calories) || 0,
      protein: parseFloat(protein) || 0,
      carbs: parseFloat(carbs) || 0,
      fat: parseFloat(fat) || 0,
      fiber: parseFloat(fiber) || 0,
      region: 'Custom'
    };

    // Call the parent function to create the dish and add it to meals
    onCreateDish({
      food: customDish,
      type: selectedMealType,
      quantity: quantity
    });

    // Reset form
    handleClose();
  };

  const handleClose = () => {
    setDishName('');
    setCalories('');
    setProtein('');
    setCarbs('');
    setFat('');
    setFiber('');
    setServingSize('');
    setSelectedMealType('breakfast');
    setQuantity(1);
    onClose();
  };

  if (!isOpen) return null;

  const totalCalories = Math.round((parseFloat(calories) || 0) * quantity);
  const totalProtein = Math.round((parseFloat(protein) || 0) * quantity);
  const totalCarbs = Math.round((parseFloat(carbs) || 0) * quantity);
  const totalFat = Math.round((parseFloat(fat) || 0) * quantity);
  const totalFiber = Math.round((parseFloat(fiber) || 0) * quantity);

  return (
    <div className="modal-overlay" onClick={handleClose}>
      <div className="modal-content custom-dish-modal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <h3>Add Custom Dish</h3>
          <button onClick={handleClose} className="close-btn">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="add-meal-form">
          <div className="custom-dish-form">
            <div className="form-section">
              <h4>Dish Information</h4>
              <div className="form-group">
                <label htmlFor="dishName">Dish Name *</label>
                <input
                  id="dishName"
                  type="text"
                  value={dishName}
                  onChange={(e) => setDishName(e.target.value)}
                  placeholder="Enter dish name (e.g., Homemade Dal)"
                  className="form-input"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="servingSize">Serving Size *</label>
                <input
                  id="servingSize"
                  type="text"
                  value={servingSize}
                  onChange={(e) => setServingSize(e.target.value)}
                  placeholder="e.g., 1 cup (150g)"
                  className="form-input"
                  required
                />
              </div>
            </div>

            <div className="form-section">
              <h4>Nutritional Information (per serving)</h4>
              <div className="nutrition-inputs">
                <div className="form-group">
                  <label htmlFor="calories">Calories *</label>
                  <input
                    id="calories"
                    type="number"
                    min="0"
                    max="2000"
                    value={calories}
                    onChange={(e) => setCalories(e.target.value)}
                    placeholder="250"
                    className="form-input nutrition-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="protein">Protein (g)</label>
                  <input
                    id="protein"
                    type="number"
                    min="0"
                    max="200"
                    step="0.1"
                    value={protein}
                    onChange={(e) => setProtein(e.target.value)}
                    placeholder="10"
                    className="form-input nutrition-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="carbs">Carbs (g)</label>
                  <input
                    id="carbs"
                    type="number"
                    min="0"
                    max="300"
                    step="0.1"
                    value={carbs}
                    onChange={(e) => setCarbs(e.target.value)}
                    placeholder="30"
                    className="form-input nutrition-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="fat">Fat (g)</label>
                  <input
                    id="fat"
                    type="number"
                    min="0"
                    max="100"
                    step="0.1"
                    value={fat}
                    onChange={(e) => setFat(e.target.value)}
                    placeholder="5"
                    className="form-input nutrition-input"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="fiber">Fiber (g)</label>
                  <input
                    id="fiber"
                    type="number"
                    min="0"
                    max="50"
                    step="0.1"
                    value={fiber}
                    onChange={(e) => setFiber(e.target.value)}
                    placeholder="3"
                    className="form-input nutrition-input"
                  />
                </div>
              </div>
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
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                disabled={quantity <= 1}
              >
                -
              </button>
              <input
                id="quantity"
                type="number"
                min="1"
                max="100"
                step="1"
                value={quantity}
                onChange={(e) => setQuantity(Math.min(100, Math.max(1, parseInt(e.target.value) || 1)))}
                className="quantity-input"
              />
              <button
                type="button"
                className="quantity-btn"
                onClick={() => setQuantity(Math.min(100, quantity + 1))}
                disabled={quantity >= 100}
              >
                +
              </button>
            </div>
            <span className="quantity-note">
              {quantity}x {servingSize || 'serving'}
            </span>
          </div>

          {calories && (
            <div className="nutrition-preview">
              <h4>Total Nutrition (for {quantity}x serving{quantity !== 1 ? 's' : ''})</h4>
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
          )}

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

export default CustomDishModal;
