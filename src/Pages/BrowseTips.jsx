import React, { useState } from 'react';
import { NavLink, useLoaderData } from 'react-router';

const BrowseTips = () => {

    const initialAllShareTips = useLoaderData();
    const [allShareTips, setAllShareTips] = useState(initialAllShareTips)
    console.log(allShareTips);

    const handleSearch = (e) => {
        e.preventDefault();
        const select = e.target.selectType.value;
        if (select === 'All') {
            return setAllShareTips(initialAllShareTips);
        }

        const filteredTips = initialAllShareTips.filter(tips => tips.Level === select);
        setAllShareTips(filteredTips)

        console.log(select, allShareTips);
    }

    return (
        <div className="bg-base-200 py-8 rounded-b-2xl">
            <h1 className='text-success text-center text-2xl md:text-4xl my-8 font-bold'>All Shared Garden Tips : {allShareTips.length}</h1>
            <div className='overflow-x-auto rounded-sm'>
                <form onSubmit={handleSearch} className='w-full md:w-8/12 mx-auto my-8 relative z-0'>
                    <select defaultValue="Search by Difficulty Level" name='selectType' className="select w-full select-secondary">
                        <option disabled={true}>Search by Difficulty Level</option>
                        <option>All</option>
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>
                    <input type="submit" className='btn px-10 absolute right-0 z-10' value={'Search'} />
                </form>
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