import React from 'react'
import { cardData } from './data'
import Button from './Button'
const Cards = () => {
  return (
    <>
      <section>
        <div className='grid sm:grid-cols-2 grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-8 px-4 py-8  text-center overflow-hidden '>
          {cardData.map((card) => {
            return (
              <div key={card.id} className={` shadow-xl rounded-lg border bg-white hover:scale-105 transition-transform scroll-smooth`}>
                <div className='p-2 flex  justify-center'>
                  <img src={card.img} alt="" width={50} height={50} className='p-2 object-center pt-7' />
                </div>
                <div className='p-4'>
                  <h3 className='text-xl  px-4 py-4 font-thin'>{card.title}</h3>
                  <p className='px-2 py-2 text-gray-700'>{card.desc}</p>
                  <button className='bg-[#1BB699] text-white px-4 py-2  mt-2 rounded-md mb-4'>Explore</button>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Cards