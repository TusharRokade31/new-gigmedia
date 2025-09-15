// context/LoadingContext.js
'use client';

import { createContext, useContext, useState } from 'react';

const LoadingContext = createContext();

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new error('useLoading must be used within LoadingProvider');
  }
  return context;
};

export const LoadingProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [animationsEnabled, setAnimationsEnabled] = useState(false);

  const startLoading = () => {
    setIsLoading(true);
    setAnimationsEnabled(false); // Disable animations when loading starts
  };
  
  const stopLoading = () => setIsLoading(false);
  
  const enableAnimations = () => setAnimationsEnabled(true);

  return (
    <LoadingContext.Provider value={{ 
      isLoading, 
      animationsEnabled,
      startLoading, 
      stopLoading,
      enableAnimations 
    }}>
      {children}
    </LoadingContext.Provider>
  );
};