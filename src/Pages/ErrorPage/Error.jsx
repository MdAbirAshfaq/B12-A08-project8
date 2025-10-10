import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Link } from 'react-router';
import Home from '../Home/Home';
import "./ErrorPage.css"

const Error = () => {
    return (
        <div>
            <Navbar></Navbar>
            <img className='w-[800px] m-auto error-img h-[520px]' src="/src/assets/404-error.jpg" alt="" />
            <div className=''>
                <h2 className='text-center text-[#001931] font-semibold error-title text-[42px]' >Oops, page not found!</h2>
                <p className='text-center error-info text-[#627382] text-[16px] ' >The page you are looking for is not available.</p>
                <Link to="/" ><button  className="btn mt-2 text-white flex m-auto bg-linear-to-r from-[#632EE3] to-[#9F62F2] ">Go Back!</button></Link>
            </div>
        </div>
    );
};

export default Error;