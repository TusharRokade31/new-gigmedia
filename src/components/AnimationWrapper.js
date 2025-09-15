// components/AnimationWrapper.js
'use client';

import { useLoading } from '../context/LoadingContext';

const AnimationWrapper = ({ children, className = "" }) => {
  const { animationsEnabled } = useLoading();

  return (
    <div className={`${className} ${animationsEnabled ? 'animations-enabled' : 'animations-disabled'}`}>
      {children}
    </div>
  );
};

export default AnimationWrapper;