import React from 'react';
import Dashboard from './Dashboard'
import About from './About'
import Business from './Business'
import Header from './header'
import Footer from './Footer';
import Subr from './Subr';
import Partner from './Partner'
import Team from './Team';

function index() {
  return (
    <>
        <Header/>
        <Dashboard/>
        <Partner/>
        <About/>
        <Business/>
        <Team/>
        <Subr/>
        <Footer/>
        

    </>
  )
}

export default index