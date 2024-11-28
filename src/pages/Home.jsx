import React from 'react'
import Hero from '../components/home/Hero'
import Contact from '../components/Contact'
import Taqvo from '../components/Taqvo'
import SwiperSection from '../components/swiper/SwiperSection'
import Sertifikat from "../components/Sertifikat"

const Home = ({isOpen, setIsOpen, openModal}) => {
  return (
    <main>
        <Hero isOpen={isOpen} setIsOpen={setIsOpen} openModal={openModal}/>
        <SwiperSection/>
        <Taqvo/>
        <Contact/>
		<Sertifikat/>	
    </main>
  )
}

export default Home