import React from 'react'
import Partner from './Partner'

export default function about() {
  return (
    <>
    <div id="Aboutus" className='duration-300 md:pb-10 md:pt-20 lg:pt-20 pt-10 text-black mx-auto md:text-center md:px-10 px-5'>
        <div className='md max-w-screen-xl border-b pb-10 border-[#136690] border-opacity-30 mx-auto md:grid md:grid-cols-2'>
            <div className='md:max-w-md w-full mx-auto block md:hidden lg:hidden'>
                <img src="coins.jpg" alt="coins" />
            </div>
            <div className='mx-auto pt-5'>
                <h1 className='text-left lg:text-4xl text-3xl justify-center pt-3 font-bold'>
                    About Us
                </h1>
                <p className='text-left pt-5 text-base text-[#6D7380]'>
                    At Blocksphere digital asset consultancy, we specialize in safeguarding your digital assets and ensuring that all blockchain-related activities are secure and compliant. Whether you are an individual seeking to protect your investments or a business in need of expert guidance, our services are tailored to meet your specific requirements.
                </p>
                <p className='text-left pt-5 text-sm text-[#6D7380]'>
                    Our team of experienced professionals is committed to delivering bespoke solutions that prioritize simplicity, security, and peace of mind.
                </p>
            </div>
            <div className='max-w-md mx-auto hidden lg:block md:block'>
                <img src="67225484d0882fc75bd3804a_image-1.webp" alt="coins" />
            </div>
        </div>
        <Partner/>
    </div>
    </>
  )
}
