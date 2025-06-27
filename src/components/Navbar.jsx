import React, { useContext, useState } from 'react';
import { NavLink } from 'react-router';
import { AuthContext } from '../Auth/AuthProvider';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
import Swal from 'sweetalert2';
import { Tooltip } from 'react-tooltip';
import { toast } from 'react-toastify';
import Theme from './Theme';

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [dropDownOpen, setDropDownOpen] = useState(false)

    const navLink = <>
        <NavLink className='text-[16px]  font-bold ' to='/'><li>Home</li></NavLink>
        <NavLink className='text-[16px]  font-bold ' to='/exploreGardeners'><li>Explore Gardeners</li></NavLink>
        <NavLink className='text-[16px]  font-bold ' to='/browseTips'><li>Browse Tips</li></NavLink>
        {
            user ? "" : <NavLink className='text-[16px] font-bold' to='/login'><li>Login</li></NavLink>
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
                toast.error(`${error.message}`)
            })
    }

    return (
        <div className='w-full md:w-11/12 mx-auto fixed top-0 z-20 mb-36'>
            <nav>
                <div className="navbar bg-base-200 shadow-sm mb-6 py-4">
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
                        <a className="text-3xl md:text-4xl font-bold text-success">Greenest</a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1 flex gap-6 font-semibold">
                            {navLink}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        <div className='flex items-center gap-6'>
                            {
                                user?.email && <NavLink className='text-[16px]  font-bold ' to='/myProfile'>DashBoard</NavLink>
                            }
                            <Theme></Theme>
                        </div>
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

