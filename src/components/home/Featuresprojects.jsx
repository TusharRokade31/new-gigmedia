import React from 'react'
import { MoveUpRight } from 'lucide-react'
import project1 from "@/assets/images/project1.webp"
import project2 from "@/assets/images/project2.webp"
import project3 from "@/assets/images/project3.webp"
import project4 from "@/assets/images/project4.webp"
import project5 from "@/assets/images/project5.webp"
import project6 from "@/assets/images/project6.webp"
import Image from 'next/image'

const Featuresprojects = () => {
  const projects = [
    {
      id: 1,
      image: project1,
      category: "CREATIVE . DIGITAL MARKETING",
      title: "ELEVATING VISUAL NARRATIVES",
      duration: ""
    },
    {
      id: 2,
      image: project2,
      category: "BRANDING . GRAPHIC DESIGN",
      title: "TELLING STORIES THAT MATTER",
      duration: ""
    },
  ]

  const projects2 = [
   
    {
      id: 3,
      image: project3,
      category: "BRANDING . CREATIVE",
      title: "FROM CONCEPT TO IMPACT",
      duration: ""
    },
    {
      id: 4,
      image: project4,
      category: "DIGITAL MARKETING . WEBSITE DESIGN",
      title: "THE ART OF DIGITAL STORYTELLING",
      duration: ""
    }
  ]

const projects3 = [
   
    {
      id: 3,
      image: project3,
      category: "BRANDING . CREATIVE",
      title: "FROM CONCEPT TO IMPACT",
      duration: ""
    },
    {
      id: 4,
      image: project4,
      category: "DIGITAL MARKETING . WEBSITE DESIGN",
      title: "THE ART OF DIGITAL STORYTELLING",
      duration: ""
    }
  ]

  return (
    <div className="w-full bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl uppercase font-bold mb-6">
          features projects
        </h2>
         
        </div>
      <div className="px-10 mx-auto">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-y-20">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 "
                />
                
                {/* Dark Gradient Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" /> */}
                
                {/* Arrow Icon - Top Right */}
                <div className="absolute bottom-4 right-4 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-bottom-right">
                  <div className="bg-white rounded-full p-8 shadow-lg">
                    <MoveUpRight size={40} strokeWidth={1.5} className="text-black" />
                  </div>
                </div>
                <div className="absolute -bottom-0 w-md bg-black rounded-tr-lg left-0 right-0 p-2">
                <div className="space-y-3">
                  {/* Category */}
                  <div className="flex items-center text-xs sm:text-sm text-gray-300 uppercase tracking-wider font-medium">
                    <span>{project.category}</span>
                  </div>
                </div>
              </div>
              </div>
              

              {/* Project Info - Outside the image */}
              <div className="mt-4 p-2">
                <div className="space-y-3">
                 
                  
                  {/* Title */}
                  <h3 className="text-xl  font-bold leading-tight text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
            
          ))}
        </div>

        <div className="grid grid-cols-1 px-0  lg:px-40 my-5 md:my-10 md:grid-cols-2 gap-4 lg:gap-y-20">
          {projects3.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 "
                />
                
                {/* Dark Gradient Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" /> */}
                
                {/* Arrow Icon - Top Right */}
                <div className="absolute bottom-4 right-4 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-bottom-right">
                  <div className="bg-white rounded-full p-8 shadow-lg">
                    <MoveUpRight size={40} strokeWidth={1.5} className="text-black" />
                  </div>
                </div>
                <div className="absolute -bottom-0 w-md bg-black rounded-tr-lg left-0 right-0 p-2">
                <div className="space-y-3">
                  {/* Category */}
                  <div className="flex items-center text-xs sm:text-sm text-gray-300 uppercase tracking-wider font-medium">
                    <span>{project.category}</span>
                  </div>
                </div>
              </div>
              </div>
              

              {/* Project Info - Outside the image */}
              <div className="mt-4 p-2">
                <div className="space-y-3">
                 
                  
                  {/* Title */}
                  <h3 className="text-xl  font-bold leading-tight text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
            
          ))}
        </div>

         <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-y-20">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer transition-all duration-500"
            >
              {/* Project Image */}
              <div className="relative aspect-[4/3] sm:aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 "
                />
                
                {/* Dark Gradient Overlay */}
                {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" /> */}
                
                {/* Arrow Icon - Top Right */}
                <div className="absolute bottom-4 right-4 transform scale-0 group-hover:scale-100 transition-transform duration-500 ease-out origin-bottom-right">
                  <div className="bg-white rounded-full p-8 shadow-lg">
                    <MoveUpRight size={40} strokeWidth={1.5} className="text-black" />
                  </div>
                </div>
                <div className="absolute -bottom-0 w-md bg-black rounded-tr-lg left-0 right-0 p-2">
                <div className="space-y-3">
                  {/* Category */}
                  <div className="flex items-center text-xs sm:text-sm text-gray-300 uppercase tracking-wider font-medium">
                    <span>{project.category}</span>
                  </div>
                </div>
              </div>
              </div>
              

              {/* Project Info - Outside the image */}
              <div className="mt-4 p-2">
                <div className="space-y-3">
                 
                  
                  {/* Title */}
                  <h3 className="text-xl  font-bold leading-tight text-white">
                    {project.title}
                  </h3>
                </div>
              </div>
            </div>
            
          ))}
        </div>
      </div>
    </div>
  )
}

export default Featuresprojects