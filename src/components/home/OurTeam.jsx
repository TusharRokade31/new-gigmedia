"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import { ChevronLeft, ChevronRight, ExternalLink, MoveLeft, MoveRight } from 'lucide-react'
import person1 from "@/assets/images/person1.webp"
import person2 from "@/assets/images/person2.webp"
import person3 from "@/assets/images/person3.webp"
import person4 from "@/assets/images/person4.webp"
import person5 from "@/assets/images/person5.webp"
import person6 from "@/assets/images/person6.webp"


// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "ISABELLA",
      position: "Marketing Director",
      image: person1,
      socialLinks: {
        fb: "#",
        pin: "#",
        tw: "#",
        tele: "#"
      }
    },
    {
      id: 2,
      name: "WILLIAM",
      position: "Project Manager",
      image: person2,
      socialLinks: {
        fb: "#",
        pin: "#",
        tw: "#",
        tele: "#"
      }
    },
    {
      id: 3,
      name: "ALEXANDER",
      position: "Photographer",
      image: person3,
      socialLinks: {
        fb: "#",
        pin: "#",
        tw: "#",
        tele: "#"
      }
    },
    {
      id: 4,
      name: "SOPHIA",
      position: "Creative Director",
      image: person4,
      socialLinks: {
        fb: "#",
        pin: "#",
        tw: "#",
        tele: "#"
      }
    },
    {
      id: 5,
      name: "MICHAEL",
      position: "Lead Designer",
      image: person5,
      socialLinks: {
        fb: "#",
        pin: "#",
        tw: "#",
        tele: "#"
      }
    },
    {
      id: 6,
      name: "EMMA",
      position: "Content Strategist",
      image: person6,
      socialLinks: {
        fb: "#",
        pin: "#",
        tw: "#",
        tele: "#"
      }
    }
  ]

  return (
    <section className="bg-black text-white py-20 px-4 relative overflow-hidden">
      {/* Background decoration */}
   

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl  font-bold mb-6">
            MEET OUR CREATIVE TEAM
          </h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            Our team is more than a group of professionals; we're the heartbeat of creativity and innovation
          </p>
        </div>

        {/* Team Slider */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.swiper-button-prev-custom',
              nextEl: '.swiper-button-next-custom',
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            className="team-swiper"
          >
            {teamMembers.map((member) => (
              <SwiperSlide key={member.id}>
                <div className="group relative">
                  {/* Card */}
                  <div className=" rounded-lg p-5 bg-black overflow-hidden border border-gray-800 transition-all duration-300 group-hover:border-gray-600">
                    {/* Social Links Sidebar */}
                    <div className="absolute left-2 top-1 h-50 w-12 bg-black  bg-opacity-80 flex flex-col justify-center items-center space-y-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a href={member.socialLinks.fb} className="text-gray-400 hover:text-white text-sm">Fb</a>
                      <a href={member.socialLinks.pin} className="text-gray-400 hover:text-white text-sm">Pin</a>
                      <a href={member.socialLinks.tw} className="text-gray-400 hover:text-white text-sm">Tw</a>
                      <a href={member.socialLinks.tele} className="text-gray-400 hover:text-white text-sm">Tele</a>
                    </div>

                    {/* Image Container */}
                    <div className="relative h-96 overflow-hidden">
                      <img 
                        src={member.image.src} 
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      
                      {/* External Link Icon */}
                      <div className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink className="w-5 h-5 text-black" />
                      </div>
                    </div>

                    {/* Member Info */}
                    <div className="p-2 bg-black flex justify-between items-center">
                      <h3 className="text-xl font-bold ">{member.name}</h3>
                      <p className="text-gray-400">{member.position}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Buttons */}
          <button className="swiper-button-prev-custom absolute -left-24 top-1/2 -translate-y-1/2 z-20 w-20 h-20 bg-black bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm">
            {/* <ChevronLeft className="w-6 h-6 text-black" /> */}
            <MoveLeft className="w-15 h-15 text-white" size={32} strokeWidth={0.75} />
          </button>
          
          <button className="swiper-button-next-custom absolute -right-24 top-1/2 -translate-y-1/2 z-20 w-20 h-20 bg-black bg-opacity-10 hover:bg-opacity-20 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm">
            {/* <ChevronRight className="w-6 h-6 text-black" /> */}
            <MoveRight className="w-15 h-15 text-white" size={32} strokeWidth={0.75} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default OurTeam