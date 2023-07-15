import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Middle from '../../components/aboutContent/Middle'

function About() {
  useEffect(() => {
    document.title = "About us | TenantCare"
  }, [])

  return (
    <div className='mt-16 bg-white'>
        <Header/>
        <Middle/>
        <Footer/>
    </div>
  )
}

export default About