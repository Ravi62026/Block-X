'use client'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'
import { MessageSquareCode, Zap, Shield } from 'lucide-react'
import { BackgroundGradient } from './ui/background-gradient'

const products = [
  {
    icon: <Shield className="w-12 h-12 mb-4 text-red-400" />,
    title: 'ChainVerdict',
    description: 'Blockchain backed, Generative AI powered solution for speedy justice delivery and transparent justice. This helps both the common public and justice stakeholders.',
    link: 'https://chain-verdict.vercel.app',
  },
  {
    icon: <MessageSquareCode className="w-12 h-12 mb-4 text-red-400" />,
    title: 'BlockChat',
    description: 'Blockchain based, Generative AI powered chat application for secured communication channels like Defence, Space Research, Delegate communication and more.',
    link: 'https://icp-chat.vercel.app/', // replace with your actual link
  },
  {
    icon: <Zap className="w-12 h-12 mb-4 text-red-400" />,
    title: 'VidyutChain',
    description: 'Blockchain based, Generative AI powered renewable energy management solution for efficient and sustainable energy generation and consumption.',
    link: 'https://vidyutchain.vercel.app', // replace with your actual link
  },
]

function OurProducts() {
  return (
    <section id="services" className="py-16 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-neutral-950 to-neutral-800">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl text-red-500 font-bold mb-8 text-center">Our Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <a href={product.link} rel="noopener noreferrer" key={index}>
              <BackgroundGradient className='p-4 md:p-8 hover:scale-105 transition-all ease-in-out'>
                <Card className="bg-gray-800 border-gray-700 h-full">
                  <CardHeader className='flex flex-col justify-center items-center'>
                    {product.icon}
                    <CardTitle className="text-2xl md:text-4xl font-semibold text-white">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300">{product.description}</p>
                  </CardContent>
                </Card>
              </BackgroundGradient>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OurProducts
