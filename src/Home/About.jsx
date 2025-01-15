import React from 'react'

export default function about() {
  return (
    <>
    <div id="Aboutus" className='duration-300 md:pb-10 md:pt-20 lg:pt-10 text-black mx-auto md:text-center md:px-10 px-5'>
        <div className='max-w-screen-xl border-b pb-10 border-[#136690] border-opacity-30 mx-auto'>
            <div className='mx-auto pt-5'>
                <h1 className='text-left lg:text-4xl text-2xl md:pt-5 font-medium text-[#1A2B6B]'>
                    About Us
                </h1>
                <div className='max-w-screen-lg'>
                    <p className='text-left pt-5 md:text-base leading-normal text-sm text-[#6D7380]'>
                        At Blocksphere digital asset consultancy, we specialize in safeguarding your digital assets and ensuring that all blockchain-related activities are secure and compliant. Whether you are an individual seeking to protect your investments or a business in need of expert guidance, our services are tailored to meet your specific requirements.
                    </p>
                    <p className='text-left pt-5 text-sm text-[#6D7380]'>
                        Our team of experienced professionals is committed to delivering bespoke solutions that prioritize simplicity, security, and peace of mind.
                    </p>
                </div>
                <div className='flex mt-5'>
                    <a 
                    href="/services" className=" border-[#0847F7] border shadow-lg hover:bg-opacity-80 hover:f#1A2B6Bd text-[#0847F7] items-center relative h-10 text-sm duration-200 px-10 flex rounded-sm ">
                        Read more...
                    </a>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
