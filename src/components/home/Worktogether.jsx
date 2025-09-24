import React from 'react'
import { ArrowRight } from 'lucide-react'
import workBanner from "@/assets/images/endBanner.webp"

const Worktogether = () => {
  return (
    <div className="w-full md:px-20">
      
      {/* Top Section - Content */}
      <div className="bg-gray-100 rounded-t-xl px-6 sm:px-8 md:px-12 lg:px-16 xl:px-20 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-12">
            
            {/* Left Side - Main Content */}
            <div className="flex-1">
              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-black leading-none tracking-tight mb-6 lg:mb-8">
                LET WORK TOGETHER
              </h1>
              
              {/* Description */}
              <div className="max-w-md lg:max-w-lg">
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                  Elevate your{' '}
                  <span className="underline decoration-2 underline-offset-2">
                    brand with innovative ideas—contact our creative
                  </span>{' '}
                  team today to turn your vision into reality.
                </p>
              </div>
            </div>
            
            {/* Right Side - Contact Info & CTA */}
            <div className="lg:w-80 xl:w-96 space-y-6">
              
              {/* Contact Information */}
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  Based In Los Angeles, California
                </p>
                <p className="text-sm text-gray-600">
                  Dreamslabll2@gmail.com
                </p>
                <p className="text-2xl sm:text-3xl font-bold text-black mt-4">
                  (234) 109-6666
                </p>
              </div>
              
              {/* CTA Button */}
              <div className="pt-4">
                <button className="group flex items-center justify-between w-full cursor-pointer bg-transparent border-none p-0">
                  <span className="text-sm font-medium text-black tracking-wide uppercase">
                    LET'S WORK TOGETHER
                  </span>
                  <div className="ml-4 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-5 h-5 text-black" />
                  </div>
                </button>
                <div className="h-px bg-black mt-2 w-full transition-all duration-300"></div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Section - Image */}
      <div className="w-full ">
        <img
          src={workBanner.src}
          alt="Creative workspace  background"
          className="w-full h-full object-contain rounded-b-xl"
        />
      </div>
      
    </div>
  )
}

export default Worktogether