import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useLocation } from 'react-router-dom'

export const PrivateRoute = ({children}) => {

  const data = useSelector((store)=>store.authReducer)
  
  let location = useLocation()
  const {isAuth} = data

  if(!isAuth){
    return <Navigate to="/login" state={location.pathname} replace={true} />
  }

  return (
    <div>
        {children}
    </div>
  )
}
