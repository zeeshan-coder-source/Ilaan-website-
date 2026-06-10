import React, { createContext, useState, useContext } from 'react';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('home'); // 'home' or 'digital-signage'

  const navigateTo = (page) => {
    setCurrentPage(page);
    // Instantly scroll to the top of the page upon navigation
    window.scrollTo(0, 0);
    // Trigger window resize to recalculate GSAP scroll triggers and Lenis heights
    setTimeout(() => {
      window.dispatchEvent(new Event('resize'));
    }, 100);
  };

  return (
    <NavigationContext.Provider value={{ currentPage, navigateTo }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
