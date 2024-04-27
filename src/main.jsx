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

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>,

)
