import React, { useRef } from 'react'
import EarthCanvas from '../Canvas/Earth'
import StarsCanvas from '../Canvas/Stars'
import style from './Contact.module.css'
import * as yup from 'yup'
import { useFormik } from 'formik'
import emailjs from 'emailjs-com'
import toast from 'react-hot-toast'

export default function Contact () {
  const formRef = useRef()

  let vaidationSchema = yup.object().shape({
    name: yup
      .string()
      .min(3, 'Min Length is 3')
      .required('The name is required!'),
    email: yup
      .string()
      .email('Email is invalid!')
      .required('The email is required'),
    subject: yup.string().required('The subject is required!'),
    message: yup.string().required('The message is required!')
  })

  let formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      subject: '',
      message: ''
    },
    validationSchema: vaidationSchema,
    onSubmit: handleSubmit
  })

  function handleSubmit (values, { resetForm }) {
    try {
      emailjs
        .send(
          import.meta.env.VITE_EMAILJS_SERVICE_ID,
          import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
          {
            name: values.name,
            email: values.email,
            subject: values.subject,
            message: values.message
          },
          import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
        .then(() => {
          toast.success('Message sent successfuly!', { duration: 1000 })
          resetForm()
        })
        .catch(err => {
          toast.error('Failed to send message. Please try again.')
        })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <section
      id='contact'
      className='relative bg-[#000000] w-full overflow-hidden text-white'
    >
      {/* Stars Background */}
      <StarsCanvas />

      {/* Main Content */}
      <div className='z-10 relative flex md:flex-row flex-col justify-between items-center p-10 h-full'>
        <div
          className={`left space-y-4 p-4 rounded-xl w-full ${style['line-gradient']}`}
        >
          <p className='font-bold text-[20px] text-white text-center'>
            Get in Touch
          </p>
          <p className='font-medium text-[#c7c7c7d0] text-center'>
            Your message has been received. I will be in touch via email
            shortly. Looking forward to connecting with you!
          </p>
          <form
            ref={formRef}
            onSubmit={formik.handleSubmit}
            action=''
            className='w-full'
          >
            {/* name */}
            <div className='flex flex-col my-4 w-full'>
              <label htmlFor='name' className='font-medium text-[14px]'>
                Your name <span className='text-purple-800'>*</span>
              </label>
              <input
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type='text'
                id='name'
                required
              />
              {formik.touched && formik.errors.name ? (
                <div className='my-1 font-semibold text-red-600'>
                  {formik.errors.name}
                </div>
              ) : null}
            </div>
            {/* email */}
            <div className='flex flex-col my-4 w-full'>
              <label htmlFor='email' className='font-medium text-[14px]'>
                Your email <span className='text-purple-800'>*</span>
              </label>
              <input
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type='email'
                id='email'
                required
              />
              {formik.touched && formik.errors.email ? (
                <div className='my-1 font-semibold text-red-600'>
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
            {/* subject */}
            <div className='flex flex-col my-4 w-full'>
              <label htmlFor='subject' className='font-medium text-[14px]'>
                Your subject <span className='text-purple-800'>*</span>
              </label>
              <input
                value={formik.values.subject}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type='text'
                id='subject'
                required
              />
              {formik.touched && formik.errors.subject ? (
                <div className='my-1 font-semibold text-red-600'>
                  {formik.errors.subject}
                </div>
              ) : null}
            </div>
            {/* message */}
            <div className='flex flex-col my-4 w-full'>
              <label htmlFor='message' className='font-medium text-[14px]'>
                Message <span className='text-purple-800'>*</span>
              </label>
              <textarea
                value={formik.values.message}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                name='message'
                id='message'
                className='w-full'
              ></textarea>
              {formik.touched && formik.errors.message ? (
                <div className='my-1 font-semibold text-red-600'>
                  {formik.errors.message}
                </div>
              ) : null}
            </div>
            {/* btn */}
            <div className='flex flex-row justify-center items-center mt-4'>
              <button className='bg-purple-950 hover:bg-gradient-to-r hover:from-purple-800 hover:to-blue-900 hover:shadow-[0_0_10px_rgba(168,85,247,0.7)] px-12 py-4 rounded-xl font-semibold text-[15px] text-center transition-all duration-300 ease-in-out'>
                Send
              </button>
            </div>
          </form>
        </div>

        <div className='right w-full md:w-1/2 h-[400px] md:h-[500px]'>
          <EarthCanvas />
        </div>
      </div>
    </section>
  )
}
