import React from 'react'
import Hero from '../components/home/Hero'
import Contact from '../components/Contact'
import Taqvo from '../components/Taqvo'

const Home = ({isOpen, setIsOpen, openModal}) => {
  return (
    <main>
        <Hero isOpen={isOpen} setIsOpen={setIsOpen} openModal={openModal}/>
        <Taqvo></Taqvo>
        <Contact/>
    </main>
  )
}

export default Home