import React from 'react';

const Installation = () => {
    return (
        <div className='bg-[#F5F5F5]' >
            <h1 className='text-[#001931] font-bold text-[42px] text-center pt-[50px]' >Your Installed Apps</h1>
            <p className='text-[#627382] text-[16px] text-center pb-[50px]' >Explore All Trending Apps on the Market developed by us</p>
            <div className='flex justify-between w-11/12 m-auto'>
                <p className='font-semibold text-[20px]'>1 Apps Found</p>
                <p className='dropout text-[#627382] text-[15px]'> Sort By Size</p>
            </div>
            <div className="flex items-center justify-between bg-white border-b w-11/12 m-auto border-gray-200 py-4 px-4">
                <img className='w-[50px] h-[50px] mr-2 ' src="/src/assets/Image/a5abcfcd454fc500e0a93ac9268563b8994316be0384729eec299ffdcec18b7d_200.webp" alt="" />
                <div className="flex-grow">
                    <h3 className="text-[16px] font-semibold text-gray-800">Forest: Focus For Productivity</h3>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                    <p className='text-[#00D390] mr-3' ><i class="fa-solid fa-download"></i>4.9M</p>
                    <p className='text-[#FF8811]' ><i class="fa-solid fa-star"></i>5</p>
                    <p className="mx-2 text-[#627382]">258 MB</p>
                    </div>
                </div>
                <button className="bg-[#00D390] text-white font-medium py-2 px-4 rounded-md hover:bg-teal-600">
                    Uninstall
                </button>
                </div>





            











        </div>
    );
};

export default Installation;