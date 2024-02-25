import { Spinner } from '@material-tailwind/react'
import React from 'react'
import { Outlet } from 'react-router-dom'

function StudentLayout() {
    const studenttoken=localStorage.getItem('user-token')
  return (
    <>
      {studenttoken ? <Outlet/>: <Spinner/>}
    </>
  )
}

export default StudentLayout
