import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import * as Yup from 'yup'
import { useEditUserTenantMutation, useGetUserTenantQuery } from "../../store/api/UsersSlice";
import { useNavigate } from "react-router-dom";

function EditProfileContent() {

 const navigate = useNavigate()
 const {data: user = []} = useGetUserTenantQuery()
 const [updateUser] = useEditUserTenantMutation()

 const initialValues = {
    first_name: user.first_name,
    last_name: user.last_name,
    email: user.email,
 }
    
  const validationSchema = Yup.object({
    first_name: Yup.string().required('First Name is required'),
    last_name: Yup.string().required('Last Name is required'),
    email: Yup.string().required('E-mail is required'),
  });

  const handleUpdate = (values) => {
    updateUser(values).unwrap().then(() => {
        navigate("/Renter/Profile")
    })
  }

  return (
    <div className="mt-4 bg-white p-6 w-full flex flex-col shadow rounded">
      {/* title */}
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-2xl">Edit Profile</h3>
      </div>
      <div className="mx-auto w-full rounded-lg bg-white p-10 shadow-xl md:w-3/4 lg:w-1/2 mb-12">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleUpdate}
          enableReinitialize
        >
          <Form>
            <div className="mb-5"></div>
            <div className="mb-5">
              <Field
                type="text"
                id="first_name"
                name="first_name"
                placeholder="First Name"
                className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 
 outline-none shadow text-[20px]"
              />
              <ErrorMessage
                name="first_name"
                component="div"
                className="text-red-400"
              />
            </div>

            <div className="mb-5">
              <Field
                type="text"
                id="last_name"
                name="last_name"
                placeholder="Last Name"
                className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 shadow
outline-none text-[20px]"
              />
              <ErrorMessage
                name="last_name"
                component="div"
                className="text-red-400"
              />
            </div>

            <div className="mb-5">
              <Field
                type="email"
                id="email"
                name="email"
                placeholder="E-mail"
                className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 
 outline-none shadow text-[20px]"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-400"
              />
            </div>
            <button type="submit" className="bg-[#00befe] p-3 px-4 rounded-lg shadow-[0px_4px_0px_0px_#03a4da] hover:shadow-[0px_4px_0px_0px_#0387b3] font-medium text-sm text-white cursor-pointer transition-all hover:bg-sky-500">
                Update Profile
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default EditProfileContent;
