// components/MagneticButton.jsx
import { motion, useMotionValue, useSpring } from 'framer-motion';

const MagneticButton = ({ 
  children, 
  onClick, 
  className = "",
  size = "md", // sm, md, lg
  variant = "circle", // circle, pill
  ariaLabel,
  magnetStrength = 0.15,
  springConfig = { damping: 15, stiffness: 150 }
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);
  
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    const distance = Math.sqrt(
      Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
    );
    
    const maxDistance = 50;
    
    if (distance < maxDistance) {
      x.set((e.clientX - centerX) * magnetStrength);
      y.set((e.clientY - centerY) * magnetStrength);
    }
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  // Size configurations
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12"
  };

  // Variant configurations
  const variantClasses = {
    circle: "rounded-full",
    pill: "rounded-full px-4 py-2 w-auto h-auto"
  };

  const baseClasses = `
bg-transpernt border border-[#ffffff3a] shadow-md cursor-pointer flex items-center justify-center
    transition-shadow duration-300 ease-out
    ${sizeClasses[size]} 
    ${variantClasses[variant]}
    ${className}
  `;

  return (
    <motion.div
      className={baseClasses}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      aria-label={ariaLabel}
      whileHover={{ 
        scale: 1.1, 
        y: -2,
        boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        background:"white"
      }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <motion.div
        style={{
          x: mouseXSpring,
          y: mouseYSpring,
        }}
        className="flex items-center justify-center"
      >
        {children}
      </motion.div>
    </motion.div>
  );
};

export default MagneticButton;