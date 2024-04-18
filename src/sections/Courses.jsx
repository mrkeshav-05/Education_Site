import React from 'react'
import Course from '../components/Course'
import Detail from '../components/Detail'

const Courses = () => {
  return (
    <>
      <section className='bg-[#F4F2EB] text-center pb-16'>
        <h2 className=' pt-20 text-gray-500  text-base'>POPULAR COURSES</h2>
        <h1 className='text-5xl font-light mt-4 font-serif mb-10'>Pick A <span className='text-[#1BB699]'>Courses</span> To Get Started</h1>
        <Course/>
      </section>
      <section>
        <Detail/>
      </section>
    </>
  )
}

export default Courses