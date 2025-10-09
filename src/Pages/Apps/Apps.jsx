import React, { Suspense } from 'react';
import App from '../App/App';
import { useLoaderData } from 'react-router';

const Apps = () => {
    const data = useLoaderData;
    return (
        <div className='bg-[#F5F5F5]' >
            <h1 className='text-[#001931] font-bold text-[42px] text-center pt-[50px]' >Our All Applications</h1>
            <p className='text-[#627382] text-[16px] text-center pb-[50px]' >Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='flex justify-between max-w-11/12 m-auto' >
                <p className='font-semibold text-[20px]' >(12)Apps Found</p>
                <div>
                    <i class="fa-solid relative text-[#627382] left-[22px] fa-magnifying-glass"></i>
                    <input type="search"  name="" id="" placeholder='Search Apps' className='pl-5 ' />
                </div>
            </div>
            <App></App>
        </div>
    );
};

export default Apps;