import React from 'react';

const ActiveGardeners = ({ gardeners }) => {

    console.log(gardeners)
    return (
        <div className='bg-gray-100 p-4 my-8 md:my-16 rounded-2xl'>
            <h1 className='text-2xl md:text-4xl my-4 md:my-8 text-center font-bold not-dark:text-white dark:text-green-500'>Active Gardeners</h1>

            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-6'>
                {
                    gardeners.map(gardener => <div
                        key={gardener._id}
                        className='flex flex-col justify-center items-center gap-4 py-6 px-12 shadow-lg bg-gray-200 rounded-2xl transition duration-300 transform hover:scale-105 hover:shadow-2xl hover:bg-gray-300'>

                        <div><img src={gardener?.image} className='w-32 h-32 rounded-full' alt="" /></div>
                        <h2 className='font-semibold text-teal-400 text-center text-2xl'>{gardener.name}</h2>
                        <p className='text-sm text-center font-semibold'>{gardener.location}</p>
                        <p className='text-xl text-center font-bold italic'>{gardener.experience}</p>

                    </div>)
                }
            </div>
        </div>
    );
};

export default ActiveGardeners;