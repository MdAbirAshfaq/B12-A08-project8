import React, { Suspense, useState } from 'react';
import App from '../App/App';
import { useLoaderData } from 'react-router';
import AppNotFound from '../AppNotFound/AppNotFound';
import "./Apps.css"

const Apps = () => {
    const data = useLoaderData();
    const [search, setSearch] = useState('')
    const filteredData = data.filter(app =>
    app.title.toLowerCase().includes(search.toLowerCase())
  );


    return (
        <div className='bg-[#F5F5F5]' >
            <h1 className='text-[#001931] font-bold text-[42px] text-center pt-[50px]' >Our All Applications</h1>
            <p className='text-[#627382] text-[16px] text-center pb-[50px]' >Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='flex justify-between max-w-11/12 m-auto' >
                <p className='font-semibold text-[20px]' >({filteredData.length})Apps Found</p>
                <div>
                    <i class="fa-solid relative text-[#627382] left-[22px] fa-magnifying-glass"></i>
                    <input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder='Search Apps' className='pl-5 ' />
                </div>
            </div>
            <div className='grid grid-cols-4 mt-[30px] main-div w-11/12 m-auto' >
                <Suspense fallback={<span className="loading loading-spinner text-success"></span>}>
                    {filteredData.length > 0 ? (filteredData.map((appData) => (<App key={appData.id} appData={appData} />))) : <div className='col-span-4' > <AppNotFound></AppNotFound></div> }
                </Suspense>
            </div>
        </div>
    );
};

export default Apps;




