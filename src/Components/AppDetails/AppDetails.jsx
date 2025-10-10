import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import RatingChart from '../RatingChart/RatingChart';
import { useInstalledApps } from '../InstalledAppsContext/InstalledAppsContext';
import { toast } from 'react-toastify';

const AppDetails = () => {
    const { id } = useParams();
    const appId = parseInt(id, 10);
    const data = useLoaderData();
    const singleApp = data.find(app => app.id === appId);
    
    const { installApp, isInstalled } = useInstalledApps();
    const installed = isInstalled(appId);

    if (!singleApp) {
        return <div>App not found</div>;
    }

    const handleInstall = () => {
        installApp(singleApp);
        toast.success(`${singleApp.title} installed successfully!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    return (
        <div className='border-b-1 border-[#00193130] w-11/12 m-auto pb-[35px]'>
            <div className='flex justify-start w-10/12 m-auto border-b-1 pb-[20px] border-gray-300 gap-[50px] mt-[60px]'>
                <img className='w-[280px] h-[300px]' src={singleApp.image} alt='' />
                <div>
                    <div className='border-b-1 border-[#00193130] mb-[40px]'>
                        <h2 className='font-bold text-[28px] text-[#001931]'>{singleApp.title}</h2>
                        <p className='text-[#627382] text-[16px]'>Developed by <span className='text-[#9F62F2]'>{singleApp.companyName}</span></p>
                    </div>
                    <div className='flex justify-evenly gap-[40px]'>
                        <div>
                            <img className='w-[30px] h-[30px]' src="/src/assets/icon-downloads.png" alt="" />
                            <p className='text-[15px]'>Downloads</p>
                            <h3 className='text-[#001931] font-extrabold text-[35px]'>{singleApp.downloads}M</h3>
                        </div>
                        <div>
                            <img className='w-[30px] h-[30px]' src="/src/assets/icon-ratings.png" alt="" />
                            <p className='text-[15px]'>Average Ratings</p>
                            <h3 className='text-[#001931] font-extrabold text-[35px]'>{singleApp.ratingAvg}</h3>
                        </div>
                        <div>
                            <img className='w-[30px] h-[30px]' src="/src/assets/icon-review.png" alt="" />
                            <p className='text-[15px]'>Total Reviews</p>
                            <h3 className='text-[#001931] font-extrabold text-[35px]'>{(singleApp.reviews / 1000).toFixed(0)}K</h3>
                        </div>
                    </div>
                    <button 
                        onClick={handleInstall}
                        disabled={installed}
                        className={`${
                            installed 
                                ? 'bg-gray-400 cursor-not-allowed' 
                                : 'bg-[#00D390] hover:bg-[#00b87a]'
                        } text-white font-semibold p-[12px] rounded-[4px] transition-colors mt-4`}
                    >
                        {installed ? 'Installed' : `Install now (${singleApp.size}mb)`}
                    </button>
                </div>
            </div>
            <RatingChart ratings={singleApp.ratings} />
            <div className='mt-8'>
                <h3 className='font-semibold text-[20px] mb-5'>Description</h3>
                <p className='text-[#627382] leading-relaxed'>{singleApp.description}</p>
            </div>
        </div>
    );
};

export default AppDetails;