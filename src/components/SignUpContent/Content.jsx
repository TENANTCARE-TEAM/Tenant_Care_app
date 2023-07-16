import React from "react";

import { ErrorMessage, Field, Form, Formik } from "formik";
import SignUp from "../../assets/images/SignUp.png";
import * as Yup from "yup";
import { Link, useNavigate } from "react-router-dom";
import { useSignUpPeMutation } from "../../store/api/AuthSlices";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";
import {HiEye, HiEyeOff} from 'react-icons/hi'

function Content() {
  const navigate = useNavigate()

  const [change, setChange] = useState(true)
  const [signUpPe, {error = {}}] = useSignUpPeMutation();

  const initialValues = {
    first_name: "",
    last_name: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    first_name: Yup.string().required("First Name is required"),
    last_name: Yup.string().required("Last Name is required"),
    password: Yup.string().required("Password is required").min(8),
    email: Yup.string().required("email is required"),
  });

  const handleSubmit = (values) => {
    signUpPe({
      first_name: values.first_name,
      last_name: values.last_name,
      email: values.email,
      password: values.password,
    }).unwrap().then(() => {
      navigate("/signIn")
    }).catch((error) => {c
      console.log(error)
      if(error.status === 400) {
        toast.error("The email already exists")
      }
    })

  }

  return (
    <div className="md:px-[9%]">
      <ToastContainer/>
      <div className="flex items-center justify-around max-[768px]:flex-col text-center mb-[2%] mt-[2%] p-4">
        <div className="max-[768px]:hidden w-[490px] h-[480px] items-center left-4 mb-5">
          <img src={SignUp} alt="SignUp image" />
        </div>

        <div className="md:w-[500px] w-[90%] border-2 items-center bg-white md:p-11 p-6 rounded-lg shadow-xl mt-5">
          <h2 className="text-center font-medium text-2xl text-[#00befe]">Sign Up</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div>
                <Field
                  type="text"
                  id="first_name"
                  name="first_name"
                  placeholder="First Name"
                  className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3  mt-6 outline-[#00befe]"
                />
                <ErrorMessage
                  name="first_name"
                  component="div"
                  className="text-left text-red-400"
                />
              </div>
              <div>
                <Field
                  type="text"
                  id="last_name"
                  name="last_name"
                  placeholder="Last Name"
                  className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 mt-6 outline-[#00befe]"
                />
                <ErrorMessage
                  name="last_name"
                  component="div"
                  className="text-left text-red-400"
                />
              </div>

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
                  placeholder="password"
                  className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 mt-6 outline-[#00befe] "
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
                Sign Up
              </button>
            </Form>
          </Formik>

          <div className="flex justify-between items-center pt-4">
            <p className="text-sm">Already have account?</p>
            <Link to="/signIn" className="text-sm text-[#00befe] font-medium">
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
