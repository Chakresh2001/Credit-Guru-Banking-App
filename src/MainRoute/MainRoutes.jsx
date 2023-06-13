import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Homepage } from '../HomePage/Homepage'



export const MainRoutes = () => {
  return (
    <div>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Homepage/>} />
     </Routes>
    </div>
  )
}
