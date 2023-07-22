import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import BuContent from '../../components/signIBuContent/BuContent'

function SignIn() {
  useEffect(() => {
    document.title = "Sign in | TenantCare"
  }, [])

  return (
    <div className="mt-16 bg-white">
        <Header/>
          <BuContent/>
       <Footer/>
    </div>
  )
}

export default SignIn