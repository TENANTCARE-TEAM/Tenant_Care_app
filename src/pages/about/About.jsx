import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import AboutUs from '../../components/aboutContent/About'
import Teams from '../../components/aboutContent/Teams'

function About() {
  useEffect(() => {
    document.title = "About us | TenantCare"
  }, [])

  return (
    <div className='mt-16 bg-white'>
        <Header/>
        <AboutUs/>
        <Teams />
        <Footer/>
    </div>
  )
}

export default About