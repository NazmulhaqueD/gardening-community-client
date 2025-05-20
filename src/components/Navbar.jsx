import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Auth/AuthProvider';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';

const Navbar = () => {
    const { name } = useContext(AuthContext);
    const [isDark, setIsDark] = useState(false);
    console.log(name)
    const navLink = <>
        <NavLink to='/'><li>Home</li></NavLink>
        <NavLink to='/tips'><li>Tips</li></NavLink>
    </>

    useEffect(() => {
        document.querySelector('html').setAttribute('data-theme', isDark ? 'dark' : 'light')
    }, [isDark])

    return (
        <div>
            <nav>
                <div className="navbar bg-base-100 shadow-sm">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                                {navLink}
                            </ul>
                        </div>
                        <a className="btn btn-ghost text-xl">daisyUI</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 flex gap-6 font-semibold">
                            {navLink}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button onClick={() => setIsDark(!isDark)} className='m-1 p-1 cursor-pointer rounded-full border-2 border-e-teal-400'>
                            {isDark ?  <MdOutlineDarkMode size={25} />
                                : <MdDarkMode size={25} />}
                        </button>
                        <a className="btn">Button</a>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;