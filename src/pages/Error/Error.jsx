import React from 'react';
import error from "../../assets/error-404.png"

const Error = () => {
    return (
        <div className='items-center justify-center'>
            <img className='items-center justify-center ' src={error} alt="" />
            <h1 className='font-bold text-4xl'>Oops, page not found!</h1>
            <p className='mt-3 text-gray-400'>The page you are looking for is not available.</p>
            <a className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] mt-3">Go Back!</a>
        </div>
    );
};

export default Error;