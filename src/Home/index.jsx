import React from 'react';
import Dashboard from './Dashboard'
import Service from "./Service"
import About from './About'
import Business from './Business'
import Header from './header'
import Footer from './Footer';
import Subr from './Subr';

function index() {
  return (
    <>
        <Header/>
        <Dashboard/>
        <About/>
        <Service/>
        <Business/>
        <Subr/>
        <Footer/>
        

    </>
  )
}

export default index