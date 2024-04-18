import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './sections/Home'
import About from './sections/About'
import Login from './sections/Login'
import Contact from './sections/Contact'
import Signup from './sections/Signup'
import Courses from './sections/Courses'
import Header from './sections/Header'
import Footer from './sections/Footer'
import { useEffect } from 'react'
import { auth } from './config'
import { course } from './components/data'
import ParticulerCourse from './components/ParticulerCourse'



function App() {
  const [userName, setUserName] = useState("")

  useEffect(()=>(
    auth.onAuthStateChanged((user) => {
      if(user){
        setUserName(user.displayName)
      }else{
        setUserName("")
      }
      console.log(user)
    })
  ), [])




  

  return (
    <BrowserRouter>
    <Header name={userName} />
      <Routes>

          <Route path='/' element={<Home name={userName}  />} />
          <Route path='/about' element={<About name={userName} />} />
          <Route path='/contact' element={<Contact name={userName} />} />
          <Route path='/login' element={<Login name={userName} />} />
          <Route path='/login/signup' element={<Signup name={userName} />} />
          <Route path='/courses' element={<Courses name={userName} />} />
          {
            course.map((item, index) => {
              return (
                <Route key={index} path={`/course/${item.id}`} element={<ParticulerCourse item={item}  />} />
              )
            })
          }

      </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
