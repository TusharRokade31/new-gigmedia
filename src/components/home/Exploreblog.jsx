"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { Play, ArrowUpRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Import your blog images
import blog1 from "@/assets/images/blog1.webp"
import blog2 from "@/assets/images/blog2.webp"
import blog3 from "@/assets/images/blog3.webp"
import blog4 from "@/assets/images/blog4.webp"
import blog5 from "@/assets/images/blog5.webp"
import blog6 from "@/assets/images/blog6.webp"
import Image from 'next/image'

const Exploreblog = () => {
  const blogPosts = [
    {
      id: 1,
      image: blog1,
      date: { day: '28', month: 'May', year: '/25' },
      categories: ['BRANDING', 'MARKETING'],
      title: 'DESIGN WITHOUT LIMITS: PUSHING CREATIVE BOUNDARIES',
      description: 'A strong brand identity tells a story — one that your audience can see, feel, and remember. This session explores how to use visuals to...',
      hasVideo: true
    },
    {
      id: 2,
      image: blog2,
      date: { day: '29', month: 'May', year: '/25' },
      categories: ['CONTENT', 'DESIGN'],
      title: 'BUILDING A STRONG BRAND IDENTITY THROUGH VISUAL STORYTELLING',
      description: 'A strong brand identity tells a story — one that your audience can see, feel, and remember. This session explores how to use visuals to...',
      hasVideo: true
    },
    {
      id: 3,
      image: blog3,
      date: { day: '31', month: 'May', year: '/25' },
      categories: ['DESIGN', 'MARKETING'],
      title: 'HOW INVESTING IN GOOD DESIGN LEADS TO LONG-TERM BUSINESS SUCCESS',
      description: 'A strong brand identity tells a story — one that your audience can see, feel, and remember. This session explores how to use visuals to...',
      hasVideo: false
    },
    {
      id: 4,
      image: blog4,
      date: { day: '28', month: 'May', year: '/25' },
      categories: ['BRANDING', 'MARKETING'],
      title: 'DESIGN WITHOUT LIMITS: PUSHING CREATIVE BOUNDARIES',
      description: 'A strong brand identity tells a story — one that your audience can see, feel, and remember. This session explores how to use visuals to...',
      hasVideo: true
    },
    {
      id: 5,
      image: blog5,
      date: { day: '29', month: 'May', year: '/25' },
      categories: ['CONTENT', 'DESIGN'],
      title: 'BUILDING A STRONG BRAND IDENTITY THROUGH VISUAL STORYTELLING',
      description: 'A strong brand identity tells a story — one that your audience can see, feel, and remember. This session explores how to use visuals to...',
      hasVideo: true
    },
    {
      id: 6,
      image: blog6,
      date: { day: '31', month: 'May', year: '/25' },
      categories: ['DESIGN', 'MARKETING'],
      title: 'HOW INVESTING IN GOOD DESIGN LEADS TO LONG-TERM BUSINESS SUCCESS',
      description: 'A strong brand identity tells a story — one that your audience can see, feel, and remember. This session explores how to use visuals to...',
      hasVideo: false
    }
  ]

  return (
    <div className="bg-black text-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 tracking-wider">
            EXPLORE OUR BLOG
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto leading-relaxed">
            Dive into the creative process, explore innovative design solutions, and discover how
            we help brands like yours stand out.
          </p>
        </div>

        {/* Blog Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-white !opacity-50',
              bulletActiveClass: 'swiper-pagination-bullet-active !opacity-100'
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30
              }
            }}
            className="blog-swiper"
          >
            {blogPosts.map((post, index) => (
              <SwiperSlide key={`${post.id}-${index}`}>
                <div className="group cursor-pointer">
                  {/* Image Container */}
                  <div className="relative overflow-hidden rounded-lg mb-6 aspect-[3.5/4]">
                    <Image
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-500"
                    />
                    
                    {/* Date Badge */}
                    <div className="absolute top-4 left-4 bg-black bg-opacity-80 rounded-lg px-3 py-2 text-center z-10">
                      <div className="text-2xl font-bold">{post.date.day}</div>
                      <div className="text-sm text-gray-300">{post.date.month}</div>
                      <div className="text-xs text-gray-400">{post.date.year}</div>
                    </div>

                    {/* Play Button (if video) */}
                    {post.hasVideo && (
                      <div className="absolute inset-0 flex items-center justify-center z-10">
                        <div className="bg-black bg-opacity-60 rounded-full p-4 transition-all duration-300 group-hover:bg-opacity-80 group-hover:scale-110">
                          <Play className="w-8 h-8 text-white fill-white" />
                        </div>
                      </div>
                    )}

                    {/* Hover Overlay - White background sliding from left */}
                    <div className="absolute top-70 inset-0 bg-white  transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out">
                      {/* Content overlay */}
                      <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        {/* Arrow icon */}
                        <div className="absolute top-6 right-6">
                          <div className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                            <ArrowUpRight className="w-5 h-5 text-gray-600" />
                          </div>
                        </div>
                        
                        {/* Description text */}
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-300">
                          <p className="text-gray-600 text-sm leading-relaxed mb-4">
                            {post.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div>
                    {/* Categories */}
                    <div className="flex items-center gap-4 mb-4">
                      {post.categories.map((category, index) => (
                        <React.Fragment key={category}>
                          <span className="text-gray-400 text-sm font-medium tracking-wider">
                            {category}
                          </span>
                          {index < post.categories.length - 1 && (
                            <div className="w-1 h-1 bg-gray-600 rounded-full"></div>
                          )}
                        </React.Fragment>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold leading-tight  transition-colors duration-300 group relative">
                <span 
                  className="relative inline bg-gradient-to-r from-white to-white bg-no-repeat bg-left-bottom transition-all duration-300 group-hover:bg-[length:100%_2px] bg-[length:0%_2px]"
                  style={{
                    backgroundImage: 'linear-gradient(to right, #fffff, #fffff)',
                    backgroundPosition: 'left bottom',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  {post.title}
                </span>
              </h3>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .blog-swiper {
          padding-bottom: 60px !important;
        }
        
        .blog-swiper .swiper-button-next,
        .blog-swiper .swiper-button-prev {
          color: white !important;
          top: 45% !important;
        }
        
        .blog-swiper .swiper-button-next:after,
        .blog-swiper .swiper-button-prev:after {
          font-size: 20px !important;
        }
        
        .blog-swiper .swiper-button-next {
          right: 10px !important;
        }
        
        .blog-swiper .swiper-button-prev {
          left: 10px !important;
        }
        
        .blog-swiper .swiper-pagination {
          bottom: 20px !important;
        }
        
        .blog-swiper .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          margin: 0 4px !important;
        }
        
        @media (max-width: 768px) {
          .blog-swiper .swiper-button-next,
          .blog-swiper .swiper-button-prev {
            display: none !important;
          }
        }
      `}</style>
    </div>
  )
}

export default Exploreblog