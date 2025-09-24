"use client"
import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import image1 from "@/assets/images/home2.webp"
import image2 from "@/assets/images/home3.webp"
import image3 from "@/assets/images/home4.webp"
import image4 from "@/assets/images/home5.webp"
import Image from 'next/image'

gsap.registerPlugin(ScrollTrigger)

const DreamStudio = () => {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const whiteBoxRef = useRef(null);
  const contentBoxRef = useRef(null);
  const image1Ref = useRef(null);
  const image2Ref = useRef(null);
  const image3Ref = useRef(null);
  const image4Ref = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const whiteBox = whiteBoxRef.current;
    const contentBox = contentBoxRef.current;
    const img1 = image1Ref.current;
    const img2 = image2Ref.current;
    const img3 = image3Ref.current;
    const img4 = image4Ref.current;

    // Check if it's mobile/tablet for different animations
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;

    // Set initial states
    gsap.set(whiteBox, { y: isMobile ? -20 : -10, opacity: 0 });
    gsap.set(contentBox, { x: isMobile ? -50 : -150, opacity: 0 });
    gsap.set(title, { opacity: 0, scale: 0.8 });
    gsap.set([img1, img2, img3, img4], { y: isMobile ? 30 : 50, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    });

    tl.to(title, {
      opacity: 1,
      scale: 1,
      duration: 1,
      ease: "power3.out"
    })
    .to(img1, {
      y: 0,
      opacity: 1,
      duration: 1,
      ease: "power3.out"
    }, "-=0.3")
    .to(whiteBox, {
      y: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5")
    .to(contentBox, {
      x: 0,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out"
    }, "-=0.5")
    .to([img2, img3, img4], {
      y: 0,
      opacity: 1,
      duration: 1,
      stagger: isMobile ? 0.1 : 0.2,
      ease: "power3.out"
    }, "-=0.6");

    // Parallax effects - reduced for mobile
    const parallaxMultiplier = isMobile ? 0.3 : isTablet ? 0.6 : 1;

    gsap.to(img1, {
      y: -150 * parallaxMultiplier,
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    gsap.to(img2, {
      y: -100 * parallaxMultiplier,
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    gsap.to(img3, {
      y: -120 * parallaxMultiplier,
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    gsap.to(img4, {
      y: -120 * parallaxMultiplier,
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    // Reduced movement for mobile devices
    gsap.to(whiteBox, {
      y: isMobile ? 50 : 170,
      scrollTrigger: {
        trigger: container,
        start: "top center",
        end: "bottom top",
        scrub: 2,
        ease: "power2.out"
      }
    });

    gsap.to(contentBox, {
      x: isMobile ? 20 : 200,
      scrollTrigger: {
        trigger: container,
        start: "top center",
        end: "bottom top",
        scrub: 2,
        ease: "power2.out"
      }
    });

    gsap.to(title, {
      y: isMobile ? -20 : -50,
      scrollTrigger: {
        trigger: container,
        start: "top bottom",
        end: "bottom top",
        scrub: 1
      }
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="nc-DreamStudio bg-black relative overflow-hidden px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-20"
    >
      {/* Mobile/Tablet Layout */}
      <div className="block lg:hidden">
        {/* Mobile Title */}
        <div
          ref={titleRef}
          className="text-center mb-8 sm:mb-12"
        >
          <h1 className="text-white uppercase font-bold text-3xl sm:text-4xl md:text-5xl leading-tight">
            Gigmedia
          </h1>
        </div>

        {/* New Layout Structure */}
        <div className="space-y-8 sm:space-y-12">
          {/* First Image - Full Width */}
          <div ref={image1Ref} className="w-full">
            <div className="h-64 sm:h-80 md:h-96 rounded-2xl overflow-hidden">
              <Image
                src={image1}
                alt="Portrait 1"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Experience Box - Centered */}
          <div className="flex justify-center">
            <div
              ref={whiteBoxRef}
              className="bg-white w-full h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl text-center flex flex-col justify-center"
            >
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black mb-2 sm:mb-4">
                25
              </div>
              <div className="text-xs sm:text-sm md:text-base text-gray-700 font-medium tracking-wide">
                <div>YEARS OF EXPERIENCE IN</div>
                <div>THE DIGITAL FIELD</div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div ref={contentBoxRef} className="space-y-4 sm:space-y-6 px-2">
            <h2 className="text-white uppercase font-bold text-lg sm:text-xl md:text-2xl leading-tight">
              Delivering Strategic Design to Enhance Brand Awareness and Drive Business Growth.
            </h2>

            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              At DreamsLab, we don't just connect the dots; we paint the whole picture. Branding, content, PR events — every piece flows together, building something bigger, bolder, and impossible to ignore.
            </p>

            <div>
              <button className="group relative inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-3 bg-transparent border border-white text-white font-medium text-sm sm:text-base rounded-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                <span className="mr-2">MORE ABOUT US</span>
                <svg
                  className="w-3 h-3 sm:w-4 sm:h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Remaining Images Grid */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6">
            <div ref={image2Ref} className="h-40 sm:h-56 md:h-64">
              <Image
                src={image2}
                alt="Portrait 2"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
            <div ref={image3Ref} className="h-48 sm:h-64 md:h-72 mt-4">
              <Image
                src={image3}
                alt="Silhouette"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
            <div ref={image4Ref} className="h-44 sm:h-60 md:h-68 -mt-2 col-span-2">
              <Image
                src={image4}
                alt="Abstract"
                className="w-full h-full object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Unchanged */}
      <div className="hidden lg:grid lg:grid-cols-2">
        {/* Left side */}
        <div className="grid grid-cols-2 gap-8 mt-32">
          {/* Image 1 */}
          <div
            ref={image1Ref}
            className="col-span-1 h-[500px] xl:h-[600px]"
          >
            <Image
              src={image1}
              alt="Portrait 1"
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* White Experience Box */}
          <div
            ref={whiteBoxRef}
            className="bg-white w-80 h-80 col-span-1 rounded-2xl p-10 shadow-2xl text-center flex flex-col justify-center"
          >
            <div className="text-7xl font-bold text-black mb-4">
              25
            </div>
            <div className="text-base text-gray-700 font-medium tracking-wide">
              <div>YEARS OF</div>
              <div>EXPERIENCE IN THE</div>
              <div>DIGITAL FIELD</div>
            </div>
          </div>

          {/* Content */}
          <div ref={contentBoxRef} className="col-span-2 mt-20 space-y-8">
            <h2 className="text-white uppercase font-bold text-4xl xl:text-4xl leading-tight">
              Delivering Strategic Design to Enhance Brand Awareness and Drive Business Growth.
            </h2>

            <p className="text-gray-300 text-lg leading-relaxed">
              At DreamsLab, we don't just connect the dots; we paint the whole picture. Branding, content, PR events — every piece flows together, building something bigger, bolder, and impossible to ignore. Whether we're shaping your identity or making headlines, we create moments that matter.
            </p>

            <div>
              <button className="group relative inline-flex items-center justify-center px-6 py-3 bg-transparent border border-white text-white font-medium rounded-lg hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
                <span className="mr-2">MORE ABOUT US</span>
                <svg
                  className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Right side */}
        <div className="grid grid-cols-1 gap-8">
          {/* Main Title */}
          <div
            ref={titleRef}
            className="text-center z-30 flex items-center justify-start"
          >
            <h1 className="text-white uppercase font-bold text-8xl xl:text-9xl">
              Gigmedia
            </h1>
          </div>

          <div className='grid gap-4 grid-cols-3'>
            {/* Image 2 */}
            <div
              ref={image2Ref}
              className="col-span-1 h-[400px] xl:h-[500px]"
            >
              <Image
                src={image2}
                alt="Portrait 2"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Image 3 */}
            <div
              ref={image3Ref}
              className="col-span-1 h-[450px] xl:h-[550px]"
            >
              <Image
                src={image3}
                alt="Silhouette"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>

            {/* Image 4 */}
            <div
              ref={image4Ref}
              className="col-span-1 h-[380px] xl:h-[480px]"
            >
              <Image
                src={image4}
                alt="Abstract"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 pointer-events-none z-10"></div>
    </div>
  );
};

export default DreamStudio;