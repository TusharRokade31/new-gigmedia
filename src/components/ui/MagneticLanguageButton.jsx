// components/MagneticLanguageButton.jsx
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const MagneticLanguageButton = ({ 
  language = "EN", 
  onClick,
  className = "",
  magnetStrength = 0.12,
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

  return (
    <motion.div
      className={`bg-transpernt border border-[#ffffff3a] rounded-full px-8 py-3 shadow-md cursor-pointer transition-shadow duration-300 ease-out ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
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
        className="flex items-center  justify-center"
      >
        <button className="text-gray-600 hover:text-gray-800  transition-colors duration-300 text-sm flex items-center">
          {language}
          <ChevronDown className="w-3 h-3 ml-1" />
        </button>
      </motion.div>
    </motion.div>
  );
};

export default MagneticLanguageButton;