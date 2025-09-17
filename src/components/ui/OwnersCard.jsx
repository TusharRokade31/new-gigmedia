import React from 'react'

const OwnersCard = ({ icon, title, description, isLastCard }) => {
  return (
    <div className={`
      relative p-8  border border-gray-800 
      ${isLastCard 
        ? 'bg-gradient-to-br from-orange-600 via-red-600 to-yellow-500' 
        : 'bg-black'
      }
      transition-all duration-300 hover:border-gray-600
      min-h-[400px] flex flex-col
    `}>
      {/* Icon */}
      <div className="mb-20 md:mb-40 lg:mb-60">
        <img 
          src={icon} 
          alt="Icon" 
          className={`w-16 h-16 ${isLastCard ? 'filter hidden brightness-0 invert' : ''}`}
        />
      </div>

      {/* Content */}
      <div className="flex-1 flex flex-col">
        <h3 className={`
          text-lg font-bold mb-6 leading-tight tracking-wide
          ${isLastCard ? 'text-white' : 'text-white'}
        `}>
          {title}
        </h3>
        
        <p className={`
          text-sm leading-relaxed flex-1
          ${isLastCard ? 'text-white/90' : 'text-gray-300'}
        `}>
          {description}
        </p>
      </div>

      {/* Special content for last card */}
      {/* {isLastCard && (
        <div className="absolute top-8 right-8">
          <div className="text-right">
            <p className="text-white/80 text-sm mb-2">• Need Help</p>
            <div className="space-y-1">
              <p className="text-white font-bold text-xl tracking-wider">CONNECT</p>
              <p className="text-white font-bold text-xl tracking-wider">CREATE</p>
              <p className="text-white font-bold text-xl tracking-wider">CAPTIVATE</p>
            </div>
          </div>
        </div>
      )} */}

      {/* Let's Talk button for last card */}
      {isLastCard && (
        <div className="absolute bottom-8 right-8">
          <button className="bg-white text-black px-6 py-3 rounded-full font-semibold text-sm hover:bg-gray-100 transition-colors duration-200 flex items-center space-x-2">
            <span>Let's Talk!</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </div>
  )
}

export default OwnersCard