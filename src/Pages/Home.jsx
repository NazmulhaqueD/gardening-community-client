import React from 'react';
import Banner from '../components/Banner';
import ExploreGardeners from './ExploreGardeners';
import ActiveGardeners from '../components/ActiveGardeners';
import { useLoaderData } from 'react-router';
import TopTrending from '../components/TopTrending';
import Accordion from '../components/Accordion';
import Feedback from '../components/Feedback';
import GetFeedback from '../components/GetFeedback';

const Home = () => {
    const gardeners = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <ActiveGardeners gardeners={gardeners}></ActiveGardeners>
            <TopTrending></TopTrending>
            <Accordion></Accordion>
            <Feedback></Feedback>
            <GetFeedback></GetFeedback>
        </div>
    );
};

export default Home;