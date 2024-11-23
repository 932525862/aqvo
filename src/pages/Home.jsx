import React from 'react'
import Hero from '../components/home/Hero'
import Contact from '../components/Contact'
import Taqvo from '../components/Taqvo'

const Home = () => {
  return (
    <main>
        <Hero/>
        <Taqvo></Taqvo>
        <Contact/>
    </main>
  )
}

export default Home