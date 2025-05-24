import React from 'react';
import { Outlet } from 'react-router';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const MainLayout = () => {
    return (
        <div className='md:max-w-11/12 mx-auto'>
            {/* <Header></Header> */}
            <Navbar></Navbar>
            <div className='min-h-[90vh]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;