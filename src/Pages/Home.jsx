import React from 'react';
import Banner from '../components/Banner';
import ExploreGardeners from './ExploreGardeners';
import ActiveGardeners from '../components/ActiveGardeners';
import { useLoaderData } from 'react-router';
import TopTrending from '../components/TopTrending';

const Home = () => {
    const gardeners = useLoaderData();
    console.log(gardeners);
    return (
        <div>
            <Banner></Banner>
            <ActiveGardeners gardeners={gardeners}></ActiveGardeners>
            <TopTrending></TopTrending>
        </div>
    );
};

export default Home;