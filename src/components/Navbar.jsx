'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import GigLogo from "../assets/images/main-logo.svg"
 import { ChevronDown, ShoppingCart, Search, Menu, X } from 'lucide-react';
import MagneticLanguageButton from './ui/MagneticLanguageButton'
import MagneticButton from './ui/MagneticButton'


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const router = useRouter()

  const menuItems = [
    { name: 'HOME', href: '/' },
    { name: 'ABOUT STUDIO', href: '/about' },
    { name: 'PAGES', href: '/pages' },
    { name: 'PORTFOLIO', href: '/portfolio' },
    { name: 'BLOG', href: '/blog' },
    { name: 'CONTACT US', href: '/contact' }
  ]

  return (
    <>
      <header className="fixed top-0 left-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-gray-800">
        <nav className="w-full px-4 sm:px-6 md:px-8 lg:px-20 py-2">
          <div className="flex items-center justify-between h-14 sm:h-16 md:h-20 lg:h-28">
            
            {/* Logo - Always visible */}
            <div className="flex-shrink-0 flex items-center justify-center" >
              <Link href="/" className="flex items-center">
                <Image 
                  src={GigLogo} 
                  alt='gigmediaapp' 
                  width={80} 
                  height={50} 
                  className='w-16  sm:w-20 md:w-24 lg:w-24 transition-all duration-300 hover:scale-105'
                  priority
                />
              </Link>
               {/* Desktop Navigation */}
            <div className="hidden lg:flex ms-10 items-center space-x-6 xl:space-x-8">
              {menuItems.map((item) => (
                <div key={item.name} className="nav-item relative">
                  <Link 
                    href={item.href}
                    className="text-[#ffffff48] hover:text-white transition-colors duration-300 text-sm xl:text-base font-medium tracking-wide relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </div>
              ))}
            </div>
            </div>

           

            {/* Desktop Language switcher and cart */}
           

 <div className="hidden lg:flex items-center space-x-4">
      {/* Search Icon */}
      <MagneticButton size="lg" ariaLabel="Search">
        <Search className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
      </MagneticButton>

      {/* Language Switcher */}
      <MagneticLanguageButton className="" language="EN" />
      
      {/* Cart */}
      <div className="relative">
        <MagneticButton size="lg" ariaLabel="Shopping Cart">
          <ShoppingCart className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
        </MagneticButton>
       
      </div>
    </div>

            {/* Tablet/Mobile Right Side - Language & Cart & Menu */}
         

 <div className="flex items-center space-x-3 lg:hidden">
      {/* Search Icon */}
      <MagneticButton size="md" ariaLabel="Search">
        <Search className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
      </MagneticButton>

      {/* Language Switcher - Hidden on mobile, visible on tablet */}
      <div className="hidden sm:block">
        <MagneticLanguageButton language="EN" />
      </div>

      {/* Cart */}
      <div className="relative">
        <MagneticButton size="md" ariaLabel="Shopping Cart">
          <ShoppingCart className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
        </MagneticButton>
        
      </div>

      {/* Mobile menu button */}
      <MagneticButton 
        size="md"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        ariaLabel="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
        ) : (
          <Menu className="w-5 h-5 text-gray-600 group-hover:text-gray-800 transition-colors duration-300" />
        )}
      </MagneticButton>
    </div>
          </div>

          {/* Mobile/Tablet Navigation Menu */}
          <div className={`lg:hidden transition-all duration-300 overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}>
            <div className="py-4 space-y-3 border-t border-gray-800">
              {menuItems.map((item) => (
                <Link 
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-white hover:bg-gray-900 transition-all duration-300 text-sm font-medium py-2 px-2 rounded"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Language Switcher */}
              <div className="sm:hidden pt-2 border-t border-gray-800">
                <button className="text-gray-300 hover:text-white transition-colors duration-300 text-sm py-2 px-2">
                  Language: EN
                  <svg className="w-3 h-3 ml-1 inline-block" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

export default Header