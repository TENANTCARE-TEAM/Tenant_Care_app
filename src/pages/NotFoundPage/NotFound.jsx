import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Content from '../../components/NotFoundContent/Content'

function NotFound() {
  useEffect(() => {
    document.title = "Not Found | TenantCare"
  }, [])
  
  return (
    <div className="mt-16 bg-white">
        <Header/>
        <Content/>
        <Footer/>
    </div>
  )
}

export default NotFound