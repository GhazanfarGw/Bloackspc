import React from 'react'
import Dashboard from './Dashboard';
import About from './About'
import Story from '../Story';
import Mission from '../Mission';
import Unique from '../Unique';
import Team from '../Team';
import Partner from "./Partner"
import Header from "../header";
import Footer from "../Footer";

function Index() {
  return (
    <>
    <Header/>
    <Dashboard/>
    <Partner/>
    <Mission/>
    <Story/>
    <Unique/>
    <Team/>
    <Footer/>
    </>
  )
}

export default Index