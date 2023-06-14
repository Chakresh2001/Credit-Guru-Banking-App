import React from 'react'
import { Routes,Route } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Homepage } from '../HomePage/Homepage'
import { LoansPage } from '../LoansPage/LoansPage'



export const MainRoutes = () => {
  return (
    <div>
    <Navbar/>
     <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path="/loans" element={<LoansPage/>} />
     </Routes>
    </div>
  )
}
