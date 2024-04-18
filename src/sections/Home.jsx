import React from 'react'
import Button from '../components/Button'
import { hero_banner_1, hero_banner_2, hero_bg, hero_shape_2, offer1, video_banner, video_bg, video_shape_1 } from '../assets/images'
import Cards from '../components/Cards'
import Courses from './Courses'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Offers from './Offers'
import {course_1, course_2, course_3 } from '../assets/images'
import Crousal from '../components/Crousal'


const Home = (props) => {

  return (
    <>
      <section className='bg-[#F4F2EB] min-h-screen pt-10  '>
        <div className='lg:flex   justify-between items-center px-4'>
          <div className='px-6 mx-auto text-center lg:text-left' >
            <h1>
              {
                props.name ? (
                  <>
                    <h1 className='lg:text-4xl font-serif font-extralight text-5xl justify-center py-7'>Welcome, {props.name}!</h1>
                  </>
                ) : (
                  <></>
                )
              }
            </h1>
            <h1 className='lg:text-6xl font-bold text-5xl justify-center py-7'>The Best Program
              <br /> to <span className='text-red-500'>Enroll</span> for
              <br />Exchange
            </h1>
            <p className='py-4 text-xl'>
              Excepteur sint occaecat cupidatat non proident sunt in <br /> culpa qui officia deserunt mollit.
            </p>
            <div className=''>

              <Link to={props.name ? `/courses` : `/login`} >
                <Button text='Find courses' className="" />
              </Link>
            </div>
          </div>
          <div className='lg:w-1/2 w-full bg-center overflow-hidden flex  gap-9 justify-center items-center'
            style={{
              backgroundImage: `url(${hero_shape_2})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
            }}
          >
            <img src={hero_banner_1} alt="" className=' rounded-tr-[30%] rounded-bl-[30%] mt-24 mb-44' />
            <img src={hero_banner_2} alt="" className=' rounded-tr-[30%] rounded-bl-[30%] mt-44' />
          </div>


        </div>

      </section>
      <img src={video_bg} alt="" className='cover' />


      <section className='px-4 mt-28 '>
        <h2 className='text-center text-red-500 font-mono my-5'>CATEGORIES</h2>
        <h1 className='text-center text-5xl font-serif font-light py-4'>Online <span className='text-[#1BB699]'>Classes</span> For Remote Learning.</h1>
        <p className='text-center text-slate-500 pt-3 font-mono'>Consectetur adipiscing elit sed do eiusmod tempor.</p>

        <div>
          <Cards />
        </div>
      </section>

      



<Link className=' py-10  flex justify-center items-center' to="/courses">
            <Button text="Browse more courses"/>
</Link>

<section className='bg-[#00262B]'>
        <Offers />
      </section>

      
      <section className='flex flex-col justify-center mt-5 items-center '>
            <img src={video_bg} alt="" className='cover h-max   ' />
            <img src={video_banner} alt=""
              className=' -mt-44  rounded-tr-[30%] z-20  w-2/3 shadow-2xl shadow-black rounded-bl-[30%] '
            />
            <div className='bg-red font-serif  mb-32 grid gap-9  text-center lg:grid-cols-4 sm:grid-cols-2 mt-32'>
              <div className=' p-5 py-10 space-y-3 bg-green-100 rounded-xl '>
                <h1 className='text-5xl  font-bold text-green-600 '>29.3k</h1>
                <p className='px-6'>STUDENT ENROLLED</p>
              </div>
              <div className=' p-5 py-10 space-y-3 bg-red-100 rounded-xl'>
                <h1 className='text-5xl  font-bold text-red-500 '>32.4K</h1>
                <p className='px-6'>CLASS COMPLETED</p>
              </div>
              <div className=' p-5 py-10 space-y-3 bg-purple-100 rounded-xl'>
                <h1 className='text-5xl  font-bold text-purple-500 '>100%</h1>
                <p className='px-6'>SATISFACTION RATE</p>
              </div>
              <div className=' p-5 py-10 space-y-3 bg-yellow-100 rounded-xl'>
                <h1 className='text-5xl  font-bold text-yellow-500 '>354+</h1>
                <p className='px-6'>TOP INSTRUCTORS</p>
              </div>
            </div>
            {/* <img src={video_bg} alt="" className=' rotate-180 cover' /> */}
      </section>
      

      <section>
        <Crousal/>
      </section>
      
    </>
  )
}

export default Home