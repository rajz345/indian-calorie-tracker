import React, { useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell, LineChart, Line, ResponsiveContainer } from 'recharts';
import { Calendar, TrendingUp, Target, Award } from 'lucide-react';
import { format, subDays } from 'date-fns';

const Dashboard = ({ meals, selectedDate }) => {
  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7c7c'];
  
  const weeklyData = useMemo(() => {
    const last7Days = [];
    for (let i = 6; i >= 0; i--) {
      const date = subDays(selectedDate, i);
      const dayMeals = meals.filter(meal => 
        format(new Date(meal.date), 'yyyy-MM-dd') === format(date, 'yyyy-MM-dd')
      );
      
      const totalCalories = dayMeals.reduce((total, meal) => 
        total + (meal.food.calories * meal.quantity), 0
      );
      
      const nutrients = dayMeals.reduce((totals, meal) => ({
        protein: totals.protein + (meal.food.protein * meal.quantity),
        carbs: totals.carbs + (meal.food.carbs * meal.quantity),
        fat: totals.fat + (meal.food.fat * meal.quantity),
        fiber: totals.fiber + (meal.food.fiber * meal.quantity)
      }), { protein: 0, carbs: 0, fat: 0, fiber: 0 });

      last7Days.push({
        date: format(date, 'MMM dd'),
        fullDate: date,
        calories: Math.round(totalCalories),
        protein: Math.round(nutrients.protein),
        carbs: Math.round(nutrients.carbs),
        fat: Math.round(nutrients.fat),
        fiber: Math.round(nutrients.fiber)
      });
    }
    return last7Days;
  }, [meals, selectedDate]);

  const todayMeals = meals.filter(meal => 
    format(new Date(meal.date), 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd')
  );

  const todayNutrients = todayMeals.reduce((totals, meal) => ({
    protein: totals.protein + (meal.food.protein * meal.quantity),
    carbs: totals.carbs + (meal.food.carbs * meal.quantity),
    fat: totals.fat + (meal.food.fat * meal.quantity),
    fiber: totals.fiber + (meal.food.fiber * meal.quantity)
  }), { protein: 0, carbs: 0, fat: 0, fiber: 0 });

  const pieData = [
    { name: 'Protein', value: Math.round(todayNutrients.protein * 4), color: '#8884d8' },
    { name: 'Carbs', value: Math.round(todayNutrients.carbs * 4), color: '#82ca9d' },
    { name: 'Fat', value: Math.round(todayNutrients.fat * 9), color: '#ffc658' }
  ].filter(item => item.value > 0);

  const avgWeeklyCalories = weeklyData.reduce((sum, day) => sum + day.calories, 0) / 7;
  const maxCaloriesDay = weeklyData.reduce((max, day) => day.calories > max.calories ? day : max, weeklyData[0]);

  const mealTypeDistribution = todayMeals.reduce((acc, meal) => {
    acc[meal.type] = (acc[meal.type] || 0) + (meal.food.calories * meal.quantity);
    return acc;
  }, {});

  const mealTypePieData = Object.entries(mealTypeDistribution).map(([type, calories], index) => ({
    name: type.charAt(0).toUpperCase() + type.slice(1),
    value: Math.round(calories),
    color: COLORS[index % COLORS.length]
  }));

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip">
          <p className="tooltip-label">{label}</p>
          {payload.map((entry, index) => (
            <p key={index} className="tooltip-entry" style={{ color: entry.color }}>
              {`${entry.dataKey}: ${entry.value}${entry.dataKey === 'calories' ? ' cal' : 'g'}`}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="dashboard">
      <div className="dashboard-header">
        <h2>Analytics Dashboard</h2>
        <div className="date-info">
          <Calendar size={20} />
          <span>{format(selectedDate, 'EEEE, MMMM dd, yyyy')}</span>
        </div>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">
            <Target size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{Math.round(avgWeeklyCalories)}</div>
            <div className="stat-label">Avg Daily Calories</div>
            <div className="stat-period">Last 7 days</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <TrendingUp size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{maxCaloriesDay?.calories || 0}</div>
            <div className="stat-label">Highest Day</div>
            <div className="stat-period">{maxCaloriesDay?.date}</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Award size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{todayMeals.length}</div>
            <div className="stat-label">Meals Today</div>
            <div className="stat-period">Total logged</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <Calendar size={24} />
          </div>
          <div className="stat-content">
            <div className="stat-value">{Math.round(todayNutrients.protein)}</div>
            <div className="stat-label">Protein Today</div>
            <div className="stat-period">grams</div>
          </div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="chart-card">
          <h3>Weekly Calorie Trend</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="calories" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="chart-card">
          <h3>Today's Macronutrient Breakdown</h3>
          <div className="chart-container">
            {pieData.length > 0 ? (
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={120}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            ) : (
              <div className="no-data">
                <p>No meals logged for today</p>
              </div>
            )}
          </div>
        </div>

        <div className="chart-card">
          <h3>Weekly Nutrient Trends</h3>
          <div className="chart-container">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={weeklyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Legend />
                <Bar dataKey="protein" fill="#8884d8" />
                <Bar dataKey="carbs" fill="#82ca9d" />
                <Bar dataKey="fat" fill="#ffc658" />
                <Bar dataKey="fiber" fill="#ff7c7c" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {mealTypePieData.length > 0 && (
          <div className="chart-card">
            <h3>Today's Meal Distribution</h3>
            <div className="chart-container">
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={mealTypePieData}
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    dataKey="value"
                    label={({ name, value }) => `${name}: ${value} cal`}
                  >
                    {mealTypePieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
