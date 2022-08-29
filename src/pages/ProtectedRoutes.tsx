import React, { FC } from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from '../app/hooks'
import { selectAccessToken } from '../redux/appState/appStateSlice'

const ProtectedRoutes: FC = () => {
  const token = useSelector(selectAccessToken)
  return (
    token ? <Outlet /> : <Navigate to="/auth"/>
  )
}

export default ProtectedRoutes