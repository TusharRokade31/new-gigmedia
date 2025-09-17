// Banner.jsx
"use client"
import React from 'react'
import Image from 'next/image'
import banner from "../../assets/images/banner-bg.webp"
import element from "../../assets/images/element.png"
import { TextAnimate } from '../ui/text-animate'
import { useLoading } from '../../context/LoadingContext'
import { InteractiveHoverButton } from '../ui/interactive-hover-button'

const Banner = () => {
  const { animationsEnabled } = useLoading();

  return (
    <div className='flex justify-center md:px-10 lg:px-20 w-full'>
      <div 
        className="relative w-full h-[100vh] md:h-[870px] bg-cover bg-center object-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${banner.src || banner})`
        }}
      >
        {/* Header - Desktop Only */}
        <div className="absolute top-30 hidden lg:flex left-0 right-0 justify-between items-center p-6 text-white z-10">
          <div className='flex justify-between items-center'>
            <div className="text-sm pe-5 border-r-1 border-[#ffffff6e]">
              {animationsEnabled ? (
                <>
                  <div className="relative group cursor-pointer overflow-hidden">
                    <TextAnimate className="text-lg mb-2" animation="slideUp" by="word">
                      Based In Los Angeles, California
                    </TextAnimate>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                  </div>
                  <div className="relative group cursor-pointer overflow-hidden">
                    <TextAnimate className="text-lg mb-2" animation="slideUp" by="word">
                      Dreamslab112@gmail.com
                    </TextAnimate>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                  </div>
                </>
              ) : (
                <>
                  <div className="relative group cursor-pointer overflow-hidden">
                    <div className="text-lg">Based In Los Angeles, California</div>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                  </div>
                  <div className="relative group cursor-pointer overflow-hidden">
                    <div className="text-lg">Dreamslab112@gmail.com</div>
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                  </div>
                </>
              )}
            </div>
            <div className="text-sm ms-5">
              {animationsEnabled ? (
                <div className="relative group cursor-pointer overflow-hidden">
                  <TextAnimate className="text-lg mb-2" animation="slideUp" by="word">
                    Call Us — (234) 109-6666
                  </TextAnimate>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                </div>
              ) : (
                <div className="relative group cursor-pointer overflow-hidden">
                  <div className="text-lg">Call Us — (234) 109-6666</div>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white origin-left transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100"></span>
                </div>
              )}
            </div>
          </div>
          <InteractiveHoverButton className="text-black">GET IN TOUCH</InteractiveHoverButton>
        </div>

        {/* Main Content Container */}
        <div className="relative flex flex-col lg:flex-row h-full px-4 md:px-6 lg:px-12">
          
          {/* Mobile/Tablet Layout */}
          <div className="flex flex-col justify-center items-start h-full lg:hidden text-start space-y-8">
            {/* Main Heading */}
            <div className="w-full max-w-lg">
              <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                {animationsEnabled ? (
                  <>
                    <TextAnimate className="text-white block" animation="slideLeft" by="character">
                      PIXELS WITH
                    </TextAnimate>
                    <TextAnimate className="text-white block" animation="slideLeft" by="character">
                      PURPOSE, DESIGNS
                    </TextAnimate>
                    <TextAnimate className="text-white block" animation="slideLeft" by="character">
                      WITH DEPTH.
                    </TextAnimate>
                  </>
                ) : (
                  <>
                    <div className="text-white">PIXELS WITH</div>
                    <div className="text-white">PURPOSE, DESIGNS</div>
                    <div className="text-white">WITH DEPTH.</div>
                  </>
                )}
              </h1>
            </div>

            {/* 3D Element */}
            <div className="flex justify-center">
              <Image 
                src={element} 
                alt="3D Cube Element" 
                width={200}
                height={200}
                className={`object-contain md:w-[250px] md:h-[250px] ${animationsEnabled ? 'animate-[float-oval_6s_linear_infinite]' : ''}`}
                priority
              />
            </div>

            {/* Description Text */}
            <div className="text-white max-w-sm px-4">
              <p className="text-sm md:text-base leading-relaxed">
                {animationsEnabled ? (
                  <>
                    <TextAnimate animation="slideUp" by="word">
                      With every single one of our clients, we bring forth a deep passion for creative problem solving — which is what we deliver.
                    </TextAnimate>
                  </>
                ) : (
                  <span>With every single one of our clients, we bring forth a deep passion for creative problem solving — which is what we deliver.</span>
                )}
              </p>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-end min-h-screen w-full">
            {/* Left Content */}
            <div className="flex-1 absolute bottom-10 z-10">
              <h1 className="text-white text-5xl font-bold leading-[1.2] mb-16 tracking-tight">
                {animationsEnabled ? (
                  <>
                    <TextAnimate className="text-white" animation="slideLeft" by="character">
                      PIXELS WITH
                    </TextAnimate>
                    <TextAnimate className="text-white" animation="slideLeft" by="character">
                      PURPOSE, DESIGNS
                    </TextAnimate>
                    <TextAnimate className="text-white" animation="slideLeft" by="character">
                      WITH DEPTH.
                    </TextAnimate>
                  </>
                ) : (
                  <>
                    <div className="text-white">PIXELS WITH</div>
                    <div className="text-white">PURPOSE, DESIGNS</div>
                    <div className="text-white">WITH DEPTH.</div>
                  </>
                )}
              </h1>
            </div>

            {/* Right Content */}
            <div className="flex-1 relative flex flex-col items-end justify-center">
              {/* 3D Cube Element with Floating Animation */}
              <div className="relative mb-8">
                <Image 
                  src={element} 
                  alt="3D Cube Element" 
                  width={666} 
                  height={666}
                  className={`object-contain ${animationsEnabled ? 'animate-[float-oval_6s_linear_infinite]' : ''}`}
                  priority
                />
              </div>
            </div>
            
            {/* Right Text */}
            <div className="text-white mb-30 text-right max-w-sm">
              <p className="text-md leading-relaxed">
                {animationsEnabled ? (
                  <>
                    <TextAnimate animation="slideUp" by="word">
                      With every single one of our clients,
                    </TextAnimate>
                    <TextAnimate animation="slideUp" by="word">
                      we bring forth a deep passion for
                    </TextAnimate>
                    <TextAnimate animation="slideUp" by="word">
                      creative problem solving — which is
                    </TextAnimate>
                    <TextAnimate animation="slideUp" by="word">
                      what we deliver.
                    </TextAnimate>
                  </>
                ) : (
                  <>
                    <span>With every single one of our clients, </span>
                    <span>we bring forth a deep passion for </span>
                    <span>creative problem solving — which is </span>
                    <span>what we deliver.</span>
                  </>
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner