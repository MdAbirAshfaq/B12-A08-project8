import React from 'react';

const Status = () => {
    return (
        <div className='bg-linear-to-r from-[#632EE3] to-[#9F62F2]  ' >
            <h2 className='text-white font-bold text-[40px] py-[40px] text-center' >Trusted by Millions, Built for You</h2>
            <div className='pb-[40px] flex max-w-1/2 m-auto justify-around' >
                <div>
                    <h5 className='text-[15px] text-white' >Total Downloads</h5>
                    <h3 className='text-[55px] font-extrabold text-white' >29.6M</h3>
                    <h4 className='text-[15px] text-white' >21% more than last month</h4>
                </div>
                <div>
                    <h5 className='text-[15px] text-white' >Total Reviews</h5>
                    <h3 className='text-[55px] font-extrabold text-white' >906K</h3>
                    <h4 className='text-[15px] text-white' >46% more than last month</h4>
                </div>
                <div>
                    <h5 className='text-[15px] text-white' >Active Apps</h5>
                    <h3 className='text-[55px] font-extrabold text-white' >132+</h3>
                    <h4 className='text-[15px] text-white' >31 more will Launch</h4>
                </div>
            </div>
        </div>
    );
};

export default Status;