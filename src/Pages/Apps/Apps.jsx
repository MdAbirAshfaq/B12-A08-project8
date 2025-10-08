import React, { Suspense } from 'react';
import App from '../App/App';

const Apps = () => {

    const appPromise = fetch('/public/App.json').then(res => res.json())

    return (
        <div className='bg-[#F5F5F5]' >
            <h1 className='text-[#001931] font-bold text-[42px] text-center pt-[50px]' >Our All Applications</h1>
            <p className='text-[#627382] text-[16px] text-center pb-[50px]' >Explore All Apps on the Market developed by us. We code for Millions</p>
            <Suspense fallback="Loading...."> 
                <App ></App>
            </Suspense>
        </div>
    );
};

export default Apps;