import React from 'react'
import { MainLayout } from '../adminComp/MainLayout'
import { Signout } from './Signout'

export const Dashboard = () => {
  return (
    <>
    {!localStorage.getItem('token')? <Signout/>:<MainLayout/>}
    
    </>
  )
}
