import React, { useEffect, useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useNavigate, useParams } from 'react-router-dom';
import { useGetItemQuery, useEditItemMutation } from '../../store/api/ItemsSlice'
import { toast } from 'react-toastify'


function EditProperties() {

    const [editItem, { error = {} }] = useEditItemMutation()
    const { data: Items = [] } = useGetItemQuery()

    const params = useParams()
    const navigate = useNavigate()

    const [initialValues, setInitialValues] = useState({
        title: "",
        address: "",
        description: "",
        rent_fee: "",
        availability: "",
        image: "",
    })

    useEffect(() => {
        const item = Items.find((item) => item.id === Number(params.property_id));
        if (item) {
            setInitialValues({
                title: item.title,
                address: item.address,
                description: item.description,
                rent_fee: item.rent_fee,
                // availability: item.availability,
                image: item.image,
            })
        }
    }, [Items, params.property_id]);

    const validationSchema = Yup.object({
        title: Yup.string().required('Name is required'),
        address: Yup.string().required('Address is required'),
        description: Yup.string().required('Description is required'),
        rent_fee: Yup.number().required('Price is required'),
        // availability: Yup.number().required('availability is required').max(1),
        image: Yup.string().required('image is required'),
    });

    const handleSubmit = (values) => {
        editItem({
            id: Number(params.property_id),
            update: values
        }).then(() => {
            toast.success("Property updated successfully")
            navigate('/Owner/Properties')
        })

    }

    console.log("Error is edit", error)

    return (
        <div className='mt-5 bg-white p-8 w-full flex flex-col shadow rounded '>
            {/* title */}
            <div className='flex'>
                <h3 className='font-bold text-2xl'>Edit Property</h3>
            </div>
            {/* content */}

            <div className="mx-auto w-full rounded-lg bg-white p-10 shadow-xl md:w-3/4 lg:w-1/2 mb-12">

                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                    enableReinitialize
                >
                    <Form>
                        <div className="mb-5">
                        </div>
                        <div className="mb-5">
                            <Field
                                type="text"
                                id="title"
                                name="title"
                                placeholder="Name"
                                className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 
                 outline-none shadow text-[20px]"
                            />
                            <ErrorMessage
                                name="title"
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
                                className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 shadow
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
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Address"
                                className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 
                 outline-none shadow text-[20px]"
                            />
                            <ErrorMessage
                                name="address"
                                component="div"
                                className="text-red-400"
                            />
                        </div>

                        <div className="mb-5">
                            <Field
                                type="number"
                                id="rent_fee"
                                name="rent_fee"
                                placeholder="Price"
                                className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 shadow
                outline-none text-[20px]"
                            />
                            <ErrorMessage
                                name="rent_fee"
                                component="div"
                                className="text-red-400"
                            />
                        </div>

                        {/* <div className="mb-5">
                            <Field
                                type="number"
                                id="availability"
                                name="availability"
                                placeholder="Type 1 or 0 only"
                                className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 shadow  outline-none text-[20px]"
                            />
                            <ErrorMessage
                                name="availability"
                                component="div"
                                className="text-red-400"
                            />
                        </div> */}

                        <div className="mb-5">
                            <Field
                                type="text"
                                id="image"
                                name="image"
                                placeholder="url image"
                                className="w-full bg-[#fdfdfd] rounded border border-gray-300 p-3 shadow  outline-none text-[20px]"
                            />
                            <ErrorMessage
                                name="image"
                                component="div"
                                className="text-red-400"
                            />
                        </div>
                        <button type="submit" className="bg-[#00befe] p-3 px-4 rounded-lg shadow-[0px_4px_0px_0px_#03a4da] hover:shadow-[0px_4px_0px_0px_#0387b3] font-medium text-sm text-white cursor-pointer transition-all hover:bg-sky-500">
                            Update Property
                        </button>
                    </Form>
                </Formik>
            </div>

        </div>
    )
}

export default EditProperties