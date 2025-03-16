import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import Skills from '@/components/sections/Skills'
import Testimonials from '@/components/sections/Testimonials'
import React from 'react'

const Home = () => {
  return (
    <main className='min-h-screen bg-background'>
      <Hero />
      <Skills />
      <Testimonials />
      <Projects />
    </main>
  )
}

export default Home
