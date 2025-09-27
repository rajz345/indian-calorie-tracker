import React, { useState, useEffect } from 'react';
import { Search, Plus } from 'lucide-react';
import { searchFood, getUniqueCategories, getUniqueRegions } from '../data/indianFood';

const FoodSearch = ({ onFoodSelect }) => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);

  const categories = getUniqueCategories();
  const regions = getUniqueRegions();

  useEffect(() => {
    if (query.length > 1) {
      const results = searchFood(query).slice(0, 8); // Limit to 8 suggestions
      setSuggestions(results);
      setShowSuggestions(true);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
    }
  }, [query]);

  const handleFoodSelect = (food) => {
    onFoodSelect(food);
    setQuery('');
    setShowSuggestions(false);
  };

  const filteredSuggestions = suggestions.filter(food => {
    const categoryMatch = !selectedCategory || food.category === selectedCategory;
    const regionMatch = !selectedRegion || food.region === selectedRegion;
    return categoryMatch && regionMatch;
  });

  return (
    <div className="food-search">
      <div className="search-filters">
        <div className="filter-group">
          <select 
            value={selectedCategory} 
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="filter-select"
          >
            <option value="">All Categories</option>
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className="filter-group">
          <select 
            value={selectedRegion} 
            onChange={(e) => setSelectedRegion(e.target.value)}
            className="filter-select"
          >
            <option value="">All Regions</option>
            {regions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="search-container">
        <div className="search-input-wrapper">
          <Search className="search-icon" size={20} />
          <input
            type="text"
            placeholder="Search Indian dishes (e.g., butter chicken, idli, biryani...)"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="search-input"
            onFocus={() => query.length > 1 && setShowSuggestions(true)}
          />
        </div>

        {showSuggestions && filteredSuggestions.length > 0 && (
          <div className="suggestions-dropdown">
            {filteredSuggestions.map((food) => (
              <div
                key={food.id}
                className="suggestion-item"
                onClick={() => handleFoodSelect(food)}
              >
                <div className="food-info">
                  <div className="food-name">{food.name}</div>
                  <div className="food-details">
                    <span className="category">{food.category}</span>
                    <span className="separator">•</span>
                    <span className="region">{food.region}</span>
                    <span className="separator">•</span>
                    <span className="calories">{food.calories} cal</span>
                    <span className="separator">•</span>
                    <span className="serving">{food.servingSize}</span>
                  </div>
                </div>
                <Plus className="add-icon" size={20} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodSearch;
