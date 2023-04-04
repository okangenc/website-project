import React from 'react'
import NavigationBar from '../components/NavigationBar'
import BannerBar from '../components/BannerBar'
import CategoriesBar from '../components/CategoriesBar'
import LandingPageSlider from '../components/LandingPageSlider'
import LandingCategories from '../components/LandingCategories'
import Newsletter from '../components/Newsletter'
import LandingProducts from '../components/LandingProducts'
import Footer from '../components/Footer'

const LandingPage = () => {
  return (
    <div>
      <BannerBar/>
      <NavigationBar/>
      <CategoriesBar/>
      <LandingPageSlider/>
      <LandingCategories/>
      <Newsletter/>
      <LandingProducts/>
      <Footer/>
    </div>
  )
}

export default LandingPage
