"use client"
import React, { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, MoveUpRight, Play } from 'lucide-react'

import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import bgBanner from "@/assets/images/TalkToUs.webp"

gsap.registerPlugin(ScrollTrigger)

const TalkToUs = () => {
  const containerRef = useRef(null)
  const bgRef = useRef(null)
  const [currentText, setCurrentText] = useState(0)
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(true)
  
  const texts = [
    "Build Solutions",
    "Create Innovation",
    "Design Future",
    "Transform Ideas"
  ]

  // Typing animation effect
  useEffect(() => {
    const currentString = texts[currentText]
    let currentIndex = 0
    let isDeleting = false
    
    const typeInterval = setInterval(() => {
      if (!isDeleting && currentIndex <= currentString.length) {
        setDisplayText(currentString.slice(0, currentIndex))
        currentIndex++
      } else if (!isDeleting && currentIndex > currentString.length) {
        setTimeout(() => {
          isDeleting = true
        }, 2000) // Pause before deleting
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(currentString.slice(0, currentIndex - 1))
        currentIndex--
      } else if (isDeleting && currentIndex === 0) {
        setCurrentText((prev) => (prev + 1) % texts.length)
        isDeleting = false
        currentIndex = 0
      }
    }, isDeleting ? 50 : 100)

    return () => clearInterval(typeInterval)
  }, [currentText])

  // GSAP animations and parallax effect
  useEffect(() => {
    const container = containerRef.current
    const bg = bgRef.current

    // Parallax effect for background
    gsap.to(bg, {
      yPercent: -50,
      ease: "none",
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: true
      }
    })

    // Fade in animation for content
    gsap.fromTo(".content-animate", 
      {
        y: 100,
        opacity: 0
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: container,
          start: "top 80%",
          end: "top 50%",
        }
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-[854px] md:h-[700px] sm:h-[600px] xs:h-[500px] overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div 
        ref={bgRef}
        className="absolute inset-0 w-full h-[120%] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${bgBanner.src})`
        }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30 md:bg-black/25 sm:bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between h-full px-4 sm:px-6 lg:px-8 py-8 lg:py-0">
        
        {/* Main Content */}
        <div className="max-w-2xl w-full lg:w-auto">
          {/* Main Content Card */}
          <div className="content-animate bg-white/95 backdrop-blur-lg rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl border border-white/20">
            
            {/* Status Badge */}
            <div className="content-animate mb-6 lg:mb-8 flex justify-start">
              <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 sm:py-2 bg-white/10 backdrop-blur-sm rounded-full border border-[#0000002d]">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-black text-xs sm:text-sm">
                  Available For Work 24/7
                </span>
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-gray-900 leading-tight mb-4 lg:mb-6">
              Let's Talk Us To
            </h1>

            {/* Animated Text Container */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-6 lg:mb-8">
              <div className="bg-gray-200 rounded-xl px-3 py-3 sm:px-4 sm:py-4 w-full sm:min-w-[280px] md:min-w-[380px] lg:min-w-[520px]">
                <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800 break-words">
                  {displayText}
                  <span className={`ml-1 ${isTyping ? 'animate-pulse' : ''}`}>|</span>
                </span>
              </div>


              {/* Arrow Icon with Hover Animation */}
              <div className="group cursor-pointer sm:ms-3 lg:ms-5 self-center sm:self-auto">
                <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 bg-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
                  <MoveUpRight className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-10 lg:h-10 text-white transition-transform duration-300 group-hover:rotate-45" />
                </div>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-gray-600 text-base sm:text-lg font-medium">
              We are Transparent Like that. No Gimmicks.
            </p>
          </div>
        </div>

        {/* Play Button - Repositioned for mobile */}
        <div className="group hidden lg:flex cursor-pointer mt-8 lg:mt-0 lg:me-12 self-center">
          <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 bg-transparent border border-[#ffffff56] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110">
            <Play className="w-4 h-4 sm:w-5 sm:h-5 text-white transition-transform duration-300" />
          </div>
        </div>
      </div>

      {/* Decorative Elements - Hidden on mobile for better performance */}
      <div className="hidden md:block absolute top-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-3xl" />
      <div className="hidden md:block absolute bottom-10 left-10 w-48 h-48 bg-orange-500/10 rounded-full blur-3xl" />
    </div>
  )
}

export default TalkToUs