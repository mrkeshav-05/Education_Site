import React from 'react'
import { FaSquareWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className='bg-[#00262B] text-white text-center py-10'>
        <p>&copy; 2021 Swyam. All Rights Reserved.</p>
        <FaSquareWhatsapp className='text-4xl text-green-700 bg-white'/>
      </footer>
    </>
  )
}

export default Footer