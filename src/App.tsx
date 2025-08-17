import React, { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import Dashboard from './components/Dashboard';
import RestaurantMenu from './components/RestaurantMenu';
import Profile from './components/Profile';
import Orders from './components/Orders';
import { Restaurant } from './types';

function App() {
  const [currentScreen, setCurrentScreen] = useState<'login' | 'dashboard' | 'menu' | 'profile' | 'orders'>('login');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [user, setUser] = useState({ phone: '' });

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentScreen('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentScreen('login');
    setSelectedRestaurant(null);
    setUser({ phone: '' });
  };

  const handleRestaurantSelect = (restaurant: Restaurant) => {
    setSelectedRestaurant(restaurant);
    setCurrentScreen('menu');
  };

  const handleNavigation = (screen: 'dashboard' | 'profile' | 'orders') => {
    setCurrentScreen(screen);
  };

  const handleBackToDashboard = () => {
    setCurrentScreen('dashboard');
    setSelectedRestaurant(null);
  };

  if (!isAuthenticated) {
    return <LoginScreen onLogin={handleLogin} setUser={setUser} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-yellow-50">
      {currentScreen === 'dashboard' && (
        <Dashboard 
          onRestaurantSelect={handleRestaurantSelect}
          onNavigate={handleNavigation}
          user={user}
        />
      )}
      {currentScreen === 'menu' && selectedRestaurant && (
        <RestaurantMenu 
          restaurant={selectedRestaurant}
          onBack={handleBackToDashboard}
        />
      )}
      {currentScreen === 'profile' && (
        <Profile onBack={handleBackToDashboard} onLogout={handleLogout} user={user} />
      )}
      {currentScreen === 'orders' && (
        <Orders onBack={handleBackToDashboard} />
      )}
    </div>
  );
}

export default App;