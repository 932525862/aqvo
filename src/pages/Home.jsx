import React from 'react'
import Hero from '../components/home/Hero'
import Contact from '../components/Contact'
import Taqvo from '../components/Taqvo'
import SwiperSection from '../components/swiper/SwiperSection'

const Home = ({isOpen, setIsOpen, openModal}) => {
  return (
    <main>
        <Hero isOpen={isOpen} setIsOpen={setIsOpen} openModal={openModal}/>
        <Taqvo></Taqvo>
        <Hero/>
        <SwiperSection/>
        <Taqvo/>
        <Contact/>
    </main>
  )
}

export default Home