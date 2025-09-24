"use client"
import React, { useRef, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import ourService from "@/assets/images/ourservice.webp";
import ourService2 from "@/assets/images/ourservice2.webp";
import ourService3 from "@/assets/images/ourservice3.webp";
import ourService4 from "@/assets/images/ourservice4.webp";

const OurServices = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const currentImageRef = useRef(null);
  const mouseMoveHandlerRef = useRef(null);

  const services = [
    {
      id: '01',
      title: 'COPYWRITING',
      subtitle: 'BRAND NAMING / CONTENT MANAGEMENT / DIGITAL STRATEGY / TONE OF VOICE',
      image: ourService.src
    },
    {
      id: '02',
      title: 'BRANDING',
      subtitle: 'BRAND AUDITS / BRAND NAMING / BRAND STRATEGY / TONE OF VOICE',
      image: ourService2.src
    },
    {
      id: '03',
      title: 'GRAPHIC DESIGN',
      subtitle: 'ART DIRECTION / BROCHURE DESIGN / CATALOGUE DESIGN / LOGO DESIGN',
      image: ourService3.src
    },
    {
      id: '04',
      title: 'Digital Marketing',
      subtitle: 'ART DIRECTION / BROCHURE DESIGN / CATALOGUE DESIGN / LOGO DESIGN',
      image: ourService4.src
    }
  ];

useEffect(() => {
  const container = containerRef.current;
  const image = imageRef.current;

  if (!container || !image) return;

  // Initially hide the image
  gsap.set(image, { 
    opacity: 0,
    scale: 0.8,
    xPercent: -50,
    yPercent: -50
  });

  const handleMouseMove = (e) => {
    const rect = container.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    gsap.to(image, {
      x: x,
      y: y,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  // Hide image on scroll
  const handleScroll = () => {
    gsap.to(image, {
      opacity: 0,
      scale: 0.8,
      duration: 0.2,
      ease: "power2.out"
    });
  };

  // Store the handler references
  mouseMoveHandlerRef.current = handleMouseMove;
  container.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('scroll', handleScroll, { passive: true });

  return () => {
    if (container && mouseMoveHandlerRef.current) {
      container.removeEventListener('mousemove', mouseMoveHandlerRef.current);
    }
    window.removeEventListener('scroll', handleScroll);
    
    if (image) {
      gsap.killTweensOf(image);
    }
  };
}, []);

  const handleMouseEnter = (serviceImage) => {
    const image = imageRef.current;
    if (!image || !currentImageRef.current) return;

    currentImageRef.current.src = serviceImage;
    
    gsap.to(image, {
      opacity: 1,
      scale: 1,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  const handleMouseLeave = () => {
    const image = imageRef.current;
    if (!image) return;

    gsap.to(image, {
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.out"
    });
  };

  return (
    <div ref={containerRef} className='px-4 sm:px-8 lg:px-20 mt-20 lg:mt-40'>
      <div className="min-h-screen bg-[#F1EFEB] rounded-2xl px-4 sm:px-8 lg:px-20 py-8 sm:py-12 lg:py-16 relative overflow-hidden">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-12 lg:mb-20 space-y-6 lg:space-y-0">
          <div>
            <p className="text-xs sm:text-sm tracking-wider text-gray-600 mb-4">
              // WHAT WE DO
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black tracking-tight leading-none">
              OUR SERVICES
            </h1>
          </div>
          <div className="text-left lg:text-right">
            <p className="text-xs sm:text-sm tracking-wider text-gray-600 max-w-xs">
              TRANSFORMING IDEAS INTO DIGITAL MASTERPIECES
            </p>
          </div>
        </div>

        {/* Services List */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="border-t border-gray-300 py-4 sm:py-6 lg:py-8 group cursor-pointer transition-all duration-300"
              onMouseEnter={() => handleMouseEnter(service.image)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between space-y-4 lg:space-y-0">
                <div className="flex items-start space-x-4 sm:space-x-6 lg:space-x-8 flex-1">
                  <div className="flex-1">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl uppercase font-bold text-black mb-2 lg:mb-3 group-hover:text-gray-700 transition-colors duration-300">
                      {service.id}. {service.title}
                    </h2>
                    <p className="text-xs sm:text-sm tracking-wider text-gray-600 max-w-full lg:max-w-2xl">
                      {service.subtitle}
                    </p>
                  </div>
                </div>
                
                <button className="flex items-center space-x-2 sm:space-x-3 border border-gray-400 rounded-full px-4 sm:px-6 py-2 sm:py-3 group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-300 self-start lg:self-auto">
                  <span className="text-xs sm:text-sm font-medium tracking-wider">
                    SEE WORK
                  </span>
                  <ArrowRight 
                    size={14} 
                    className="sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform duration-300"
                  />
                </button>
              </div>
            </div>
          ))}
          
          {/* Bottom border */}
          <div className="border-t border-gray-300"></div>
        </div>

        {/* Floating Image - Hidden on mobile/tablet */}
        <div 
          ref={imageRef}
          className="fixed pointer-events-none z-50 hidden lg:block"
          style={{ top: 0, left: 0 }}
        >
          <img
            ref={currentImageRef}
            src={ourService.src}
            alt="Service preview"
            className="w-48 h-64 lg:w-56 lg:h-72 xl:w-64 xl:h-80 object-cover rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default OurServices;