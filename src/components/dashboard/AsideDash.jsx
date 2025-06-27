import React, { useContext } from 'react';
import { CgProfile } from 'react-icons/cg';
import { FaShareSquare } from 'react-icons/fa';
import { ImProfile } from 'react-icons/im';
import { IoLogOutSharp } from 'react-icons/io5';
import { MdTipsAndUpdates } from 'react-icons/md';
import { NavLink } from 'react-router';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import { AuthContext } from '../../Auth/AuthProvider';

const AsideDash = () => {

    const { logOut } = useContext(AuthContext);

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
        <div className='col-span-full md:col-span-3 bg-base-300 p-4'>
            <h1 className='text-teal-400 text-2xl font-bold lg:text-4xl my-4 mb-6'>Dashboard</h1>
            <div className=' flex flex-col gap-6 mt-16 asideDash'>
                <NavLink to={'/myProfile'} className={'flex items-center gap-2 font-semibold'}><ImProfile /> <span>My Profile</span></NavLink>
                <NavLink to={'/shareTips'} className={'flex items-center gap-2 font-semibold'}><FaShareSquare /> <span>Share a Garden Tip</span></NavLink>
                <NavLink to={'/myTips'} className={'flex items-center gap-2 font-semibold'}><CgProfile /> <span>My Tips</span></NavLink>
                <NavLink to={'/browseTips'} className={'flex items-center gap-2 font-semibold'}><MdTipsAndUpdates /> <span>Browse Tips</span></NavLink>
                <NavLink onClick={handleLogOut} to={'/'} className={'flex items-center gap-2 font-semibold'}><IoLogOutSharp /> <span>LogOut</span></NavLink>
            </div>
        </div>
    );
};

export default AsideDash;