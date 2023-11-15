import React from 'react'
import Header from './component/Header/Header.jsx'
import Footer from './component/footer/footer.jsx'
import { Outlet } from 'react-router-dom'

function layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default layout