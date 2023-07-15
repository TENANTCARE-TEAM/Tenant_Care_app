import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import SignIn from "../../assets/images/signIn.png";
import * as Yup from "yup";
import { Link } from "react-router-dom";

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
      <div className=" items-center flex justify-around text-center mb-[2%] mt-[2%] p-4">
        <div className="max-[768px]:hidden w-[490px] h-[480px] items-center left-4 mb-5">
          <img src={SignIn} alt="SignUp image" />
        </div>

        <div className="md:w-[500px] w-[90%] items-center bg-white md:p-11 p-6 rounded-lg shadow-xl mb-2">
         <h2 className="text-center font-medium text-2xl text-[#00befe]">Sign Up</h2>
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
