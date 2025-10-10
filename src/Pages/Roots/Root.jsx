import React from 'react';
import Navbar from '../../Components/Header/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../Components/Footer/Footer';
import { InstalledAppsProvider } from '../../Components/InstalledAppsContext/InstalledAppsContext';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
        <div>
            <InstalledAppsProvider>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
            </InstalledAppsProvider>
        </div>
    );
};

export default Root;