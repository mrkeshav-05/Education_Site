import React from 'react'
import { course } from './data'
import Button from './Button'
import { Link } from 'react-router-dom'
import VideoPage from './VideoPage'

const ParticulerCourse = (props) => {


  return (
    <section className=' w-full h-min-screen'>
      <h2 className='text-center py-10  text-gray-500  text-base'>POPULAR COURSES</h2>

      <div className='lg:flex   justify-center items-center px-10 bg-red-100 py-10 mb-10  rounded-xl mx-20 gap-10 border'>
        <div>
          <img src={props.item.img} alt=""
            width={900}
            className='cover-full rounded-lg'
          />
        </div>
        <div className='mt-4 lg:mt-0 space-y-1'>
          <h1 className='text-3xl font-serif '>{props.item.title}</h1>
          <p>{props.item.course_structure}</p>
          <p className='block  text-left text-sm w-min px-1 py-1 text-[#1BB699]  bg-[#1bb69a2d] rounded'>{props.item.level}</p>
          <p>Rating: {" "}{props.item.rating}</p>
          <p>Price: {" "}{props.item.price}</p>
          
          <Link
            to={`/video/${props.item.id}`}
          >
            <Button text='Enroll Now' />
          </Link>
        </div>
      </div>
    </section>

  )
}

export default ParticulerCourse