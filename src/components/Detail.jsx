import React from 'react'
import { brain } from '../assets/images'

const Detail = () => {
  return (
    <section className='flex justify-between items-center mx-10 p-10 py-20 font-serif '>
      <div className='space-y-5'>
        <h1 className='text-5xl font-serif font-bold'>Learn and Grow</h1>
        <p className='text-lg text-slate-600 font-serif '>
          Your edX learning experience is grounded in cutting edge cognitive science. With more than two dozen distinct learning features to help you achieve your goals, our approach follows three key principles:
        </p>
        <h2 className='text-2xl font-bold '>Experience</h2>
        <p className='text-slate-600 text-lg'>
        Learn new knowledge and skills in a variety of ways, from engaging video lectures and dynamic graphics to data visualizations and interactive elements.
        </p>
        <h2 className='text-2xl font-bold '>Practice</h2>
        <p className='text-slate-600 text-lg'>
        Demonstrating your knowledge is a critical part of learning. edX courses and programs provide a space to practice with quizzes, open response assessments, virtual environments, and more.
        </p>
        <h2 className='text-2xl font-bold '>Apply</h2>
        <p className=' text-slate-600  text-lg'>
        Learning on edX transforms how you think and what you can do, and translates directly into the real world—immediately apply your new capabilities in the context of your job.
        </p>
      </div>
      <div>
        <img src={brain} alt="" 
        width={1500}
        />
      </div>
    </section>
  )
}

export default Detail