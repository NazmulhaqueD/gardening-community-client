import React, { useEffect, useState } from 'react';
import { BiLike } from 'react-icons/bi';

const TopTrending = () => {

    const [topTips, setTopTips] = useState([]);

    useEffect(() => {
        fetch('https://gardening-server-six.vercel.app/topLikedTips')
            .then(res => res.json())
            .then(data => setTopTips(data));
    }, [])

    return (
        <div className='bg-base-200 rounded-xl p-4'>
            <h1 className='text-center text-4xl py-8 text-green-500 font-bold'>Top Trending</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 rounded-2xl'>
                {
                    topTips.map(tips => <div
                        key={tips._id}
                        className='rounded-xl overflow-hidden transform transition duration-500 hover:bg-base-200 shadow-[1px_2px_10px_#22702D] hover:shadow-[2px_5px_20px_#22702D] hover:scale-102'
                    >
                        <div className='p-4 flex flex-col gap-4'>
                            <div>
                                <img className='h-72 w-full rounded-2xl' src={tips.image} alt="" />
                            </div>
                            <h2 className='text-xl font-semibold text-teal-400'>{tips.title}</h2>
                            <p className='italic font-thin text-xl'>{tips.description}</p>
                            <div className='flex justify-between'>
                                <p>{tips.author}</p>
                                <span className='flex gap-2 items-center text-xl'><BiLike /> <p className='text-green-500'>{tips.totalLiked}</p></span>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default TopTrending;