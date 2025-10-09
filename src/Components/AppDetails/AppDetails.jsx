import React from 'react';
import { useParams } from 'react-router';

const AppDetails = () => {
    const {id} = useParams();
    console.log(id)
    return (
        <div className='border-b-1 border-[#00193130] w-11/12 m-auto pb-[35px]' >
            <div className='flex justify-start w-10/12 m-auto gap-[50px] mt-[60px]' >
                <img src="/src/assets/demo-app (1).webp" alt="" />
                <div>
                    <div className='border-b-1 border-[#00193130] mb-[40px]' >
                    <h2 className='font-bold text-[28px] text-[#001931]' >SmPlan:ToDo List with Reminder</h2>
                    <p className='text-[#627382] text-[16px] ' >Developed by <span className='text-[#9F62F2]' >productive.io</span></p>
                    </div>
                    <div className='flex justify-around gap-[30px]' >
                        <div>
                            <img src="/src/assets/icon-downloads.png" alt="" />
                            <p className='text-[16px]' >Downloads</p>
                            <h3 className='text-[#001931] font-extrabold text-[40px]' >8M</h3>
                        </div>
                        <div>
                            <img src="/src/assets/icon-ratings.png" alt="" />
                            <p className='text-[16px]' >Average Ratings</p>
                            <h3 className='text-[#001931] font-extrabold text-[40px]' >4.9</h3>
                        </div>
                        <div>
                            <img src="/src/assets/icon-review.png" alt="" />
                            <p className='text-[16px]' >Total Reviews</p>
                            <h3 className='text-[#001931] font-extrabold text-[40px]' >54K</h3>
                        </div>
                    </div>
                    <button className='bg-[#00D390] text-white font-semibold p-[12px] rounded-[4px]' >Install now (500mb)</button>
                </div>
            </div>
        </div>
    );
};

export default AppDetails;