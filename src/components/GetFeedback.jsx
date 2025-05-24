import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { Typewriter } from 'react-simple-typewriter';
import { format } from 'date-fns';
import { toast, ToastContainer } from 'react-toastify';

const GetFeedback = () => {

    const { user } = useContext(AuthContext);
    const date = format(new Date(), 'EEE, MMMM d, yyyy, hh:mm a');
    console.log(date)

    const handleGetFeedback = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const feedBack = Object.fromEntries(formData.entries());
        const newDate = format(new Date(), 'EEE, MMMM d, yyyy, hh:mm a');
        feedBack.date = newDate;

        // send data in database from client site
        fetch('https://gardening-server-six.vercel.app/feedBack', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(feedBack),
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast(`We see your feedback,${user?.displayName}`);
                    e.target.reset()
                }
            })
    }

    return (


        <div className={`bg-base-200 rounded-2xl py-8 px-4 ${user && user?.email ? 'block' : 'hidden'}`}>
            <h3 className='text-2xl md:text-4xl font-bold text-center my-8 text-success'>
                <Typewriter
                    cursor
                    cursorBlinking
                    delaySpeed={1500}
                    deleteSpeed={50}
                    loop={true}
                    typeSpeed={70}
                    words={[
                        'Write your feedback here...',
                        'Your opinion matters to us!',
                        'Don\'t hesitate to share your thoughts!',
                    ]}
                />
            </h3>
            <div className='w-full md:w-9/12 mx-auto '>
                <form onSubmit={handleGetFeedback} className='grid grid-cols-1 md:grid-cols-2 gap-8 inset-shadow-sm inset-shadow-indigo-500/50 rounded-2xl p-8'>
                    <div className='space-y-2'>
                        <label className="label text-xl font-semibold">Name</label>
                        <input type="text" name='name' value={user?.displayName} className="input w-full input-success" />
                    </div>
                    <div className='space-y-2'>
                        <label className="label text-xl font-semibold">Email</label>
                        <input type="text" name='email' value={user?.email} className="input w-full input-success" />
                    </div>
                    <div className='space-y-2'>
                        <label className="label text-xl font-semibold">Images url</label>
                        <input type="text" name='photo' defaultValue={user?.photoURL} placeholder="Images url" className="input w-full input-success" />
                    </div>
                    <div className='space-y-2'>
                        <label className="label text-xl font-semibold">Date</label>
                        <input type="text" name='date' value={date} placeholder="Images url" className="input w-full input-success" />
                    </div>
                    <div className='md:col-span-2'>
                        <textarea rows={6} type="text" name='description' placeholder="Enter your description" className="resize-none textarea w-full textarea-success"></textarea>
                    </div>
                    <div className='md:col-span-2'>
                        <button type='submit' className='btn btn-success w-full'>Post your feedback</button>
                    </div>
                </form>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default GetFeedback;