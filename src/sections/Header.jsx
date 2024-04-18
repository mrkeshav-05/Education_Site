import React, { useState, useEffect } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { IoSearchOutline } from 'react-icons/io5'
import Button from '../components/Button';
import { getAuth, signOut } from 'firebase/auth';
import { FiAlignRight } from "react-icons/fi";


const Header = (props) => {

  // console.log(props)

  // sign Out
  const navigate = useNavigate();
  const auth = getAuth();
  const handleLogout = (e) => {
    console.log("aaya")
    // console.log('Signout')
    signOut(auth).then(() => {
      // console.log('Signout')
      navigate('/')

    }).catch((err) => {
      console.log(err)
    })
  }


  return (
    <>
      <main className=''>
        <nav className='flex  justify-between px-10 py-3 border shadow-xl items-center '>
          <h1 className='text-2xl '>
            <Link to="">

              <span className='font-bold font-serif'>Edu</span>
              <span className=' font-sans font-thin'>Web</span>
            </Link>
          </h1>
          <ul className='flex gap-10 font-semibold invisible lg:visible absolute md:relative  font-mono text-slate-700  items-center justify-center'>
            <li className='hover:text-[#1BB699]'>
              <NavLink to="">Home</NavLink>
            </li>
            <li className='hover:text-[#1BB699]'>
              <NavLink to="about">About</NavLink>
            </li>
            <li className='hover:text-[#1BB699]'>
              <NavLink to={props.name ? `/courses` : `/login`}>Courses</NavLink>
            </li>
            <li className='hover:text-[#1BB699]'>
              <NavLink to="contact">Contact</NavLink>
            </li>
          </ul>
          <div className='flex items-center  justify-center '>
            <Link className="rounded-md text-2xl p-2 mr-8" to=".">
              <IoSearchOutline className='hover:text-[#1BB699] '  />
            </Link>
            <div className=''>
            {
              props.name ? (
                <>
                  <Link onClick={handleLogout}>
                    <Button text="Logout" />
                  </Link>

                </>

              ) : (
                <>
                  <Link to="login" className=''>
                    <Button text="Login" />
                  </Link>
                </>

              )
            }
            </div>
            <div className='text-2xl visible lg:absolute flex justify-center items-center lg:invisible pl-7   '
            >
              <FiAlignRight  />
            </div>

          </div>

        </nav>
      </main>

    </>
  )
}

export default Header