import React from 'react';
import Email from './Email';

const Discover = () => {
    return (
        <>
            <div className='items-center overflow-hidden mx-auto bg-[#F0F5FF]'>
                <div className='md:px-10 px-5 justify-center text-center md:py-32 py-5'>
                    <div className='mx-auto overflow-hidden text-[#1A2B6B]'>
                        <h1 className='md:text-5xl py-2 text-xl font-light'>
                            Subscribe Our Newsletter
                        </h1>
                        <div className='max-w-xs justify-center text-center mx-auto overflow-hidden pt-5'>
                            <div className='fourth text-[#1A2B6B]'>
                                <Email/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Discover;