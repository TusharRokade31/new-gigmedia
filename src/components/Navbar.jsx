'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import GigLogo from "../assets/images/main-logo.svg"

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
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image 
                  src={GigLogo} 
                  alt='gigmediaapp' 
                  width={80} 
                  height={50} 
                  className='w-16 h-auto sm:w-20 md:w-24 lg:w-28 transition-all duration-300 hover:scale-105'
                  priority
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {menuItems.map((item) => (
                <div key={item.name} className="nav-item relative">
                  <Link 
                    href={item.href}
                    className="text-gray-300 hover:text-white transition-colors duration-300 text-sm xl:text-base font-medium tracking-wide relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-px bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </div>
              ))}
            </div>

            {/* Desktop Language switcher and cart */}
            <div className="hidden lg:flex items-center space-x-4">
              <div className="relative">
                <button className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  EN
                  <svg className="w-3 h-3 ml-1 inline-block" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
              
              <div className="relative">
                <button className="text-gray-300 hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 9M7 13h10M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
                  </svg>
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
                </button>
              </div>
            </div>

            {/* Tablet/Mobile Right Side - Language & Cart & Menu */}
            <div className="flex items-center space-x-3 lg:hidden">
              {/* Language Switcher - Hidden on mobile, visible on tablet */}
              <div className="hidden sm:block">
                <button className="text-gray-300 hover:text-white transition-colors duration-300 text-sm">
                  EN
                  <svg className="w-3 h-3 ml-1 inline-block" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>

              {/* Cart */}
              <div className="relative">
                <button className="text-gray-300 hover:text-white transition-colors duration-300">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 9M7 13h10M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" />
                  </svg>
                  <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs rounded-full w-4 h-4 sm:w-5 sm:h-5 flex items-center justify-center text-xs">0</span>
                </button>
              </div>

              {/* Mobile menu button */}
              <button 
                className="text-white p-1"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
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