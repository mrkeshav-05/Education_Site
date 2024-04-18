import React from 'react'
import { course } from './data'
import { Link } from 'react-router-dom'
// import { useHistory } from 'react-router-dom'
const Course = () => {


  const particulerCourse = (course) => {
    console.log(course)
  }

  return (
    <>
      <section>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mx-10 md:grid-cols-3 '>
          {
            // Code goes here
            course.map((course) => {
              return (
                <Link 
                  key={course.id}
                  to={`/course/${course.id}`}
                >
                <div className='border bg-white rounded-xl shadow-lg hover:cursor-pointer hover:scale-105 transition-transform ' key={course.id}
                  // onClick={(course)=> particulerCourse(course)}
                >
                  <div className='flex flex-col items-center justify-center gap-4 p-4 overflow-hidden  '>
                    <img src={course.img} alt="" className='rounded-lg cover-full hover:scale-110 transition-transform'  />
                    <div className='space-y-4'>
                      <div className='block  text-left text-sm w-min px-1 py-1 text-[#1BB699] my-2 ml-4 bg-[#1bb69a2d] rounded'>{course.level}</div>
                      <h1 className='text-xl text-left px-4 font-serif'>{course.title}</h1>
                      <p className='text-gray-500'>{course.desc}</p>
                      <div className='text-left pl-4 font-serif'>⭐⭐⭐⭐⭐ {" "} ({course.rating} / 5 Rating)</div>
                      <div className='text-left pl-4 text-red-600 font-serif pb-8'>${course.price}.00</div>
                    </div>
                  
                  </div>
                </div>
                </Link>
                

              )
            })
          }
        </div>
      </section>
    </>
  )
}

export default Course