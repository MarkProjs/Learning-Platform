import { createContext, useState, useEffect } from 'react';

export const AppContext = createContext();

export function AppProvider({ children }) {
  const [coins, setCoins] = useState(() => {
    return parseInt(localStorage.getItem('coins')) || 0;
  });

  // Initialize completed lessons
  const [completedLessons, setCompletedLessons] = useState(() => {
    return JSON.parse(localStorage.getItem('completedLessons')) || [];
  });

  // Update localStorage whenever coins or completed lessons change
  useEffect(() => {
    localStorage.setItem('coins', coins);
    localStorage.setItem('completedLessons', JSON.stringify(completedLessons));
  }, [coins, completedLessons]);

  return (
    <AppContext.Provider value={{
      coins,
      setCoins,
      completedLessons,
      setCompletedLessons
    }}>
      {children}
    </AppContext.Provider>
  );
}
