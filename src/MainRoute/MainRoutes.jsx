import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Homepage } from '../HomePage/Homepage'
import { CreditCardPage } from '../CreditCardPage/CreditCardPage'



export const MainRoutes = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path="/credit-cards" element={<CreditCardPage />} />
      </Routes>
    </div>
  )
}
