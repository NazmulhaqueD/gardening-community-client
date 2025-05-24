import React, { useContext, useEffect, useState } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Auth/AuthProvider';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import Swal from 'sweetalert2';
import { Tooltip } from 'react-tooltip';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [isDark, setIsDark] = useState(false);
    const [dropDownOpen, setDropDownOpen] = useState(false)
    console.log(user?.photoURL, dropDownOpen)

    const navLink = <>
        <NavLink className='text-[16px] md:text-xl font-bold md:mx-4' to='/'><li>Home</li></NavLink>
        <NavLink className='text-[16px] md:text-xl font-bold md:mx-4' to='/exploreGardeners'><li>Explore Gardeners</li></NavLink>
        <NavLink className='text-[16px] md:text-xl font-bold md:mx-4' to='/browseTips'><li>Browse Tips</li></NavLink>
        <NavLink className='text-[16px] md:text-xl font-bold md:mx-4' to='/shareTips'><li>Share a Garden Tip</li></NavLink>
        <NavLink className='text-[16px] md:text-xl font-bold md:mx-4' to='/myTips'><li>My Tips</li></NavLink>
        {
            user ? "" : <NavLink to='/login'><li>Login</li></NavLink>
        }
    </>

    const handleLogOut = () => {
        logOut()
            .then(() => {
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "You are loggedIn successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.log(error.message)
            })
    }

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
                                className="menu  menu-sm mobileMenuList dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 shadow px-4 ">
                                {navLink}
                            </ul>
                        </div>
                        <a className="text-2xl font-semibold text-success">Gardening</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 flex gap-6 font-semibold">
                            {navLink}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <button onClick={() => setIsDark(!isDark)} className='mr-6 p-1 cursor-pointer rounded-full border-2 border-e-teal-400'>
                            {isDark ? <MdOutlineDarkMode size={35} />
                                : <MdDarkMode size={35} />}
                        </button>
                        <div >
                            {
                                user ?
                                    <span className='relative flex'>
                                        <img
                                            data-tooltip-id="name"
                                            data-tooltip-content={user?.displayName}
                                            onClick={() => setDropDownOpen(!dropDownOpen)} className='w-12 h-12 cursor-pointer rounded-full' src={user?.photoURL} alt="" />
                                        <Tooltip
                                            id="name"
                                            place="bottom"
                                            delayShow={400}
                                        />
                                        <button onClick={handleLogOut} className={`absolute btn transition-all duration-300 bg-green-300 px-4 py-2 rounded-xl right-0 shadow-2xl ${dropDownOpen ? 'top-[60px]' : 'top-[-60px]'} `}>LogOut</button>
                                    </span>
                                    :
                                    <NavLink to='/login'>
                                        <button className='btn btn-primary'>
                                            SignUp
                                        </button>
                                    </NavLink>
                            }
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;


{/* <div>
    <button
        onClick={() => handleDelete(plant._id)}
        data-tooltip-id="delete-tooltip"
        data-tooltip-content="Click to Delete Plant"
        className="btn bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded-lg shadow transition"
    >
        Delete
    </button>
    <Tooltip
        id="delete-tooltip"
        place="bottom"
        delayShow={400}
        style={{
            fontSize: "12px",
            padding: "6px",
            borderRadius: "6px",
        }}
    />

</div> */}