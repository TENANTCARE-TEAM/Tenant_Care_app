import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Content from '../../components/GetStartContent/Content'


function GetStarted() {
  useEffect(() => {
    document.title = "Get Started | TenantCare"
  }, [])

  return (
    <div className='mt-16 bg-white'>
        <Header/>
        <Content/>
        <Footer/>
    </div>
  )
}

export default GetStarted