import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Acounts from '../../components/GetStart/Acounts'


function GetStarted() {
  return (
    <div className='mt-16 bg-white'>
        <Header/>
        <Acounts/>
        <Footer/>
    </div>
  )
}

export default GetStarted