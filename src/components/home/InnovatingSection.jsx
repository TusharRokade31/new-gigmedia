"use client"
import React, { useRef, useEffect, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const InnovatingSection = () => {
  const sectionRef = useRef(null)
  const leftContentRef = useRef(null)
  const rightContentRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const triggersRef = useRef([]) // Store this component's triggers

  useEffect(() => {
    // Check if device is mobile/tablet
    const checkDevice = () => {
      setIsMobile(window.innerWidth < 1024)
    }

    checkDevice()
    window.addEventListener('resize', checkDevice)

    return () => window.removeEventListener('resize', checkDevice)
  }, [])

  useEffect(() => {
    const section = sectionRef.current
    const leftContent = leftContentRef.current
    const rightContent = rightContentRef.current

    // Clear only this component's existing animations
    triggersRef.current.forEach(trigger => trigger.kill())
    triggersRef.current = []

    // Set initial positions
    gsap.set([leftContent, rightContent], { 
      clearProps: "all"
    })

    // Only apply scroll animations on desktop
    if (!isMobile && leftContent && rightContent) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: 3,
          refreshPriority: -1,
        }
      })

      // Store the trigger for cleanup
      triggersRef.current.push(tl.scrollTrigger)

      // Desktop animations
      tl.fromTo(leftContent, 
        { x: -50 },
        { x: 50, ease: "none" }
      )
      .fromTo(rightContent,
        { x: 200 },
        { x: -50, ease: "none" },
        0
      )
    }

    return () => {
      // Clean up only this component's triggers
      triggersRef.current.forEach(trigger => trigger.kill())
      triggersRef.current = []
    }
  }, [isMobile])

  return (
    <section 
      ref={sectionRef} 
      className="min-h-screen bg-black text-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-20 xl:px-40 overflow-hidden"
    >
      <div className="mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 lg:gap-20 items-start">
          {/* Left Content */}
          <div ref={leftContentRef} className="space-y-6 sm:space-y-8 order-1 lg:order-1">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold uppercase leading-tight">
              INNOVATING DIGITAL EXPERIENCES
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              THAT INSPIRE, ENGAGE, AND
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>
              TRANSFORM YOUR BRAND'S FUTURE.
            </h1>
            <p className="text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed max-w-none lg:max-w-2xl">
              Our digital studio transforms visions into vibrant realities. From captivating 
              designs to cutting-edge multimedia solutions, we craft digital experiences that 
              resonate inspire, and elevate your brand in the modern world.
            </p>
          </div>

          {/* Right Content */}
          <div ref={rightContentRef} className="space-y-0 order-2 lg:order-2 mt-8 sm:mt-12 md:mt-16 lg:mt-72">
            {/* Menu Items */}
            <div className="menu-item group cursor-pointer">
              <div className="flex items-center justify-between py-4 sm:py-6 md:py-8 border-b border-gray-800 group-hover:border-white transition-colors duration-300">
                <span className="text-lg sm:text-xl md:text-2xl font-medium group-hover:text-white transition-colors duration-300">
                  Our Award
                </span>
                <div className="relative overflow-hidden w-6 h-6 sm:w-8 sm:h-8">
                  <svg 
                    className="w-4 h-4 sm:w-6 sm:h-6 transform translate-x-6 sm:translate-x-8 group-hover:translate-x-0 transition-transform duration-300 ease-out"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="menu-item group cursor-pointer">
              <div className="flex items-center justify-between py-4 sm:py-6 md:py-8 border-b border-gray-800 group-hover:border-white transition-colors duration-300">
                <span className="text-lg sm:text-xl md:text-2xl font-medium group-hover:text-white transition-colors duration-300">
                  Successful Work Process
                </span>
                <div className="relative overflow-hidden w-6 h-6 sm:w-8 sm:h-8">
                  <svg 
                    className="w-4 h-4 sm:w-6 sm:h-6 transform translate-x-6 sm:translate-x-8 group-hover:translate-x-0 transition-transform duration-300 ease-out"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="menu-item group cursor-pointer">
              <div className="flex items-center justify-between py-4 sm:py-6 md:py-8 border-b border-gray-800 group-hover:border-white transition-colors duration-300">
                <span className="text-lg sm:text-xl md:text-2xl font-medium group-hover:text-white transition-colors duration-300">
                  Frequently Asked Questions
                </span>
                <div className="relative overflow-hidden w-6 h-6 sm:w-8 sm:h-8">
                  <svg 
                    className="w-4 h-4 sm:w-6 sm:h-6 transform translate-x-6 sm:translate-x-8 group-hover:translate-x-0 transition-transform duration-300 ease-out"
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default InnovatingSection