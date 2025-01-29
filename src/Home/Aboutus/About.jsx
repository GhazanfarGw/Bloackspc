import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';
import Header from "../header"
import Footer from '../Footer'

function About() {
    useEffect (() => {
    Aos.init ();
    }, [])

  return (
    <>
    <Header/>
    <div className='duration-300 md:pb-10 md:py-40 py-20 lg:py-40 text-black mx-auto md:text-center md:px-10 px-5 bg-[#F0F5FF]'>
        <div className='max-w-screen-xl mx-auto'>
            <div className='mx-auto pt-5'>
                <div className="mx-auto justify-center text-center">
                    <div className='max-w-screen-md justify-center mx-auto'>
                        <div className="justify-center mx-auto hidden md:block lg:block" data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                            <img className="justify-center mx-auto text-center w-96" src="/Circle.png" alt="" />
                        </div>
                        <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='lg:text-4xl text-2xl md:pt-5 font-medium text-[#1A2B6B]'>
                            Your trusted partner in blockchain security
                        </h1>
                        <div className="justify-center mx-auto block md:hidden lg:hidden" data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                            <img className="justify-center mx-auto text-center w-96" src="/Circle.png" alt="" />
                        </div>
                        <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className="text-[#6D7380] pt-3">
                            The foundation of every relationship is trust.
                        </p>
                        <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='pt-5 md:text-base leading-normal text-sm text-[#6D7380]'>
                            At Blocksphere digital asset consultancy, we specialize in safeguarding your digital assets and ensuring that all blockchain-related activities are secure and compliant. Whether you are an individual seeking to protect your investments or a business in need of expert guidance, our services are tailored to meet your specific requirements.
                        </p>
                        <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='pt-5 text-sm text-[#6D7380]'>
                            Our team of experienced professionals is committed to delivering bespoke solutions that prioritize simplicity, security, and peace of mind.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
    </>

  )
}

export default About 

