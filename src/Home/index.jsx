import React from 'react';
import Dashboard from './Dashboard'
import About from './About'
import Business from './Business'
import Header from './header'
import Footer from './Footer';
import Subr from './Subr';
import Partner from './Exchanges'
import Team from './Team';
import Price from './Price';

function index() {
  return (
    <>
        <Header/>
        <Dashboard/>
        <Price/>
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