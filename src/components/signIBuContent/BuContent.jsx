import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useSignInBuMutation } from "../../store/api/AuthSlices";
import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import { HiEye, HiEyeOff } from "react-icons/hi";
import BuSignIn from '../../assets/images/login-pana.png'


function BuContent() {
  const navigate = useNavigate()
  const [change, setChange] = useState(true)

  const [signInBu, {error = {}}] = useSignInBuMutation()

  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string().required("Please Enter your Password")
    .min(8, 'Password must be 8 characters long')
    .matches(/[0-9]/ , 'Password requires a number')
    .matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires a uppercase letter'),
    email: Yup.string().email().required("Please Enter Your Email"),
  });

  const handleSubmit = (values) => {
    signInBu({
      email: values.email,
      password: values.password,
    }).unwrap().then(() => {
      toast.success("sign in was succesfull");
      navigate("/landlord/Dashboard")
    }).catch((err) => {
      console.log(err) 
      if(error.status === 401) {
      toast.error("Invalid email or passoword")
    }
    })

   
  }

  return (
    <div className="md:px-[9%]">
     
      {/* <h2 className="text-center font-medium text-3xl text-[#00befe] pt-[8%]">Login With...</h2> */}
      <div className="flex items-center md:flex-row flex-col md:gap-0 gap-4 justify-around text-center mb-[2%] mt-[5%] pt-9 p-4">
  
      <div className="max-[768px]:hidden w-[490px] h-[480px] items-center left-4 mb-5 pt-6">
          <img src={BuSignIn} alt="SignUp image" />
        </div>

    <div className="md:w-[500px] w-[100%] items-center bg-white md:p-11 p-6 rounded-lg  mb-2 shadow-2xl border-2 pb-9">
      <h2 className="text-center font-medium text-2xl text-[#00befe]">
        Sign In Owner
      </h2>
      <Formik 
      initialValues={initialValues} 
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
      >
        <Form>
          <div>
            <Field
              type="text"
              id="email"
              name="email"
              placeholder="E-mail"
              className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 mt-6 outline-[#00befe]"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-left text-red-400"
            />
          </div>

          <div className="relative">
            <Field
              type={`${change ? 'password' : 'text'}`}
              id="password"
              name="password"
              placeholder="Password"
              className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 mt-6 outline-[#00befe]"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-left text-red-400"
            />
            <div onClick={() => setChange(!change)} className="cursor-pointer absolute top-10 right-4 text-[#555]">
                {change ? <HiEye/> : <HiEyeOff/>}
            </div>
          </div>

          <button
            type="submit"
            className="w-full mt-4 rounded-[8px] bg-[#00befe] px-12 py-3 text-white 
         hover:bg-sky-500 text-[18px]"
          >
            Sign In
          </button>
        </Form>
      </Formik>

      <div className="flex justify-between items-center pt-4">
        <p className="text-sm">Don’t have account?</p>
        <Link
          to="/business/signUp"
          className="text-sm md:text-lg text-[#00befe] font-medium"
        >
          Sign Up
        </Link>
      </div>
    </div>

    </div>

</div>
  );
}

export default BuContent;
