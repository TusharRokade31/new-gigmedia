// components/NavigationHandler.js
'use client';

import { useEffect, useState } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';
import { useLoading } from '../context/LoadingContext';
import PageLoader from './PageLoader';


const NavigationHandler = ({ children }) => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { isLoading, startLoading, stopLoading, enableAnimations } = useLoading();
  const [showLoader, setShowLoader] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);

  useEffect(() => {
    if (isInitialLoad) {
      setIsInitialLoad(false);
      // Enable animations on initial load after a short delay
      setTimeout(() => {
        enableAnimations();
      }, 500);
      return;
    }

    setShowLoader(true);
    startLoading();

    const timer = setTimeout(() => {
      stopLoading();
    }, 1000);

    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  const handleLoaderComplete = () => {
    setShowLoader(false);
    // Enable animations after loader completes
    setTimeout(() => {
      enableAnimations();
    }, 200);
  };

  return (
    <>
      {showLoader && (
        <PageLoader 
          isLoading={isLoading} 
          onComplete={handleLoaderComplete}
        />
      )}
     
      {children}
    </>
  );
};

export default NavigationHandler;