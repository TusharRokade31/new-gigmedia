"use client"
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MagneticSection = () => {
  const circles = [
    { id: 1, text: "DESIRE", description: "Understand customer desires and influencing factors. Ut eius nesciunt est voluptatem internos qui dolor libero" },
    { id: 2, text: "POTENTIAL", description: "Discover new market opportunities by identifying unmet needs and customer behavior trends." },
    { id: 3, text: "IDENTITY", description: "Define a clear brand purpose and personality to build strong emotional connections." },
    { id: 4, text: "FEASIBILITY", description: "Assess technical, financial, and operational viability to ensure sustainable implementation." },
  ];

  const MagneticCircle = ({ circle }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const springX = useSpring(x, { stiffness: 80, damping: 20 });
    const springY = useSpring(y, { stiffness: 80, damping: 20 });

    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distanceX = e.clientX - centerX;
      const distanceY = e.clientY - centerY;

      const magnetStrength = 0.3;
      x.set(distanceX * magnetStrength);
      y.set(distanceY * magnetStrength);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        style={{ x: springX, y: springY }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative hover:z-10 w-80 h-80 rounded-full border border-gray-600 flex items-center justify-center cursor-pointer transition-colors duration-300 hover:border-white hover:bg-white/90"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.25 }}
      >
        {/* Content wrapper (let events pass through) */}
        <div className="pointer-events-none relative z-10 flex h-full w-full flex-col items-center justify-center px-6 text-center">
          {/* CONSTANT label – never hidden */}
          <span className="text-white text-xl md:text-2xl font-bold tracking-wider transition-colors duration-300 group-hover:hidden group-hover:text-black">
            {circle.text}
          </span>

          {/* Description – appears on hover only */}
          <div
            className="
              overflow-hidden
              transition-all duration-300 ease-out
              max-h-0 opacity-0
              group-hover:max-h-40 group-hover:opacity-100
              mt-2
              px-2
            "
          >
            <p className="text-black text-sm md:text-base leading-tight">
              {circle.description}
            </p>
          </div>
        </div>

        {/* Subtle background highlight on hover (also ignore events) */}
        <div className="pointer-events-none absolute inset-0 rounded-full bg-white/0 transition-colors duration-300 group-hover:bg-white/20" />
      </motion.div>
    );
  };

  return (
    <div className="bg-black flex items-center justify-center px-4 mb-10">
      <div className="max-w-8xl mx-auto">
        {/* Mobile: Single column */}
        <div className="grid grid-cols-1 gap-1 md:hidden place-items-center">
          {circles.map((c) => (
            <MagneticCircle key={c.id} circle={c} />
          ))}
        </div>

        {/* Tablet: 2 columns */}
        <div className="hidden md:grid lg:hidden grid-cols-2 gap-1 place-items-center">
          {circles.map((c) => (
            <MagneticCircle key={c.id} circle={c} />
          ))}
        </div>

        {/* Desktop: Overlapping layout */}
        <div className="hidden lg:flex items-center justify-center -space-x-5">
          {circles.map((c) => (
            <MagneticCircle key={c.id} circle={c} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MagneticSection;