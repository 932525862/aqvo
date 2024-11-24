import React from 'react'
import Hero from '../components/home/Hero'
import Contact from '../components/Contact'
import Taqvo from '../components/Taqvo'
import SwiperSection from '../components/swiper/SwiperSection'

const Home = () => {
  return (
    <main>
        <Hero/>
        <SwiperSection/>
        <Taqvo/>
        <Contact/>
    </main>
  )
}

export default Home