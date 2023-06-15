import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Homepage } from '../HomePage/Homepage'
import { CreditCardPage } from '../CreditCardPage/CreditCardPage'
import { styled } from "styled-components"

import { LoansPage } from '../LoansPage/LoansPage'


import { Footer } from './Footer'
import { MoneyPage } from '../Money/MoneyPage'




export const MainRoutes = () => {
  return (
    <div>

    <Navbar/>
     <Routes>
      <Route path='/' element={<Homepage/>} />

      <Route path="/loans" element={<LoansPage/>} />

      <Route path='/money' element={<MoneyPage/>}/>

      <Route path="/login" element={<LoginSignupPage/>}/>

     </Routes>
     <Footer/>

    </div>
  )
}

