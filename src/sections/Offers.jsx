import React from 'react'
import { offer1 } from '../assets/images'

const Offers = () => {
  return (
    <section className='bg-[#00262B] text-white flex items-center justify-center'>
      <div className='p-20'>
        <h1 className='text-6xl  font-light font-serif  '>New season. Same career ambition.</h1>
        <h3 className='font-serif text-xl mt-3'>Lean into your fresh start — with up to 30% off select courses and programs. Use code EDXSPRING24.</h3>
        <button className='border p-2 mt-3 hover:bg-white hover:text-black font-serif font-extralight'>
          Add fresh skills to your resume
        </button>
      </div>
      <div>
        <img src={offer1} alt="" 
        className=' pr-20 w-auto'
        />
      </div>
    </section>
  )
}

export default Offers