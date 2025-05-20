import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <div className='md:max-w-11/12 mx-auto p-2'>
            {/* <Header></Header> */}
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;