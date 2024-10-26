'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { Button } from './ui/button'
import { Cpu } from 'lucide-react'
import { Menu, X } from 'lucide-react'

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
          const show = window.scrollY > 50;
          if (show) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        document.addEventListener("scroll", handleScroll);
        return () => {
          document.removeEventListener("scroll", handleScroll);
        };
      }, []);

    return (
        <header className={`py-6 px-4 md:px-6 lg:px-8 bg-black top-0 sticky z-50 ${
            isScrolled ? "bg-opacity-60 backdrop-blur-md shadow-sm transition-all ease-in-out" : ""
        }`}>
            <div className="container mx-auto flex justify-between items-center">
                <Link className="text-2xl font-bold flex text-red-400" href="/">
                    <Cpu className="h-8 w-8 text-electric-blue" />
                    Block-X<span className='text-orange-500'>.</span>corp
                </Link>
                <nav className="hidden md:flex space-x-4">
                    <Link className="text-gray-300 hover:text-red-400" href="#about">
                        About
                    </Link>
                    <Link className="text-gray-300 hover:text-red-400" href="#services">
                        Services
                    </Link>
                    <Link className="text-gray-300 hover:text-red-400" href="#case-studies">
                        Case Studies
                    </Link>
                    <Link className="text-gray-300 hover:text-red-400" href="#pricing">
                        Pricing
                    </Link>
                    <Link className="text-gray-300 hover:text-red-400" href="#contact">
                        Contact
                    </Link>
                </nav>
                <Button className="hidden md:block bg-gradient-to-r from-orange-500 to-red-500 text-white hover:scale-105 transition-all ease-in-out ">Get Started</Button>
                <button className="md:hidden text-gray-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
                </button>
            </div>
            {isMenuOpen && (
                <nav className="md:hidden mt-4 space-y-2">
                    <Link className="block text-gray-300 hover:text-red-400" href="#about">
                        About
                    </Link>
                    <Link className="block text-gray-300 hover:text-red-400" href="#services">
                        Services
                    </Link>
                    <Link className="block text-gray-300 hover:text-red-400" href="#case-studies">
                        Case Studies
                    </Link>
                    <Link className="block text-gray-300 hover:text-red-400" href="#pricing">
                        Pricing
                    </Link>
                    <Link className="block text-gray-300 hover:text-red-400" href="#contact">
                        Contact
                    </Link>
                    <Button className="block w-full bg-red-500 hover:bg-red-600 text-white">Get Started</Button>
                </nav>
            )}
        </header>
    )
}

export default Navbar