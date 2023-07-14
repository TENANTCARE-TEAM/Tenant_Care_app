import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik';
import SignIn from '../../assets/images/signIn.png'
import * as Yup from 'yup'
import { Link } from 'react-router-dom';


function Content() {

  const initialValues = {
    email: '',
    password: '',
  
  };

  const validationSchema = Yup.object({
    password: Yup.string().required('password is required'),
    email: Yup.string().required(' email is required'),
    
  });


  return (
    <div className='items-center'>
    

    <div className=' items-center flex justify-around text-center mb-[2%] mt-[2%] p-4'>

    <div className='w-[490px] h-[480px] items-center left-4 mb-5'>
      <img src={SignIn} alt='SignUp image' />
    </div>
    
         
      <div className="w-[500px] items-center bg-white p-11 rounded-lg shadow-xl mb-2">

        <div className=' p-2 '>
        <h2 className='text-justify font-medium text-[24px]'>Sign In</h2>
        <p className='text-justify text-[17px]'>Please fill your information below</p>
        </div>
       
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form>
           
            
         

            <div >
              <Field
                type="text"
                id="email"
                name="email"
                placeholder="E-mail"
                className="w-[350px] bg-[#f6f6f6] rounded border border-gray-300 p-3 mt-6"
              
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-400"
              />
            </div>
            
            <div >
              <Field
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                className="w-[350px] bg-[#f6f6f6] rounded border border-gray-300 p-3 mt-6 "


              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-400"

              />
            </div>

            
            <button
              type="submit"
              className="w-[350px] mt-4 rounded-[8px] bg-[#00befe] px-12 py-3 text-white 
              hover:bg-sky-500 text-[18px]"
            >
            Sign In
            </button>
          </Form>
        </Formik>

        <div className='flex justify-around items-center pt-4'>
          <p>Don’t have account?</p>
          <Link to = '/signup'
          className='text-[#00befe] font-medium'
          >Create Account</Link>
        </div>
      </div>

      </div>

    </div>
  )
}

export default Content