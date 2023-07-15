import React from "react";

import { ErrorMessage, Field, Form, Formik } from "formik";
import SignUp from "../../assets/images/SignUp.png";
import * as Yup from "yup";
import { Link } from "react-router-dom";

function Content() {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First Name is required"),
    lastName: Yup.string().required("Last Name is required"),
    password: Yup.string().required("Password is required"),
    email: Yup.string().required("Email is required"),
  });

  return (
    <div className="md:px-[9%]">
      <div className="flex items-center  justify-around max-[768px]:flex-col text-center mb-[2%] mt-[2%] p-4">
        <div className="max-[768px]:hidden w-[490px] h-[480px] items-center left-4 mb-5">
          <img src={SignUp} alt="SignUp image" />
        </div>

        <div className="md:w-[500px] w-[90%] items-center bg-white md:p-11 p-6 rounded-lg shadow-xl mt-5">
          <h2 className="text-center font-medium text-2xl text-[#00befe]">Sign Up</h2>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
          >
            <Form>
              <div>
                <Field
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First Name"
                  className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3  mt-6 outline-[#00befe]"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-left text-red-400"
                />
              </div>
              <div>
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last Name"
                  className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 mt-6 outline-[#00befe]"
                />
                <ErrorMessage
                  name="lastName"
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

              <div>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 mt-6 outline-[#00befe] "
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
