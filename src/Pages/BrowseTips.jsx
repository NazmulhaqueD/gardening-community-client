import React from 'react';
import { NavLink, useLoaderData } from 'react-router';

const BrowseTips = () => {

    const allShareTips = useLoaderData();
    console.log(allShareTips);

    return (
        <div className="bg-base-200 py-8 px-4 rounded-b-2xl">
            <h1 className='text-success text-center text-4xl my-8 font-bold'>All Shared Garden Tips : {allShareTips.length}</h1>
            <div className='overflow-x-auto '>
                <table className="table w-full md:w-8/12 p-4 mx-auto inset-shadow-sm inset-shadow-indigo-500/100 ">
                    {/* head */}
                    <thead>
                        <tr className='text-xl md:text-2xl font-bold text-accent'>
                            <th><p className='hidden md:block'>No:</p></th>
                            <th><p>Title</p></th>
                            <th><p className='hidden md:block'>Author Name</p></th>
                            <th><p>Category</p></th>
                            <th><p className='hidden md:block'>Thumbnail</p></th>
                            <th></th>
                            {/* <th><p>Details</p></th> */}
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allShareTips.map((tips, index) => <tr
                                key={tips._id}
                                className='text-xl'
                            >
                                <th><p className='hidden md:block'>{index + 1}</p> </th>

                                <td><p className='font-semibold'>{tips.title}</p> </td>

                                <td><p className='hidden md:block'>{tips.name}</p></td>

                                <td><p className='font-semibold italic'>{tips.category}</p></td>

                                <td className='hidden md:block'>
                                    <div className=' py-2'>
                                        <img className='max-h-16 rounded-xl' src={tips.photo} alt="" />
                                    </div>
                                </td>

                                <th>
                                    {console.log(tips._id)}
                                    <NavLink to={`/tipDetails/${tips._id}`}>
                                        <button className="btn btn-success">See More</button>
                                    </NavLink>
                                </th>

                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default BrowseTips;