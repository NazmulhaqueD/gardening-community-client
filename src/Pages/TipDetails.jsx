import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../Auth/AuthProvider';
import { GrLike } from 'react-icons/gr';
import { BiSolidDislike } from 'react-icons/bi';

const TipDetails = () => {

    const { id } = useParams();
    const { user } = useContext(AuthContext);
    const tips = useLoaderData();

    const [likeCount, setLikeCount] = useState(tips.totalLiked);
    const [liked, setLiked] = useState(false);
    console.log(likeCount);

    useEffect(() => {
        fetch(`http://localhost:5000/shareTips/${id}`)
            .then(res => res.json())
            .then(data => {
                setLikeCount(data.totalLiked)

                // loggedIn user already isLogged?
                const isLikedBefore = data.likedUsers?.some(likedUser => likedUser.email === user.email);
                setLiked(isLikedBefore);
                console.log(isLikedBefore)
            })
    }, [id, user.email, liked])


    const handleLiked = () => {
        const newLiked = !liked;
        setLiked(newLiked);

        const likedInfo = {
            liked: newLiked,
            email: user.email,
            name: user.displayName,
        }

        fetch(`http://localhost:5000/shareTipsUpdate/${id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(likedInfo),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setLikeCount(prev => newLiked ? prev + 1 : prev - 1)
                }
                console.log(data);
            })
    }

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
                   
                    <div className='absolute bottom-0 flex gap-2 items-center'>
                        <button onClick={handleLiked} >
                            {
                                liked ? <BiSolidDislike size={40} /> : <GrLike size={40} fill='' />
                            }
                        </button>
                         <p className='text-2xl'>total like: <span className='text-success font-bold'> {likeCount}</span> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TipDetails;