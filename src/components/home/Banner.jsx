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
      className="relative w-full h-[850px] bg-cover bg-center object-cover bg-no-repeat"
      style={{
        backgroundImage: `url(${banner.src || banner})`
      }}
    >
      {/* Header */}
      <div className="absolute top-30 hidden left-0 right-0 md:flex justify-between items-center p-6 text-white z-10">
        <div className='flex justify-between items-center'>
            <div className="text-sm pe-5 border-r-2">
               {animationsEnabled ? (
                 <>
                   <TextAnimate animation="slideUp" by="word">
                     Based In Los Angeles, California
                   </TextAnimate>
                   <TextAnimate animation="slideUp" by="word">
                     Dreamslab112@gmail.com
                   </TextAnimate>
                 </>
               ) : (
                 <>
                   <div>Based In Los Angeles, California</div>
                   <div>Dreamslab112@gmail.com</div>
                 </>
               )}
        </div>
        <div className="text-sm ms-5">
          {animationsEnabled ? (
            <TextAnimate animation="slideUp" by="word">
              Call Us — (234) 109-6666
            </TextAnimate>
          ) : (
            <div>Call Us — (234) 109-6666</div>
          )}
        </div>
        </div>
        <InteractiveHoverButton className="text-black">GET IN TOUCH</InteractiveHoverButton>
      </div>

      {/* Main Content Container */}
      <div className="flex  relative items-end min-h-screen px-3 lg:px-12">
        {/* Left Content */}
        <div className="flex-1 absolute bottom-10 z-10">
          <h1 className="text-white text-5xl md:text-5xl font-bold leading-[1.2] mb-16 tracking-tight">
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
  )
}

export default Banner