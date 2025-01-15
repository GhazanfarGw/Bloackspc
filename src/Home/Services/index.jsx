import React from 'react'
import Dashboard from './Dashboard'
import Price from '../Price';
import About from './About'
import Luxury from './Luxury';
import Estate from './Estate';
import Partner from './Partner'
import Header from '../header'
import Footer from '../Footer'

export default function index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <Price/>
    <Partner/>
    <About/>
    <Luxury/>
    <Estate/>
    <Footer/>
    </>
  )
}
