import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import Modal from '../components/contact-modal/Modal'

const Layout = ({isOpen, setIsOpen, openModal}) => {
  return (
    <>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}/>
        <Header openModal={openModal}/>
        <Outlet/>
        <Footer/>
    </>
  )
}

export default Layout