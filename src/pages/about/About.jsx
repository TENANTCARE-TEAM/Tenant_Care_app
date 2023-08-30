import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import AboutUs from '../../components/aboutContent/About'

function About() {
  useEffect(() => {
    document.title = "About us | TenantCare"
  }, [])

  return (
    <div className='mt-16 bg-white'>
        <Header/>
        <AboutUs/>
        <Footer/>
    </div>
  )
}

export default About