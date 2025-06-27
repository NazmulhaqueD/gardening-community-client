import React from 'react';
import AsideDash from '../components/dashboard/AsideDash';
import NavDash from '../components/dashboard/NavDash';
import { Outlet } from 'react-router';

const DashboardLayout = () => {
    return (
        <div className="drawer bg-base-100 lg:drawer-open gap-6">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                {/* Page content here */}
                <NavDash></NavDash>
                <Outlet></Outlet>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full w-64">
                    {/* Sidebar content here */}
                   <AsideDash></AsideDash>
                </ul>
            </div>
        </div>
    );
};

export default DashboardLayout;