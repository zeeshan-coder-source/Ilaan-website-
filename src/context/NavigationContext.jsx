import React, { createContext, useContext } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  // Map route path to page identifier if components need to check `currentPage`
  const getPageId = (pathname) => {
    if (pathname.startsWith('/products')) return 'products';
    if (pathname.startsWith('/digital-signage')) return 'digital-signage';
    if (pathname.startsWith('/media')) return 'media';
    return 'home';
  };

  const currentPage = getPageId(location.pathname);

  const navigateTo = (page) => {
    if (page === 'home') {
      navigate('/');
    } else if (page === 'products') {
      navigate('/products');
    } else if (page === 'digital-signage') {
      navigate('/digital-signage');
    } else {
      navigate(`/${page}`);
    }

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
