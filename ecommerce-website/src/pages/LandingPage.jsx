import React, { useRef } from 'react';
import NavigationBar from '../components/NavigationBar'
import BannerBar from '../components/BannerBar'
import CategoriesBar from '../components/CategoriesBar'
import LandingPageSlider from '../components/LandingPageSlider'
import LandingCategories from '../components/LandingCategories'
import Newsletter from '../components/Newsletter'
import LandingProducts from '../components/LandingProducts'
import Footer from '../components/Footer'

const LandingPage = () => {
  const productsRef = useRef();

  const scrollToProducts = () => {
    productsRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <div>
      <BannerBar/>
      <NavigationBar/>
      <CategoriesBar/>
      <LandingPageSlider scrollToProducts={scrollToProducts} />
      <LandingCategories/>
      <Newsletter/>
      <LandingProducts ref={productsRef} />
      <Footer/>
    </div>
  )
}

export default LandingPage
