// components/PageLoader.js (Alternative approach)
'use client';

import { useState, useEffect } from 'react';
import styles from './PageLoader.module.css';
import logo from "../assets/images/main-logo.svg"
import Image from 'next/image';
const PageLoader = ({ isLoading, onComplete }) => {
  const [animationStage, setAnimationStage] = useState('loading');
  const [showPersistentLogo, setShowPersistentLogo] = useState(false);

  useEffect(() => {
    if (!isLoading && animationStage === 'loading') {
      setAnimationStage('moving');
      
      setTimeout(() => {
        setAnimationStage('curtains');
      }, 800);
      
      setTimeout(() => {
        setAnimationStage('completed');
        setShowPersistentLogo(true);
        onComplete();
      }, 1300);
    }
  }, [isLoading, animationStage, onComplete]);

  useEffect(() => {
    if (isLoading && showPersistentLogo) {
      setShowPersistentLogo(false);
      setAnimationStage('loading');
    }
  }, [isLoading]);

  return (
    <>
      {/* Main Loader */}
      {animationStage !== 'completed' && (
        <div className={`${styles.loaderContainer} ${
          animationStage === 'curtains' ? styles.curtainOpen : ''
        }`}>
          <div className={`${styles.curtain} ${styles.curtainLeft} ${
            animationStage === 'curtains' ? styles.curtainLeftOpen : ''
          }`}></div>
          
          <div className={`${styles.curtain} ${styles.curtainRight} ${
            animationStage === 'curtains' ? styles.curtainRightOpen : ''
          }`}></div>
          
          <div className={`${styles.logo} ${
            animationStage === 'moving' || animationStage === 'curtains' ? styles.logoMoveToTop : ''
          }`}>
            <Image src={logo}  width={100} height={100} alt="Logo" />
          </div>
        </div>
      )}

      {/* Persistent Logo */}
      {showPersistentLogo && (
        <div className={styles.persistentLogo}>
          <Image src={logo}  width={100} height={100} alt="Logo" />
        </div>
      )}
    </>
  );
};

export default PageLoader;