"use client"
import React from 'react';
import Image from 'next/image';
import { 
  Phone, 
  Mail, 
  ArrowRight, 
  Facebook, 
  Send, 
  ArrowUp, 
  Bell
} from 'lucide-react';
import GigLogo from "@/assets/images/main-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          
          {/* Left Column - Company Info */}
          <div className="space-y-6 relative">
            {/* Vertical Line */}
            <div className="hidden lg:block absolute -right-6 top-0 bottom-0 w-px bg-gray-800"></div>
            
            {/* Logo */}
            <div className="flex items-center">
              <Image 
                src={GigLogo} 
                alt="The Dreamslab Digital Studio Logo" 
                width={100}
                height={60}
                className="h-auto"
                priority
              />
            </div>

            <div className="space-y-4">
              <p className="text-gray-300">How to cooperate?</p>
              
              <div className="space-y-2">
                <h3 className="text-white font-semibold text-lg">BASED IN LOS ANGELES, CALIFORNIA</h3>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Phone size={16} />
                  <span>(234) 109-6666</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-300">
                  <Mail size={16} />
                  <span>DREAMSLAB112@GMAIL.COM</span>
                </div>
              </div>

              {/* Animated Button */}
              <button className="group bg-white text-black px-6 py-3 rounded-full flex items-center space-x-2 hover:bg-gray-100 transition-all duration-300 font-medium relative overflow-hidden">
                <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-1">LET'S WORK TOGETHER</span>
                <ArrowRight size={16} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>

          {/* Middle Column - Quick Links */}
          <div className="space-y-6 relative">
            {/* Vertical Line */}
            <div className="hidden lg:block absolute -right-6 top-0 bottom-0 w-px bg-gray-800"></div>
            
            <h3 className="text-white font-semibold text-lg">QUICK LINKS</h3>
            <ul className="space-y-4 text-gray-300">
              {[
                'An S4 Capital Company',
                'Sustainability',
                'Privacy Notice',
                'Candidates Privacy Policy',
                'Information Security & Compliance',
                'Ethical Marketing Policy',
                'Modern Slavery Statement',
                'Speak Up Policy'
              ].map((item, index) => (
                <li key={index} className="group">
                  <a href="#" className="flex items-center hover:text-white transition-all duration-300 relative">
                    <div className="flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute -left-1">
                      <div className="w-1 h-1 bg-[#e2e2e248] rounded-full"></div>
                      <div className="w-1 h-1 bg-white rounded-full"></div>
                    </div>
                    <span className="transition-transform duration-300 group-hover:translate-x-6">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column - Newsletter */}
          <div className="space-y-15">
            <h3 className="text-white font-semibold text-lg">SUBSCRIBE LATEST NEWS</h3>
            
            <div className="space-y-10">
              <p className="text-gray-300">Don't miss the latest news</p>
              
              <div className='flex items-center space-x-3'>
                <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bell className='w-5 h-5' />
                </div>
                <p className="text-sm">Join our newsletter to stay informed about new tips, tutorials, projects, products, investments!</p>
              </div>

              {/* Social Links with Icons */}
              <div className="flex space-x-10 pt-6">
                <a href="#" className="group relative text-gray-400 hover:text-white transition-colors duration-300">
                  <span className="text-sm font-medium transition-transform duration-300 group-hover:-translate-y-1">FACEBOOK</span>
                  <Facebook className="w-4 h-4 absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1" />
                </a>
                <a href="#" className="group relative text-gray-400 hover:text-white transition-colors duration-300">
                  <span className="text-sm font-medium transition-transform duration-300 group-hover:-translate-y-1">TELEGRAMS</span>
                  <Send className="w-4 h-4 absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1" />
                </a>
                <a href="#" className="group relative text-gray-400 hover:text-white transition-colors duration-300">
                  <span className="text-sm font-medium transition-transform duration-300 group-hover:-translate-y-1">PINTEREST</span>
                  <div className="w-4 h-4 absolute -top-6 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-translate-y-1">
                    <div className="w-2 h-2 bg-current rounded-full mx-auto mb-0.5"></div>
                    <div className="w-4 h-2 bg-current rounded-b-full"></div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              Copyright © 2025 Dreamslab by <span className="text-white">BravisThemes</span>. All Rights Reserved.
            </div>
            
            <div className="flex items-center space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Sitemap</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              
             
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;