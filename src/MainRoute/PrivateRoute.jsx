import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'

export const PrivateRoute = ({children}) => {

  const data = useSelector((store)=>store.authReducer)
  const {isAuth} = data

  if(!isAuth){
    return <Navigate to="/login" />
  }

  return (
    <div>
        {children}
    </div>
  )
}
