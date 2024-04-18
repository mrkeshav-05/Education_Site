import React, { useEffect } from 'react'
import {Outlet} from 'react-router-dom'
import Header from './sections/Header'
import Footer from './sections/Footer'
import { auth } from './config'
import { useState } from 'react'
const Layout = () => {
  return (
    <>
      <Header/>
        <Outlet/>
      <Footer/> 
    </>
  )
}

export default Layout