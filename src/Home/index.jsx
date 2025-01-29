import React from 'react';
import Dashboard from './Dashboard'
import About from './About'
import Business from './Business'
import Header from './header'
import Footer from './Footer';
import Price from './Price';
import Subr from './Subr';
import Partner from './Exchanges'
import Team from './Team';
import Value from "./Value"
import Mission from './Mission';
import Story from './Story';
import Unique from "./Unique";

function index() {
  return (
    <>
        <Header/>
        <Dashboard/>
        <Partner/>
        <Price/>
        <Mission/>
        <Story/>
        <About/>
        <Unique/>
        <Business/>
        <Team/>
        <Value/>
        <Subr/>
        <Footer/>
        

    </>
  )
}

export default index