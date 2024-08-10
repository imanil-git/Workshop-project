import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Contact from '../pages/Contact'
import Service from '../pages/Service'
import About from '../pages/About'

const NWRapper = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service' element={<Service />} />
        <Route path='/aboutus' element={<About />} />
    </Routes>
    </>
  )
}

export default NWRapper