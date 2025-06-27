import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { toast } from 'react-toastify';

const ContactUs = () => {

    const { user } = useContext(AuthContext)

    const handleContactUs = (e) => {
        e.preventDefault();
        toast.success('Your response has been recorded')
        e.target.reset();
    }

    return (
        <div className='bg-base-200 rounded-2xl py-8 px-4 mt-28'>
            <h1 className='text-success text-4xl font-bold my-8 text-center'>Share A Garden Tips</h1>

            <div className='max-w-md mx-auto  '>
                <form onSubmit={handleContactUs} className='space-y-6 inset-shadow-sm inset-shadow-indigo-500/50 rounded-2xl p-8'>
                    <div className='space-y-2'>
                        <label className="label text-xl font-semibold">Name</label>
                        <input type="text" name='name' value={user?.displayName} className="input w-full input-success" />
                    </div>
                    <div className='space-y-2'>
                        <label className="label text-xl font-semibold">Email</label>
                        <input type="text" name='email' value={user?.email} className="input w-full input-success" />
                    </div>

                    <div className='w-full'>
                        <textarea required rows={6} type="text" name='description' placeholder="Enter your description" className="resize-none textarea w-full textarea-success"></textarea>
                    </div>
                    <div className='md:col-span-2'>
                        <button className='btn btn-success w-full'>submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;