import React from 'react';
import { NavLink, useLoaderData } from 'react-router';

const BrowseTips = () => {

    const allShareTips = useLoaderData();
    console.log(allShareTips);

    return (
        <div className="bg-base-200 py-8 rounded-b-2xl">
            <h1 className='text-success text-center text-2xl md:text-4xl my-8 font-bold'>All Shared Garden Tips : {allShareTips.length}</h1>
            <div className='overflow-x-auto rounded-sm'>
                <table className="table w-full md:w-8/12 mx-auto inset-shadow-sm inset-shadow-indigo-500/100 p-4 md:p-8 rounded-2xl">
                    {/* head */}
                    <thead className='bg-gray-300'>
                        <tr className='text-xl md:text-2xl font-bold text-black'>
                            <th>No:</th>
                            <th>Title</th>
                            <th>Author Name</th>
                            <th>Category</th>
                            <th>Thumbnail</th>
                            <th>Details</th>
                            {/* <th><p>Details</p></th> */}
                        </tr>
                    </thead>
                    <tbody>

                        {
                            allShareTips.map((tips, index) => <tr
                                key={tips._id}
                                className='text-[16px]'
                            >
                                <th>{index + 1} </th>
                                <td>{tips.title} </td>
                                <td>{tips.name}</td>
                                <td>{tips.category}</td>
                                <td>
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