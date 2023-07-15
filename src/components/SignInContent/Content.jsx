import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { Link } from "react-router-dom";

import BuContent from "../signIBuContent/BuContent";

function Content() {
  const initialValues = {
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    password: Yup.string().required("password is required"),
    email: Yup.string().required(" email is required"),
  });

  return (
    <div className="md:px-[9%]">
      <h2 className="text-center font-medium text-3xl text-[#00befe] pt-[4%]">Login With...</h2>
      <div className=" items-center flex justify-around text-center mb-[2%] mt-[4%] p-4 max-[768px]:flex-col ">
       
       <BuContent/>

        <div className="md:w-[500px] w-[90%] items-center bg-white md:p-11 p-6 rounded-lg  mb-2 shadow-2xl border-2">
         <h2 className="text-center font-medium text-2xl text-[#00befe]">Sign In Personal</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
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

              <div>
                <Field
                  type="password"
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
            <Link to="/signup" className="text-sm md:text-lg text-[#00befe] font-medium">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Content;
