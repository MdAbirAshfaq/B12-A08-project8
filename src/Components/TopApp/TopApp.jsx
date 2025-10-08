import React, { Suspense } from 'react';
import SingleApp from '../SingleApp/SingleApp';

const TopApp = ({data}) => {
    return (
        <div className='bg-[#F5F5F5]' > 
        <div className='bg-[#F5F5F5] w-11/12 m-auto'  >
            <h1 className='text-[#001931] font-bold text-[42px] text-center pt-[50px]' >Trending Apps</h1>
            <p className='text-[#627382] text-[16px] text-center pb-[50px]' >Explore All Trending Apps on the Market developed by us</p>
            <div className='grid grid-cols-4 gap-' >
            <Suspense fallback={"Loading.."}>
                {
                    data.map((onlyApp)=> <SingleApp key={onlyApp.id} onlyApp={onlyApp} ></SingleApp>)
                }
            </Suspense>
            </div>
        </div>
        </div>
    );
};

export default TopApp;