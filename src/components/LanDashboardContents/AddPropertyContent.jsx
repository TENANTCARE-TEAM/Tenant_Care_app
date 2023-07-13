import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

function AddPropertyContent() {
  
  const initialValues = {
    name: '',
    description: '',
    price: '',
    bedroom: '',
    image: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    description: Yup.string().required('Description is required'),
    price: Yup.string().required('Price is required'),
    bedroom: Yup.string().required('Bed room is required'),
    image: Yup.string().required('image is required'),
  });
   
  return (
    <div className='mt-5 bg-white p-8 w-full flex flex-col shadow rounded '>
    {/* title */}
      <div className='flex'>
          <h3 className='font-bold text-2xl'>Add Property</h3>
      </div>
      {/* content */}
         
      <div className="mx-auto rounded-lg bg-white p-10 shadow-xl md:w-3/4 lg:w-1/2 mb-12">
       
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
        >
          <Form>
            <div className="mb-5">
            </div>
            <div className="mb-5">
              <Field
                type="text"
                id="name"
                name="name"
                placeholder="Name"
                className="w-full bg-[#f6f6f6] rounded border border-gray-300 p-3 
                 outline-none shadow text-[20px]"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-red-400"
              />
            </div>
            <div className="mb-5">
              <Field
                as="textarea"
                id="description"
                name="description"
                placeholder="Description"
                className="w-full bg-[#f6f6f6] rounded border border-gray-300 p-3 shadow
                outline-none text-[20px]"
              />
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-400"
              />
            </div>
            <div className="mb-5">
              <Field
                type="number"
                id="price"
                name="price"
                placeholder="Price"
                className="w-full bg-[#f6f6f6] rounded border border-gray-300 p-3 shadow
                outline-none text-[20px]"
              />
              <ErrorMessage
                name="price"
                component="div"
                className="text-red-400"
              />
            </div>

            <div className="mb-5">
              <Field
                type="number"
                id="bedrrom"
                name="bedroom"
                placeholder="Bed room"
                className="w-full bg-[#f6f6f6] rounded border border-gray-300 p-3 shadow  outline-none text-[20px]"
              />
              <ErrorMessage
                name="bedroom"
                component="div"
                className="text-red-400"
              />
            </div>

            <div className="mb-5">
              <Field
                type="text"
                id="image"
                name="image"
                placeholder="url image"
                className="w-full bg-[#f6f6f6] rounded border border-gray-300 p-3 shadow  outline-none text-[20px]"
              />
              <ErrorMessage
                name="image"
                component="div"
                className="text-red-400"
              />
            </div>
         
            <button
              type="submit"
              className="mt-4 rounded-2xl bg-[#00befe] px-12 py-3 text-white 
              hover:bg-sky-500 text-[18px]"
            >
              Add Property
            </button>
          </Form>
        </Formik>
      </div>

    </div>
  )
}

export default AddPropertyContent