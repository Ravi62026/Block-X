'use client'
import React from 'react'
import Image from 'next/image'
import { TextGenerateEffect } from "./ui/text-generate-effect";

function About() {
    const words = `BharatBlockAI is at the forefront of technological innovation, combining the power of blockchain and artificial intelligence to revolutionize industries across India and beyond.Our team of experts is dedicated to creating cutting-edge solutions that drive efficiency, security, and growth for businesses of all sizes.With a deep understanding of both blockchain and AI technologies, we're uniquely positioned to help your organization thrive in the digital age.`
  return (
    <section id="about" className="py-16 px-4 md:px-6 lg:px-8 bg-black">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-red-500 font-bold mb-8 text-center">About BharatBlockAI</h2>
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-2/3 mb-8 md:mb-0 text-lg md:text-xl lg:text-2xl">
                <TextGenerateEffect words={words} />
            </div>
            <div className="md:w-1/3 flex justify-center">
                <Image src='/aboutUsImage.png' alt="About BharatBlockAI" className="rounded-lg shadow-lg" width={400} height={300} />
            </div>
        </div>
    </section>
  )
}

export default About