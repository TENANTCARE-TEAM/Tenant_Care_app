import React from 'react'

import { ErrorMessage, Field, Form, Formik } from 'formik';
import SignUp from '../../assets/images/SignUp.png'
import * as Yup from 'yup'
import { Link } from 'react-router-dom';


function Content() {

  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required('firstName is required'),
    lastName: Yup.string().required('lastName is required'),
    password: Yup.string().required('password is required'),
    email: Yup.string().required(' email is required'),
    
  });

  return (
    <div className='items-center'>
    

    <div className='  items-center flex justify-around text-center mb-[2%] mt-[2%] p-4'>

    <div className='w-[590px] h-[480px] items-center left-4 mb-5'>
      <img src={SignUp} alt='SignUp image' />
    </div>
    
         
      <div className="w-[500px] items-center bg-white p-11 rounded-lg shadow-xl mt-5">

        <div className=' p-2 '>
        <h2 className='text-justify font-medium text-[24px]'>Sign Up</h2>
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
                id="firstName"
                name="firstName"
                placeholder="First Name"
                className="w-[350px] bg-[#f6f6f6] rounded border border-gray-300 p-3  mt-6"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-400"
              />
            </div>
            <div >
              <Field
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                className="w-[350px] bg-[#f6f6f6] rounded border border-gray-300 p-3 mt-6"
            
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-400"
              />
            </div>

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
            Sign Up
            </button>
          </Form>
        </Formik>

        <div className='flex justify-around items-center pt-4'>
          <p>Already have account?</p>
          <Link to = '/signIn'
          className='text-[#00befe] font-medium'
          >SignIn</Link>
        </div>
      </div>

      </div>

    </div>
  )
}

export default Content