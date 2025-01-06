import { Transition } from '@headlessui/react'
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header">
      <Logo isScrolled={isScrolled} />
      {/* Add your navigation items here */}
    </div>
  );
}

function Logo({ isScrolled }) {
  const [open, setOpen] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {isScrolled ? (
            <header onClick={handleScrollToTop} className="fixed z-10 md:px-10 px-3 w-full duration-500 mx-auto items-center bg-[#ffffff] md:py-2 border-b border-opacity-30">
              <div className="mx-auto items-center duration-500">
                <div className="flex items-center">
                  <div className="flex items-center max-w-screen-xl justify-between mx-auto w-full">
                    <div className="z-20 flex-shrink-0 md:py-2 py-3 items-center duration-500">
                      <a href="/">
                        <img width={90} className='hidden md:block lg:block items-center duration-500 w-40' src='./Desktop-Black Logo.png' alt='favicon.png'/>
                        <img width={80} className='block md:hidden lg:hidden items-center duration-500 w-36' src='./Desktop-Black Logo.png' alt='favicon.png'/>
                      </a>
                    </div>
                    <div className="z-20 text-3xl md:hidden p#1A2B6B3 text-[#000]" onClick={() => setOpen(!open)}>
                      <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
                    </div>
                    <ul className="md:flex hidden items-center w-full justify-end mx-auto">
                      <li>
                        <a href='/' className="items-center text-sm tracking-wider relative h-8 pt-0.5 duration-200 px-4 flex justify-center flex-row hover:text-[#1A2B6B] text-[#000]">
                          Home
                        </a>
                      </li>
                      <li>
                          <a href="#Aboutus" className="items-center text-sm tracking-wider relative h-8 pt-0.5 duration-200 px-4 flex justify-center flex-row hover:text-[#1A2B6B] text-[#000]">
                            About Us
                          </a>
                      </li>
                      <li>
                          <a href="#services" className="items-center text-sm tracking-wider relative h-8 pt-0.5 duration-200 px-4 flex justify-center flex-row hover:text-[#1A2B6B] text-[#000]">
                            Our Services
                          </a>
                      </li>
                      <li>
                          <a href="#Blocksphere" className="items-center text-sm tracking-wider relative h-8 pt-0.5 duration-200 px-4 flex justify-center flex-row hover:text-[#1A2B6B] text-[#000]">
                            Why Blocksphere
                          </a>
                      </li>
                      <div className='flex'>
                        <a 
                          href="/contact-us" className=" border-[#0847F7] border shadow-lg hover:bg-opacity-80 hover:f#1A2B6Bd text-[#0847F7] items-center relative h-10 text-sm duration-200 px-10 flex rounded-sm ">
                          Contact Us
                        </a>
                      </div>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Mobile nav */}
              <ul className={`md:hidden bg-[#fff] fixed w-full top-0 overflow-y-auto bottom-0 py-20 duration-500 ${open ? "left-0" : "left-[-100%]"}
                `}
              >
                <li>
                  <Link to="/" className="tracking-wider border-b border-opacity-30 px-8 py-3 flex flex-row items-center duration-200 hover:text-[#1A2B6B] text-[#000] border-[#403f68] text-sm leading-normal">
                    Home
                  </Link>
                  <div className='border-b border-[#fff] border-opacity-30 mx-3'/>
                </li>
                <li>
                  <a href='#Aboutus' className="tracking-wider border-b border-opacity-30 px-8 py-3 flex flex-row items-center duration-200 hover:text-[#1A2B6B] text-[#000] border-[#403f68] text-sm leading-normal">
                    About Us
                  </a>
                  <div className='border-b border-[#fff] border-opacity-30 mx-3'/>
                </li>
                <li>
                  <a href="#services" className="tracking-wider border-b border-opacity-30 px-8 py-3 flex flex-row items-center duration-200 hover:text-[#1A2B6B] text-[#000] border-[#403f68] text-sm leading-normal">
                    Our Services
                  </a>
                  <div className='border-b border-[#fff] border-opacity-30 mx-3'/>
                </li>
                <li>
                  <a href='#Blocksphere' className="tracking-wider border-b border-opacity-30 px-8 py-3 flex flex-row items-center duration-200 hover:text-[#1A2B6B] text-[#000] border-[#403f68] text-sm leading-normal">
                    Why Blocksphere
                  </a>
                  <div className='border-b border-[#fff] border-opacity-30 mx-3'/>
                </li>
                <p className='text-sm px-8 text-[#000000] pt-8'>
                  Block Sphere offers to onvert your cryptocurrency into cash, having a trusted partner is essential to ensure a smooth, secure, and efficient process.
                </p>
                <li className='pt-10'> 
                  <a href='/contact-us' className="border-[#0847F7] border w-80 justify-center mx-auto shadow-lg hover:bg-opacity-80 hover:f#1A2B6Bd text-[#0847F7] items-center relative h-10 text-sm duration-200 px-10 flex rounded-sm">
                    Contact Us
                  </a>
                </li>
              </ul>
            </header>
      ) : (
        <header className="fixed z-10 md:px-10 px-3 w-full duration-500 mx-auto items-center md:pb-2 bg-white border-b border border-opacity-30">
      <div className="mx-auto items-center duration-500 md:pt-8">
        <div className="flex items-center">
          <div className="flex items-center max-w-screen-xl justify-between mx-auto w-full">
            <div className="z-30 flex-shrink-0 items-center duration-500 pb-2 md:py-0 py-3">
              <a href="/">
                <img width={120} className='hidden md:block lg:block items-center duration-500 w-48' src='./Desktop-Black Logo.png' alt='favicon.png'/>
                <img width={90} className='block md:hidden lg:hidden items-center duration-500 w-40' src='./Desktop-Black Logo.png' alt='favicon.png'/>
              </a>
            </div>
            <div className="z-20 text-3xl md:hidden p#1A2B6B3 text-[#000]" onClick={() => setOpen(!open)}>
              <ion-icon className="" name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
            <ul className="md:flex hidden items-center w-full justify-end mx-auto">
              <li>
                <Link to="/" className="items-center text-sm tracking-wider relative h-8 pt-0.5 duration-200 px-4 flex justify-center flex-row hover:text-[#1A2B6B] text-[#000]">
                  Home
                </Link>
              </li>
              <li>
                <a href='#Aboutus' className="items-center text-sm tracking-wider relative h-8 pt-0.5 duration-200 px-4 flex justify-center flex-row hover:text-[#1A2B6B] text-[#000]">
                  About Us
                </a>
              </li>
              <li>
                <a href='#services' className="items-center text-sm tracking-wider relative h-8 pt-0.5 duration-200 px-4 flex justify-center flex-row hover:text-[#1A2B6B] text-[#000]">
                  Our Services
                </a>
              </li>
              <li>
                <a href='#Blocksphere' className="items-center text-sm tracking-wider relative h-8 pt-0.5 duration-200 px-4 flex justify-center flex-row hover:text-[#1A2B6B] text-[#000]">
                  Why Blocksphere
                </a>
              </li>
              <div className='flex'>
                <a 
                  href="/contact-us" className=" border-[#0847F7] border shadow-lg hover:bg-opacity-80 hover:f#1A2B6Bd text-[#0847F7] items-center relative h-10 text-sm duration-200 px-10 flex rounded-sm ">
                  Contact Us
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
      {/* Mobile nav */}
      <ul className={`md:hidden bg-[#fff] fixed w-full top-0 overflow-y-auto bottom-0 py-20 duration-500 ${open ? "left-0" : "left-[-100%]"}`}
        >
          <li>
            <Link to="/" className="tracking-wider border-b border-opacity-30 px-8 py-3 flex flex-row items-center duration-200 hover:text-[#1A2B6B] text-[#000] border-[#403f68] text-sm leading-normal">
              Home
            </Link>
            <div className='border-b border-[#fff] border-opacity-30 mx-3'/>
          </li>
          <li>
            <a href='#Aboutus' className="tracking-wider border-b border-opacity-30 px-8 py-3 flex flex-row items-center duration-200 hover:text-[#1A2B6B] text-[#000] border-[#403f68] text-sm leading-normal">
              About Us
            </a>
            <div className='border-b border-[#fff] border-opacity-30 mx-3'/>
          </li>
          <li>
            <a href="#services" className="tracking-wider border-b border-opacity-30 px-8 py-3 flex flex-row items-center duration-200 hover:text-[#1A2B6B] text-[#000] border-[#403f68] text-sm leading-normal">
              Our Services
            </a>
            <div className='border-b border-[#fff] border-opacity-30 mx-3'/>
          </li>
          <li>
            <a href='#Blocksphere' className="tracking-wider border-b border-opacity-30 px-8 py-3 flex flex-row items-center duration-200 hover:text-[#1A2B6B] text-[#000] border-[#403f68] text-sm leading-normal">
              Why Blocksphere
            </a>
            <div className='border-b border-[#fff] border-opacity-30 mx-3'/>
          </li>
          <p className='text-sm px-8 text-[#000000] pt-8'>
            Block Sphere offers to onvert your cryptocurrency into cash, having a trusted partner is essential to ensure a smooth, secure, and efficient process.
          </p>
          <li className='pt-10'> 
              <a href='/contact-us' className="border-[#0847F7] border w-80 justify-center mx-auto shadow-lg hover:bg-opacity-80 hover:f#1A2B6Bd text-[#0847F7] items-center relative h-10 text-sm duration-200 px-10 flex rounded-sm">
                Contact Us
              </a>
            </li>
        </ul>
      </header>
      )}
    </>
  )};
export default Navbar;
