import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Status from '../../Components/Status/Status';
import TopApp from '../../Components/TopApp/TopApp';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <Banner></Banner>
            <Status></Status>
            <TopApp data={data} ></TopApp>
        </div>
    );
};

export default Home;