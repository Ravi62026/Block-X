import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Laptop, Cpu, Shield, Zap, BarChart, Users, Star, CheckCircle } from "lucide-react"
import Hero from "@/components/Hero"
import About from "@/components/About"
import OurProducts from "@/components/OurProducts"



export default function BharatBlockAILanding() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white font-sans">

      <main className="flex-grow">
        {/* Hero Section */}
        <Hero />

        {/* About Us Section */}
        
        <About />
        {/* Products Section */}
        <OurProducts />

        {/* Case Studies Section */}
        <section id="case-studies" className="py-16 px-4 md:px-6 lg:px-8 bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Case Studies</h2>
            <Tabs defaultValue="finance" className="w-full">
              <TabsList className="grid w-full grid-cols-1 md:grid-cols-3">
                <TabsTrigger value="finance">Finance</TabsTrigger>
                <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
                <TabsTrigger value="supply-chain">Supply Chain</TabsTrigger>
              </TabsList>
              <TabsContent value="finance" className="mt-6">
                <Card className="bg-gray-900 border-gray-700">
                  <CardHeader>
                    <CardTitle>Revolutionizing Cross-Border Payments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      We implemented a blockchain-based solution for a major bank, reducing international transfer times from days to minutes and cutting costs by 60%.
                    </p>
                    <Button variant="outline">Read More</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="healthcare" className="mt-6">
                <Card className="bg-gray-900 border-gray-700">
                  <CardHeader>
                    <CardTitle>Secure Patient Data Management</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      Our AI-powered blockchain solution helped a healthcare provider improve data security and interoperability, leading to a 40% increase in operational efficiency.
                    </p>
                    <Button variant="outline">Read More</Button>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="supply-chain" className="mt-6">
                <Card className="bg-gray-900 border-gray-700">
                  <CardHeader>
                    <CardTitle>Transparent Supply Chain Tracking</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">
                      We developed a blockchain-based tracking system for a major retailer, increasing transparency and reducing fraud by 80% across their supply chain.
                    </p>
                    <Button variant="outline">Read More</Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="flex flex-col items-center text-center">
                <Zap className="w-12 h-12 mb-4 text-red-400" />
                <h3 className="text-xl font-semibold mb-2">Lightning Fast</h3>
                <p className="text-gray-300">Optimized performance for quick and efficient operations</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Shield className="w-12 h-12 mb-4 text-red-400" />
                <h3 className="text-xl font-semibold mb-2">Highly Secure</h3>
                <p className="text-gray-300">Advanced encryption and security measures to protect your data</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BarChart className="w-12 h-12 mb-4 text-red-400" />
                <h3 className="text-xl font-semibold mb-2">Scalable Solutions</h3>
                <p className="text-gray-300">Grow your business with our flexible and scalable technology</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="w-12 h-12 mb-4 text-red-400" />
                <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock assistance from our expert team</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Why Choose BharatBlockAI?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Star className="w-6 h-6 mr-2 text-red-400" />
                  Expertise
                </h3>
                <p className="text-gray-300 mb-6">
                  Our team consists of industry-leading experts in blockchain and AI technologies.
                </p>
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Zap className="w-6 h-6 mr-2 text-red-400" />
                  Innovation
                </h3>
                <p className="text-gray-300 mb-6">
                  We're constantly pushing the boundaries of what's possible with cutting-edge solutions.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Users className="w-6 h-6 mr-2 text-red-400" />
                  Client-Centric Approach
                </h3>
                <p className="text-gray-300 mb-6">
                  Your success is our priority. We work closely with you to ensure the best outcomes.
                </p>
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Shield className="w-6 h-6 mr-2 text-red-400" />
                  Proven Track Record
                </h3>
                <p className="text-gray-300 mb-6">
                  Our successful case studies speak for themselves. Join our growing list of satisfied clients.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 md:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Clients Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="pt-6">
                  <p className="text-gray-300 mb-4">
                    "BharatBlockAI transformed our supply chain with their innovative blockchain solution. We've seen unprecedented transparency and efficiency gains."
                  </p>
                  <p className="font-semibold">- Rajesh Patel, CEO of LogiTech Solutions</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="pt-6">
                  <p className="text-gray-300 mb-4">
                    "The AI-powered analytics platform developed by BharatBlockAI has given us invaluable insights, driving our decision-making to new heights."
                  </p>
                  <p className="font-semibold">- Priya Sharma, CTO of  DataDrive Inc.</p>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700">
                <CardContent className="pt-6">
                  <p className="text-gray-300 mb-4">
                    "We were impressed by the expertise and professionalism of the BharatBlockAI team. They delivered a secure and scalable solution that exceeded our expectations."
                  </p>
                  <p className="font-semibold">- Amit Desai, Founder of SecureChain</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Pricing Plans Section */}
        <section id="pricing" className="py-16 px-4 md:px-6 lg:px-8 bg-gray-800">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Pricing Plans</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Starter</CardTitle>
                  <p className="text-4xl font-bold">₹49,999<span className="text-lg font-normal">/month</span></p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-red-400" />
                      Basic blockchain integration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-red-400" />
                      AI-powered analytics dashboard
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-red-400" />
                      5 user licenses
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-red-400" />
                      Email support
                    </li>
                  </ul>
                  <Button className="w-full mt-6">Get Started</Button>
                </CardContent>
              </Card>
              <Card className="bg-gray-900  border-red-400">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Pro</CardTitle>
                  <p className="text-4xl font-bold">₹99,999<span className="text-lg font-normal">/month</span></p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-red-400" />
                      Advanced blockchain solutions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-red-400" />
                      Custom AI model development
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-red-400" />
                      20 user licenses
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-red-400" />
                      Priority support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-red-400" />
                      Quarterly strategy sessions
                    </li>
                  </ul>
                  <Button className="w-full mt-6 bg-red-500 hover:bg-red-600">Get Started</Button>
                </CardContent>
              </Card>
              <Card className="bg-gray-900 border-gray-700">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">Enterprise</CardTitle>
                  <p className="text-4xl font-bold">Custom</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-red-400" />
                      Fully customized solutions
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-red-400" />
                      End-to-end blockchain & AI integration
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-red-400" />
                      Unlimited user licenses
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-red-400" />
                      24/7 dedicated support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="w-5 h-5 mr-2 text-red-400" />
                      On-site training and setup
                    </li>
                  </ul>
                  <Button className="w-full mt-6">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section id="contact" className="py-16 px-4 md:px-6 lg:px-8 bg-gray-900">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Contact Us</h2>
            <div className="max-w-md mx-auto">
              <form className="space-y-4">
                <Input type="text" placeholder="Your Name" className="bg-gray-800 border-gray-700 text-white" />
                <Input type="email" placeholder="Your Email" className="bg-gray-800 border-gray-700 text-white" />
                <Input type="tel" placeholder="Your Phone" className="bg-gray-800 border-gray-700 text-white" />
                <textarea
                  className="w-full p-3 bg-gray-800 border border-gray-700 rounded-md text-white"
                  rows={4}
                  placeholder="Your Message"
                ></textarea>
                <Button className="w-full bg-red-500 hover:bg-red-600">Send Message</Button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-4 md:px-6 lg:px-8 bg-gray-800">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link className="text-2xl font-bold text-red-400" href="/">
              Block-X corporation
            </Link>
            <p className="text-sm text-gray-400 mt-2">Revolutionizing industries with Blockchain and AI</p>
          </div>
          <nav className="flex flex-wrap justify-center md:justify-end gap-4">
            <Link className="text-sm text-gray-300 hover:text-red-400" href="#about">
              About
            </Link>
            <Link className="text-sm text-gray-300 hover:text-red-400" href="#services">
              Services
            </Link>
            <Link className="text-sm text-gray-300 hover:text-red-400" href="#case-studies">
              Case Studies
            </Link>
            <Link className="text-sm text-gray-300 hover:text-red-400" href="#pricing">
              Pricing
            </Link>
            <Link className="text-sm text-gray-300 hover:text-red-400" href="#contact">
              Contact
            </Link>
          </nav>
        </div>
        <div className="container mx-auto mt-8 pt-4 border-t border-gray-700 text-center text-sm text-gray-400">
          © 2024 BharatBlockAI. All rights reserved.
        </div>
      </footer>
    </div>
  )
}