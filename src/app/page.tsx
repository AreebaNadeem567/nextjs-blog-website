import React from 'react'
import HeroSection from './components/Hero'
import FeaturesSection from './components/FeatureSection'
import CategoriesSection from './components/CategoriesSection'
import Products from './components/Products'
import TestimonialSection from './components/TestimonialSection'
import Icons from './components/Icons'

const Home = () => {
  return (
    <div>
      <HeroSection />
      <FeaturesSection />
      <CategoriesSection />
      <Products />
      <TestimonialSection />
      <Icons />
    </div>
  )
}

export default Home
