import React from 'react'
import { Outlet } from 'react-router-dom'

function OwnerLayout() {
    const ownertoken=localStorage.getItem('owner-token')
  return (
    <>
      {ownertoken ? <Outlet/>: 'login chey ra'}
    </>
  )
}

export default OwnerLayout
