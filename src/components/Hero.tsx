'use client'
import React from 'react'
import { FlipWords } from './ui/flip-words'
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

function Hero() {
    const words = ['Blockchain Technology', "Artificial  Intelligence"]
  return (
    <BackgroundBeamsWithCollision className="py-20 px-4 md:px-6 lg:px-8 bg-black text-center">
      <div className="container mx-auto">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight mx-0">
          Revolutionize Your Business with <span>
            <FlipWords duration={3000} className='text-red-500' words={words} />
          </span>
        </h1>
        <p className="text-lg md:text-xl lg:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto">
          Harness the power of cutting-edge technology to transform your operations and stay ahead of the competition.
        </p>
        <button className="p-[3px] relative">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg" />
          <div className="px-6 py-2 md:px-8 md:py-3 lg:px-10 lg:py-4 bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
            Start Your Journey
          </div>
        </button>
      </div>
    </BackgroundBeamsWithCollision>
  )
}

export default Hero