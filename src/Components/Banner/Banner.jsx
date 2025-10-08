import React from 'react';
import "./Banner.css"
const Banner = () => {
    return (
        <div className='text-center mt-[60px]'>
            <h1 className='text-[60px] banner-title font-bold '>We Build<br /><span className='text-[#9F62F2]' >Productive</span> Apps</h1>
            <p className='text-[#627382] banner-info text-[17px]' >At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br className='hide' /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className='mt-4' >
                <button className='btn mr-3'><i class="fa-brands fa-google-play"></i>Google Play</button>
                <button className='btn' ><i class="fa-brands fa-app-store-ios"></i>App Store</button>
            </div>
            <img className='mt-[30px] m-auto' src="/src/assets/hero.png" alt="" />
        </div>
    );
};

export default Banner;