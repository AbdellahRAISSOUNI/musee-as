'use client';

import { useEffect } from 'react';

/**
 * This component suppresses hydration warnings caused by browser extensions
 * that modify the DOM before React can hydrate it.
 */
const HydrationErrorSuppressor = () => {
  useEffect(() => {
    // This will suppress console errors related to hydration
    const originalError = console.error;
    console.error = (...args) => {
      const errorMessage = args.join(' ');
      if (
        errorMessage.includes('Hydration failed') ||
        errorMessage.includes('hydration') ||
        errorMessage.includes('Hydration')
      ) {
        // Suppress hydration errors
        return;
      }
      originalError(...args);
    };

    return () => {
      console.error = originalError;
    };
  }, []);

  return null;
};

export default HydrationErrorSuppressor; 