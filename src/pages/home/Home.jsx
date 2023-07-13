import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/HomeContents/Hero'
import ItemLists from '../../components/HomeContents/ItemLists'

function Home() {
  return (
    <div>
      
        <Header/>
      
          <Hero/>
          <ItemLists/>

        <Footer/>
    </div>
  )
}

export default Home