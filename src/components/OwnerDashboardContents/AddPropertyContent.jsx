import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { useAddItemMutation } from '../../store/api/ItemsSlice'
import { useNavigate } from 'react-router-dom/dist'
import { toast } from 'react-toastify'

function AddPropertyContent() {

  const navigate = useNavigate()

  const [addItem] = useAddItemMutation()

  const initialValues = {
    title: '',
    address: '',
    description: '',
    rent_fee: '',
    availability: '',
    image: '',
  };

  const validationSchema = Yup.object({
    title: Yup.string().required('Name is required'),
    address: Yup.string().required('Address is required'),
    description: Yup.string().required('Description is required'),
    rent_fee: Yup.number().required('Price is required'),
    image: Yup.string().required('image is required'),
  });

  const handleSubmit = (values, { resetForm }) => {

    addItem({
      title: values.title,
      description: values.description,
      address: values.address,
      rent_fee: values.rent_fee,
      image: values.image,
    }).unwrap().then(() => {
      toast.success("Property created successfully")
      navigate('/landlord/Properties')
    })

    console.log(values);
    resetForm()
  }


  return (
    <div className='mt-5 bg-white p-8 w-full flex flex-col shadow rounded '>
      {/* title */}
      <div className='flex'>
        <h3 className='font-bold text-2xl'>Add Property</h3>
      </div>
      {/* content */}

      <div className="mx-auto w-full rounded-lg bg-white p-10 border shadow-xl md:w-3/4 lg:w-1/2 mb-12">

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
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

            <button type="submit" className="bg-[#00befe] p-3 px-4 rounded-lg font-medium text-sm text-white cursor-pointer transition-all hover:bg-sky-500 shadow-[0px_4px_0px_0px_#03a4da] hover:shadow-[0px_4px_0px_0px_#001fff]">
              Add Property
            </button>

          </Form>
        </Formik>
      </div>

    </div>
  )
}

export default AddPropertyContent