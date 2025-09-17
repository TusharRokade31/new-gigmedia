import React from 'react'
import Icon1 from "../../assets/images/icon-1.svg"
import Icon2 from "../../assets/images/icon-2.svg"
import Icon3 from "../../assets/images/icon-3.svg"
import OwnersCard from '../ui/OwnersCard'


const OwnersSection = () => {
  const cardsData = [
    {
      icon: Icon1.src,
      title: "EMPATHY – THE ABILITY TO EMPATHIZE",
      description: "As a leading web design and digital agency, our design and development specialists take all measures."
    },
     {
      icon: Icon3.src,
      title: "INNOVATION – CREATIVE INNOVATION",
      description: "Now more than ever, your digital presence is vital. Wherever your customers can find you, you need to make an impact."
    },
    {
      icon: Icon2.src,
      title: "STRATEGIC MINDSET – STRATEGIC THINKING",
      description: "We're can guide you through the whole process of delivering first class apps from start to finish."
    },
    {
      icon: Icon3.src,
      title: "INNOVATION – CREATIVE INNOVATION",
      description: "Now more than ever, your digital presence is vital. Wherever your customers can find you, you need to make an impact."
    },
    
  ]

  return (
    <section className="bg-black py-16 px-5 flex justify-center md:px-10 lg:px-20 w-full">
        
      <div className="mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {cardsData.map((card, index) => (
            <OwnersCard 
              key={index}
              icon={card.icon}
              title={card.title}
              description={card.description}
              isLastCard={index === 3}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default OwnersSection