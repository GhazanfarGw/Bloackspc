import React from 'react'
import Dashboard from './Dashboard'
import About from './About'
import Partner from './Partner'
import Header from '../header'
import Footer from '../Footer'

export default function index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <Partner/>
    <About/>
    <Footer/>
    </>
  )
}
