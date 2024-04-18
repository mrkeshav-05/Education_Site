import React from 'react'
import { crousal1, crousal2, crousal3, crousal4 } from '../assets/images'
import { useState } from 'react'
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
const Crousal = () => {

  const slides = [
    {
      url: crousal1
    },
    {
      url: crousal2
    },
    {
      url: crousal3
    },
    {
      url: crousal4
    }
    
  ]

  const [currentIdx, setCurrentIdx] = useState(1)

  const prevSlide = () => {
    const isFirstSlide = currentIdx === 0;
    const newIdx = isFirstSlide ? slides.length - 1 : currentIdx - 1;
    setCurrentIdx(newIdx);
  }

  const nextSlide = () => {
    const isLastSlide = currentIdx === slides.length - 1;
    const newIdx = isLastSlide ? 0 : currentIdx + 1;
    setCurrentIdx(newIdx);
  }

  return (
    <div className='w-[850px] h-[500px] m-auto py-16 px-4 relative  group'>
      <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
        style={{
          backgroundImage: `url(${slides[currentIdx].url})`
        }}
      ></div>
      {/* left arrow */}
      <div className=' hidden  group-hover:block absolute top-[45%] -translate-x-0 translate-y-[0%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <FaAngleLeft size={30}
          onClick={prevSlide}
          
        />
      </div>

      {/* right arrow */}
      <div className=' hidden  group-hover:block absolute top-[45%] -translate-x-0 translate-y-[0%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
        <FaAngleRight size={30}
          onClick={nextSlide}
        />
      </div>
    </div>
  )
}

export default Crousal