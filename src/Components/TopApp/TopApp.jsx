import React, { Suspense } from 'react';
import SingleApp from '../SingleApp/SingleApp';
import "./TopApp.css"
import { Link } from 'react-router';

const TopApp = ({data}) => {
    return (
        <div className='bg-[#F5F5F5]' > 
        <div className='bg-[#F5F5F5] w-11/12 m-auto'  >
            <h1 className='text-[#001931] font-bold text-[42px] text-center pt-[50px]' >Trending Apps</h1>
            <p className='text-[#627382] text-[16px] text-center pb-[50px]' >Explore All Trending Apps on the Market developed by us</p>
            <div className='grid grid-cols-4 map-div' >
            <Suspense fallback={"Loading.."}>
                {
                    data.map((onlyApp)=> <SingleApp key={onlyApp.id} onlyApp={onlyApp} ></SingleApp>)
                }
            </Suspense>
            </div>
        </div>
        <div className=' bg-[#F5F5F5]'>
        <Link to="/Apps">
        <button  className="btn mt-2  text-white flex m-auto bg-linear-to-r from-[#632EE3] to-[#9F62F2] ">Show All</button>
        </Link>
        </div>
        </div>
    );
};

export default TopApp;