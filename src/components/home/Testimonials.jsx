"use client"
import React from 'react';
// Import Swiper styles FIRST
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import {MoveLeft, MoveRight } from 'lucide-react'

// Then import Swiper components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      text: "Collaborating with Dreamslab was refreshing. They transformed our concept into an elegant design that truly conveyed our brand's story. Their timely feedback and creative approach have boosted our engagement significantly.",
      author: "JOHN FITZGERALD",
      position: "Designer Manager, HBO",
      avatar: "/api/placeholder/60/60" // Replace with actual image path
    },
    {
      id: 2,
      text: "Working with Dreamslab exceeded our expectations. Their innovative solutions and attention to detail helped us achieve remarkable results that drove our business forward.",
      author: "SARAH JOHNSON",
      position: "Creative Director, Netflix",
      avatar: "/api/placeholder/60/60" // Replace with actual image path
    },
    {
      id: 3,
      text: "The team at Dreamslab delivered exceptional work that perfectly aligned with our vision. Their professional approach and creative expertise made the entire process seamless.",
      author: "MICHAEL CHEN",
      position: "Brand Manager, Disney",
      avatar: "/api/placeholder/60/60" // Replace with actual image path
    }
  ];

  return (
    <section className="bg-black text-white min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 xl:px-20 py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24">
      <div className="w-full  p-4 sm:p-6 md:p-8 lg:p-12 xl:p-20 border border-[#ffffff36] rounded-lg">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
          <div className="mb-4 sm:mb-6 lg:mb-0">
            <p className="text-gray-400 text-xs sm:text-sm md:text-base tracking-wider">
              // TRUSTED BY CLIENT WORLDWIDE
            </p>
          </div>
          <div className="text-left lg:text-right">
            <p className="text-gray-400 text-xs sm:text-sm md:text-base tracking-wider">
              CRAFTING VISIONS, EARNING TRUST
            </p>
          </div>
        </div>

        {/* Main Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold leading-tight mb-8 sm:mb-10 md:mb-12 lg:mb-14 xl:mb-16">
          TESTIMONIALS
        </h2>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12 items-start lg:items-center">
          {/* Left Side - Title and Stats */}
          <div className="lg:col-span-1">
            <div className="space-y-4 sm:space-y-6">
              <div>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold mb-2 sm:mb-3 md:mb-4">
                  4.9/5.0
                </div>
                <p className="text-gray-400 text-base sm:text-lg md:text-xl leading-relaxed">
                  We've delivered{' '}
                  <span className="underline text-white">150+ projects</span>{' '}
                  that help companies generate real results.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Testimonial Carousel */}
          <div className="relative lg:col-span-2 lg:ml-8 xl:ml-12 2xl:ml-20 overflow-hidden">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              navigation={{
                nextEl: '.swiper-button-next-custom',
                prevEl: '.swiper-button-prev-custom',
              }}
              pagination={{
                clickable: true,
                bulletClass: 'swiper-pagination-bullet-custom',
                bulletActiveClass: 'swiper-pagination-bullet-active-custom',
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              className="testimonial-swiper"
            >
              {testimonials.map((testimonial) => (
                <SwiperSlide key={testimonial.id}>
                  <div className="space-y-6 sm:space-y-8">
                    {/* Quote */}
                    <div className="relative">
                      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-600 absolute -top-2 sm:-top-3 md:-top-4 -left-2 sm:-left-3 md:-left-4 leading-none">
                        "
                      </div>
                      <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl leading-relaxed pl-4 sm:pl-6 md:pl-8 text-gray-200 pr-2">
                        {testimonial.text}
                      </p>
                    </div>

                    {/* Author */}
                    <div className="flex items-center space-x-3 sm:space-x-4 pl-4 sm:pl-6 md:pl-8">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full overflow-hidden bg-gray-700 flex-shrink-0">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.author}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="font-bold text-base sm:text-lg md:text-xl text-white truncate">
                          {testimonial.author}
                        </h4>
                        <p className="text-gray-400 text-sm sm:text-base truncate">
                          {testimonial.position}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <div className="flex items-center justify-center sm:justify-end space-x-3 sm:space-x-4 mt-6 sm:mt-8">
              <button className="swiper-button-prev-custom flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 hover:bg-white/10 rounded-full transition-colors duration-200 group">
                <MoveLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={0.75} />
              </button>
              <button className="swiper-button-next-custom flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 hover:bg-white/10 rounded-full transition-colors duration-200 group">
                <MoveRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" strokeWidth={0.75} />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .testimonial-swiper {
          overflow: visible;
        }
        
        .swiper-pagination-bullet-custom {
          width: 6px;
          height: 6px;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
          opacity: 1;
          margin: 0 3px;
          transition: all 0.3s ease;
        }
        
        @media (min-width: 640px) {
          .swiper-pagination-bullet-custom {
            width: 8px;
            height: 8px;
            margin: 0 4px;
          }
        }
        
        .swiper-pagination-bullet-active-custom {
          background: white;
          transform: scale(1.2);
        }
        
        .swiper-pagination {
          position: relative;
          margin-top: 1.5rem;
          text-align: center;
        }
        
        @media (min-width: 640px) {
          .swiper-pagination {
            margin-top: 2rem;
          }
        }
        
        .testimonial-swiper .swiper-slide {
          height: auto;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;