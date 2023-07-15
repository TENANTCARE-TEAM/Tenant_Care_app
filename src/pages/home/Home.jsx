import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/HomeContents/Hero'
import ItemLists from '../../components/HomeContents/ItemLists'

function Home() {
  useEffect(() => {
    document.title = "Home | TenantCare"
  }, [])
  
  return (
    <div className="mt-16 bg-white">
        <Header/>
          <Hero/>
          <ItemLists/>
        <Footer/>
    </div>
  )
}

export default Home