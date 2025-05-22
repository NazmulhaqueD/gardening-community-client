import React from 'react';
import { useLoaderData } from 'react-router';

const TipDetails = () => {
    const tips = useLoaderData();
    console.log(tips);
    return (
        <div className='bg-base-200 w-full'>
            <div className="w-full md:max-w-9/12 mx-auto grid grid-cols-1 md:grid-cols-12 gap-6 py-16 px-4">
                <figure className='col-span-12 md:col-span-7'>
                    <img
                        className='max-h-[600px] w-full object-center object-cover rounded-2xl'
                        src={tips.photo}
                        alt="Album" />
                </figure>
                <div className="col-span-12 md:col-span-5 space-y-4 bg-base-100 relative p-4 rounded-2xl">
                    <h2 className=" text-4xl font-bold text-success">{tips.title}</h2>
                    <h2 className='text-xl font-semibold'>{tips.email}</h2>
                    <p className='text-xl font-semibold'>Category: {tips.category}</p>
                    <p className='font-semibold'>Type: {tips.type}</p>
                    <p className='font-semibold'>Difficulty level: {tips.Level}</p>
                    <p>{tips.description}</p>
                    <div className='pb-8'>
                        <span className='flex gap-2'><p className='text-teal-400 text-xl'>{tips.availability}</p> , by <p className='text-teal-400 text-xl italic'>{tips.name}</p></span>
                    </div>
                    <button className='btn btn-success btn-md absolute bottom-0'>Like</button>
                </div>
            </div>
        </div>
    );
};

export default TipDetails;