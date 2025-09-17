// components/CustomCursor.jsx
"use client"
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const xToRef = useRef(null);
  const yToRef = useRef(null);

  useEffect(() => {
    if (!cursorRef.current) return;

    // Set initial position (centered)
    gsap.set(cursorRef.current, { xPercent: -50, yPercent: -50 });

    // Create quickTo animations
    xToRef.current = gsap.quickTo(cursorRef.current, "x", {
      duration: 0.6,
      ease: "power3"
    });
    yToRef.current = gsap.quickTo(cursorRef.current, "y", {
      duration: 0.6,
      ease: "power3"
    });

    const handleMouseMove = (e) => {
      if (xToRef.current && yToRef.current) {
        xToRef.current(e.clientX);
        yToRef.current(e.clientY);
      }
    };

    // Add event listener
    window.addEventListener("mousemove", handleMouseMove);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="hidden md:block custom-cursor bg-transparent border border-white"
      style={{
        width: '40px',
        height: '40px',
        position: 'fixed',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 9999,
        // Add your custom styling here
        
        borderRadius: '50%',
        mixBlendMode: 'difference', // Optional: creates a cool effect
      }}
    />
  );
};

export default CustomCursor;