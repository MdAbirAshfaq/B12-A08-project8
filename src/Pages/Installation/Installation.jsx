import React, { useState, useMemo } from 'react';
import { useInstalledApps } from '../../Components/InstalledAppsContext/InstalledAppsContext';
import { toast } from 'react-toastify';

const Installation = () => {
    const { installedApps, uninstallApp } = useInstalledApps();
    const [sortOrder, setSortOrder] = useState('');

    const sortedApps = useMemo(() => {
        if (!sortOrder) return installedApps;
        
        const sorted = [...installedApps];
        if (sortOrder === 'high-low') {
            return sorted.sort((a, b) => b.downloads - a.downloads);
        } else if (sortOrder === 'low-high') {
            return sorted.sort((a, b) => a.downloads - b.downloads);
        }
        return sorted;
    }, [installedApps, sortOrder]);

    const handleUninstall = (app) => {
        uninstallApp(app.id);
        toast.success(`${app.title} uninstalled successfully!`, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
    };

    const handleSortChange = (e) => {
        setSortOrder(e.target.value);
    };

    return (
        <div className='bg-[#F5F5F5] min-h-screen pb-10'>
            <h1 className='text-[#001931] font-bold text-[42px] text-center pt-[50px]'>Your Installed Apps</h1>
            <p className='text-[#627382] text-[16px] text-center pb-[50px]'>Explore All Trending Apps on the Market developed by us</p>
            
            <div className='flex justify-between items-center w-11/12 m-auto mb-4'>
                <p className='font-semibold text-[20px]'>
                    ({installedApps.length}) {installedApps.length === 1 ? 'App' : 'Apps'} Found
                </p>
                <div className='relative'>
                    <select 
                        value={sortOrder}
                        onChange={handleSortChange}
                        className='text-[#627382] text-[15px] bg-white border border-gray-300 rounded px-4 py-2 pr-8 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#00D390]'
                    >
                        <option value="">Sort By Downloads</option>
                        <option value="high-low">High to Low</option>
                        <option value="low-high">Low to High</option>
                    </select>
                </div>
            </div>

            {installedApps.length === 0 ? (
                <div className='text-center py-20'>
                    <p className='text-[#627382] text-[18px]'>No apps installed yet</p>
                    <p className='text-[#627382] text-[14px] mt-2'>Browse apps and click "Install now" to add them here</p>
                </div>
            ) : (
                <div className='w-11/12 m-auto'>
                    {sortedApps.map((app) => (
                        <div 
                            key={app.id}
                            className="flex items-center justify-between bg-white border-b border-gray-200 py-4 px-4 hover:bg-gray-50 transition-colors"
                        >
                            <img 
                                className='w-[50px] h-[50px] mr-2 rounded' 
                                src={app.image} 
                                alt={app.title} 
                            />
                            <div className="flex-grow ml-3">
                                <h3 className="text-[16px] font-semibold text-gray-800">{app.title}</h3>
                                <div className="flex items-center text-sm text-gray-600 mt-1">
                                    <p className='text-[#00D390] mr-3'>
                                        <i className="fa-solid fa-download"></i> {app.downloads}M
                                    </p>
                                    <p className='text-[#FF8811] mr-3'>
                                        <i className="fa-solid fa-star"></i> {app.ratingAvg}
                                    </p>
                                    <p className="text-[#627382]">{app.size} MB</p>
                                </div>
                            </div>
                            <button 
                                onClick={() => handleUninstall(app)}
                                className="bg-[#FF4444] text-white font-medium py-2 px-4 rounded-md hover:bg-[#CC0000] transition-colors"
                            >
                                Uninstall
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Installation;