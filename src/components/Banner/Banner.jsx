import React from 'react';
import banner from "../../assets/hero.png"

const Banner = () => {
    return (
        <div>
            <div>
                <h1 className='font-bold text-7xl text-center mt-20'>We Build <br /> <span className='text-purple-600'>Productive</span> Apps</h1>
            <p className='text-gray-600 text-center mt-5'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='mt-10 items-center justify-center mx-auto ml-130'>
                <a className='border-gray-400 btn mr-10 ' href="https://play.google.com/store/apps?hl=en"><button>Google Play</button></a>
                <a className='border-gray-400 btn' href="https://www.apple.com/app-store/"><button>Apple Play</button></a>

            </div>

            <div className='mt-10 items-center justify-center ml-52'>
                <img src={banner} alt="" />
            </div>
            </div>
            <div className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] p-20'>
                <h1 className='text-white text-3xl text-center'>Trusted by Millions, Built for You</h1>
                <div className='flex justify-around mt-5'>
                    <div>
                        <p className='text-gray-400'>Total Downloads</p>
                        <h1 className='mt-5 font-bold text-5xl text-white'>29.6M</h1>
                        <p className='text-gray-400'>21% more than last month</p>
                    </div>
                    <div>
                        <p className='text-gray-400'>Total Reviews</p>
                        <h1 className='mt-5 font-bold text-5xl text-white'>906K</h1>
                        <p className='text-gray-400'>46% more than last month</p>
                    </div>
                    <div>
                        <p className='text-gray-400'>Active</p>
                        <h1 className='mt-5 font-bold text-5xl text-white'>132+</h1>
                        <p className='text-gray-400'>31 more will Launch</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;