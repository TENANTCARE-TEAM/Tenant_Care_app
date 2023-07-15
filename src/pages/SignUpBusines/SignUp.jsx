import React, { useEffect } from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Content from '../../components/BusinesSignUpC/Content'


function SignUp() {

    useEffect(() => {
        document.title = 'BUsines Sign Up'
    }, [])

  return (
    <div className='mt-16 bg-white'>
    <Header/>
   
    <Content/>
   
    <Footer/>
    </div>
  )
}

export default SignUp