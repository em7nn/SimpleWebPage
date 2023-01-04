import React from 'react'
import Footer from '../../Layouts/Footer'
import Navbar from '../../Layouts/Navbar'
import HomeIntroduction from './HomeIntroduction'
import Written from './Written'

function HomeComponents() {
  return (
    <>
    <Navbar/>
    <HomeIntroduction/>
    <Written/>
    <Footer/>
    </>
  )   
}

export default HomeComponents