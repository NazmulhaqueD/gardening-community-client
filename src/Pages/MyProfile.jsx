import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { IoMdAdd } from 'react-icons/io';
import { RiMapPinUserFill } from 'react-icons/ri';
import { MdEditSquare } from 'react-icons/md';
import { NavLink } from 'react-router';

const MyProfile = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className='max-w-5xl grid grid-cols-1 sm:grid-cols-2 gap-6'>
            <div className='flex items-center gap-6 shadow p-4 bg-base-200 hover:shadow-xl transition duration-300 cursor-pointer hover:scale-105'>
                <div>
                    <img className='w-28 h-28 rounded-full' src={user?.photoURL} alt="" />
                </div>
                <div className='space-y-1'>
                    <h1 className='text-2xl font-semibold'>LoggedIn User!</h1>
                    <p className=''>{user?.displayName}</p>
                    <p className='italic'>{user?.email}</p>
                </div>
            </div>

            <a href='myTips'>
                <div className='shadow p-4 bg-base-200 hover:shadow-xl transition duration-300 cursor-pointer hover:scale-105'>
                    <span className=''><RiMapPinUserFill className='ml-8 my-2' size={40} /></span>
                    <h1 className='text-2xl font-semibold'>My Tips</h1>
                    <p>Click hare to see all of my tips</p>
                </div>
            </a>
            <a href='shareTips'>
                <div className='shadow p-4 bg-base-200 hover:shadow-xl transition duration-300 cursor-pointer hover:scale-105'>
                    <span className=''><IoMdAdd className='ml-8 my-2' size={40} /></span>
                    <h1 className='text-2xl font-semibold'>Share a Garden Tips</h1>
                    <p>Click hare and Share a Garden tips</p>
                </div>
            </a>
            <a href='myTips'>
                <div className='shadow p-4 bg-base-200 hover:shadow-xl transition duration-300 cursor-pointer hover:scale-105'>
                    <span className=''><MdEditSquare className='ml-8 my-2' size={40} /></span>
                    <h1 className='text-2xl font-semibold'>Edit My Tips</h1>
                    <p>Click hare to edit my tips</p>
                </div>
            </a>
        </div>
    );
};

export default MyProfile;