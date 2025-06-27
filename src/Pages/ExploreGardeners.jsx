import React from 'react';
import { useLoaderData } from 'react-router';

const ExploreGardeners = () => {

    const allGardeners = useLoaderData();

    return (
        <div className='py-4 md:py-8 bg-base-300 rounded-b-2xl mt-28 rounded-xl'>
            <h1 className='text-2xl md:text-4xl my-4 md:my-8 text-center text-success font-bold'>There Are All Gardeners Here: ({allGardeners.length})</h1>
            <div className='w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 px-4 rounded-2xl'>
                {
                    allGardeners?.map(gardener => <div
                        key={gardener._id}
                        className='inset-shadow-sm inset-shadow-indigo-500/100 p-1 bg-base-100 rounded-2xl transition-all transform duration-300 hover:scale-x-105'
                    >
                        <div className='overflow-hidden'>
                            <img className='w-full h-[300px] pb-6 rounded-2xl transition-transform duration-300 hover:scale-105' src={gardener.image} alt="" />
                        </div>
                        <div className='space-y-3 bg-base-200 p-4'>
                            <h1 className='text-xl font-semibold text-shadow-lg'>{gardener.name}</h1>
                            <p>{gardener.age} years, {gardener.gender}</p>
                            <p>Experience: {gardener.experience}</p>
                            <p>{gardener.status}</p>
                            <p className='text-success'>Total shared Tips : {gardener.totalSharedTips}</p>
                            <p className='italic font-thin'>{gardener.location}</p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default ExploreGardeners;