import React from 'react';

const Dashboard = () => {
    return (
        <>
            <div className='duration-500 justify-center mx-auto'>
                <div className='md:h-60 pt-24'>
                    <img className='duration-500 object-cover md:h-[40rem] px-3 md:px-0' src='6616e1a5b915bf850304f2a1_tokenization-hero-p-2000.png' alt='images'/>
                </div>
                <div className='max-w-screen-xl mx-auto md:px-10 px-5'>
                    <div className='md:py-16 md:pt-0 pt-10'>
                        <div className=''>
                            <h1 className='second xl:text-5xl lg:text-5xl text-3xl md:text-5xl items-center duration-300 text-[#1A2B6B] font-medium'>
                                Transforming digital potential <br className='hidden md:block lg:block'/> into real value
                            </h1>
                            <p className='third md:pt-5 pt-3 text-[#3D4556] max-w-screen-sm md:text-lg leading-normal'>
                                From tailored blockchain strategies to hassle-free cryptocurrency conversion, we guide your journey with innovation and trust. Secure, optimize, and convert your digital assets with expert precision.
                            </p>
                            <div className='pt-10'> 
                                <a href='/contact-us' className="bg-[#0847F7] w-48 justify-center shadow-lg hover:bg-opacity-80 text-[#fff] items-center relative h-14 text-sm duration-200 px-10 flex rounded-sm">
                                    Talk to an expert
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;