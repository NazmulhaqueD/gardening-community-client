import React from 'react';
import { NavLink, useLoaderData } from 'react-router';

const BrowseTips = () => {

    const allShareTips = useLoaderData();
    console.log(allShareTips);

    return (
        <div className="overflow-x-auto bg-base-200 py-8 px-4 rounded-b-2xl">
            <h1 className='text-success text-center text-4xl my-8 font-bold'>All Shared Garden Tips : {allShareTips.length}</h1>
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr className='text-xl font-bold text-accent'>
                        <th><p className='hidden md:block'>No:</p></th>
                        <th><p>Title</p></th>
                        <th><p className='hidden md:block'>Author Name</p></th>
                        <th><p>Category</p></th>
                        <th><p className='hidden md:block'>Thumbnail</p></th>
                        {/* <th><p>Details</p></th> */}
                    </tr>
                </thead>
                <tbody>

                    {
                        allShareTips.map((tips, index) => <tr
                            key={tips._id}
                        >
                            <th><p className='hidden md:block'>{index + 1}</p> </th>

                            <td><p className='text-[16px] font-semibold'>{tips.title}</p> </td>

                            <td><p className='hidden md:block'>{tips.name}</p></td>

                            <td><p className='font-semibold italic'>{tips.category}</p></td>

                            <td className='hidden md:block'>
                                <div className=' py-2'>
                                    <img className='max-h-32 rounded-xl' src={tips.photo} alt="" />
                                </div>
                            </td>

                            <th>
                                <NavLink to={`/tipDetails/:${tips._id}`}>
                                    <button className="btn btn-success">See More</button>
                                </NavLink>
                            </th>

                        </tr>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default BrowseTips;