import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './sections/Home.jsx'
import Contact from './sections/Contact.jsx'
import About from './sections/About.jsx'
import Login from './sections/Login.jsx'
import Courses from './sections/Courses.jsx'
import Signup from './sections/Signup.jsx'
import App from './App.jsx'




// const router = createBrowserRouter(
//   createRoutesFromElements(
    
//     <Route path='/' element={<Layout />}>
//       <Route path='' element={<Home />} />
//       <Route path='about' element={<About />} />
//       <Route path='contact' element={<Contact />} />
//       <Route path='login' element={<Login/>} />
//       <Route path='login/signup' element={<Signup/>} />
//       {/* <Route path='login/:id' element={<Signup/>} /> */}
//       <Route path='courses' element={<Courses />} />
//     </Route>
//   )
// )

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>,
  <React.StrictMode>
    <App/>
  </React.StrictMode>,

)
