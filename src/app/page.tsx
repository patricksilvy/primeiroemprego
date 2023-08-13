"use client"
import About from '@/components/About'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Testimonials from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Footer />
    </>
  )
}
