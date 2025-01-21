import React,{useEffect} from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

function Team() {
    useEffect (() => {
        Aos.init ();
    }, [])
  return (
    <>
    <div className='justify-center mx-auto bg-[#F0F5FF]'>
        <div className='mx-auto justify-center md:px-10 px-5 max-w-screen-xl py-10 md:py-16'>
            <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                <h1 className='lg:text-4xl text-2xl md:pt-5 pt-3 font-medium mx-auto text-[#1A2B6B]'>
                    Meet Our Expert Team
                </h1>
                <p className='third text-[#6D7380] md:text-base text-sm justify-center pt-5 leading-normal max-w-screen-lg'>
                    At Block Sphere, our team is the backbone of our success. With a diverse group of professionals specializing in blockchain security, compliance, and digital asset management, we bring years of experience and innovation to the table.
                </p>
            </div>
            <div className='md:pt-10 pt-5'>
                <h2 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='mx-auto text-[#1A2B6B] font-semibold text-base'>
                    Our Team’s Core Strengths
                </h2>
                <div className="hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait">
                    <div className='flex gap-2 items-center pt-5'>
                        <div className='bg-[#1A2B6B] w-2 h-2 rounded-full'/>
                        <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                            <h2 className='text-base md:font-medium text-[#1A2B6B]'>
                                Blockchain Specialists:
                            </h2>
                        </div>
                    </div>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#6D7380] text-sm leading-normal pl-4'>
                        Experts in safeguarding and optimizing digital assets.
                    </p>
                </div>
                <div className="hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait">
                    <div className='flex gap-2 items-center pt-3'>
                        <div className='bg-[#1A2B6B] w-2 h-2 rounded-full'/>
                        <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                            <h2 className='text-base md:font-medium text-[#1A2B6B]'>
                                Cybersecurity Professionals:
                            </h2>
                        </div>
                    </div>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#6D7380] text-sm leading-normal pl-4'>
                        Dedicated to creating robust, multi-layered protection strategies for your assets.
                    </p>
                </div>
                <div className="hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait">
                    <div className='flex gap-2 items-center pt-3'>
                        <div className='bg-[#1A2B6B] w-2 h-2 rounded-full'/>
                        <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                            <h2 className='text-base md:font-medium text-[#1A2B6B]'>
                                Compliance Experts:
                            </h2>
                        </div>
                    </div>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#6D7380] text-sm leading-normal pl-4'>
                        Ensuring your blockchain activities align with global regulations.
                    </p>
                </div>
                <div className="hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait">
                    <div className='flex gap-2 items-center  pt-3'>
                        <div className='bg-[#1A2B6B] w-2 h-2 rounded-full'/>
                        <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400">
                            <h2 className='text-base md:font-medium text-[#1A2B6B]'>
                                Cold Storage Engineers:
                            </h2>
                        </div>
                    </div>
                    <p data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#6D7380] text-sm leading-normal pl-4'>
                        Skilled in designing offline storage solutions to keep your crypto holdings secure.
                    </p>
                </div>
            </div>
            <div className='md:py-16 py-8'>
                <h1 data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='text-[#1A2B6B] text-lg font-semibold'>
                    Key Members
                </h1>   
                <div className='xl:grid xl:grid-cols-4 lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 md:gap-5 gap-3'>
                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='border px-5 py-5 md:py-10 md:px-5 md:mt-10 border-opacity-30 mt-5 bg-white hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait'>
                        <h1 className='text-base font-semibold lg:pt-5 pt-3 text-[#1A2B6B]'>
                            John Davis
                        </h1>
                        <p className='text-sm text-[#1A2B6B]'>
                            Chief Blockchain Consultant
                        </p>
                        <p className='pt-3 text-[#6D7380] text-sm leading-normal'>
                            John is a blockchain technology pioneer with 10+ years of experience helping businesses optimize their digital asset strategies.
                        </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='border px-5 py-5 md:py-10 md:px-5 md:mt-10 border-opacity-30 mt-5 bg-white hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait'>
                        <h1 className='text-base font-semibold lg:pt-5 pt-3 text-[#1A2B6B]'>
                            Sophia Lee
                        </h1>
                        <p className='text-sm text-[#1A2B6B]'>
                            Lead Cybersecurity Analyst
                        </p>
                        <p className='pt-3 text-[#6D7380] text-sm leading-normal'>
                            Sophia specializes in advanced threat detection and prevention, ensuring clients’ portfolios remain protected against evolving cyber risks.
                        </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='border px-5 py-5 md:py-10 md:px-5 md:mt-10 border-opacity-30 mt-5 bg-white hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait'>
                        <h1 className='text-base font-semibold lg:pt-5 pt-3 text-[#1A2B6B]'>
                            Michael Carter
                        </h1>
                        <p className='text-sm text-[#1A2B6B]'>
                            Cold Storage Specialist
                        </p>
                        <p className='pt-3 text-[#6D7380] text-sm leading-normal'>
                            Michael is an expert in creating custom offline storage solutions, safeguarding high-value crypto holdings from online threats.
                        </p>
                    </div>
                    <div data-aos="zoom-in-up" data-aos-delay="300" data-aos-duration="400" className='border px-5 py-5 md:py-10 md:px-5 md:mt-10 border-opacity-30 mt-5 bg-white hover:scale-105 duration-200 hover:bg-[#F0F5FF] hover:cursor-wait'>
                        <h1 className='text-base font-semibold lg:pt-5 pt-3 text-[#1A2B6B]'>
                            Emma Patel
                        </h1>
                        <p className='text-sm text-[#1A2B6B]'>
                            Compliance Advisor
                        </p>
                        <p className='pt-3 text-[#6D7380] text-sm leading-normal'>
                            Emma’s in-depth knowledge of blockchain regulations helps businesses navigate compliance with confidence.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Team
