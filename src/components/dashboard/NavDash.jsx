import React, { useContext } from 'react';
import { FiMenu } from 'react-icons/fi';
import { AuthContext } from '../../Auth/AuthProvider';
import { NavLink } from 'react-router';
import { FaHome } from 'react-icons/fa';
import { CiHome } from 'react-icons/ci';
import Theme from '../Theme';

const NavDash = () => {

    const { user } = useContext(AuthContext);

    return (
        <div className='col-span-9 flex items-center justify-between mt-2 bg-base-300 p-4 rounded-xl mb-8'>
            <h1 className='text-2xl lg:text-4xl font-semibold'>Welcome, {user?.displayName}!</h1>
            <div className='flex items-center gap-4'>
                <a href="/"><CiHome size={32} /></a>
                <Theme></Theme>
                <label htmlFor="my-drawer-2" className="lg:hidden">
                    <FiMenu size={32}></FiMenu>
                </label>
            </div>
        </div>
    );
};

export default NavDash;