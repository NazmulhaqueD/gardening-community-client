import React, { useContext } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import Swal from 'sweetalert2';

const ShareTips = () => {

    const { user } = useContext(AuthContext);

    const handleShareTips = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const shareTipsData = Object.fromEntries(formData.entries());

        // fetch post data in mongodb
        fetch('http://localhost:5000/shareTips', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(shareTipsData),
        })
            .then(res => res.json())
            .then(data => {
                if (data?.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "You share a garden tip successfully!",
                        showConfirmButton: false,
                        timer: 2500
                    });
                }
            })
    }

    return (
        <div className='bg-base-200 rounded-2xl py-8 px-4'>
            <h1 className='text-success text-4xl font-bold my-8 text-center'>Share A Garden Tips</h1>

            <div className='w-full md:w-9/12 mx-auto '>
                <form onSubmit={handleShareTips} className='grid grid-cols-1 md:grid-cols-2 gap-8 inset-shadow-sm inset-shadow-indigo-500/50 rounded-2xl p-8'>
                    <div className='space-y-2'>
                        <label className="label text-xl font-semibold">Name</label>
                        <input type="text" name='name' value={user?.displayName} className="input w-full input-success" />
                    </div>
                    <div className='space-y-2'>
                        <label className="label text-xl font-semibold">Email</label>
                        <input type="text" name='email' value={user?.email} className="input w-full input-success" />
                    </div>
                    <div className='space-y-2'>
                        <label className="label text-xl font-semibold">Title</label>
                        <input type="text" name='title' placeholder="Title" className="input w-full input-success" />
                    </div>
                    <div className='space-y-2'>
                        <label className="label text-xl font-semibold">Plant Type/Topic</label>
                        <input type="text" name='type' placeholder="Plant Type/Topic" className="input w-full input-success" />
                    </div>
                    <div className='space-y-2'>
                        <label className="label text-xl font-semibold">Difficulty Level</label>
                        <select defaultValue="Color scheme" name='Level' className="select w-full select-accent">
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </div>
                    <div className='space-y-2'>
                        <label className="label text-xl font-semibold">Category </label>
                        <select defaultValue="Color scheme" name='category' className="select w-full select-accent">
                            <option>Composting</option>
                            <option>Plant Care</option>
                            <option>Vertical Gardening</option>
                        </select>
                    </div>
                    <div className='space-y-2'>
                        <label className="label text-xl font-semibold">Availability </label>
                        <select defaultValue="Color scheme" name='availability' className="select w-full select-accent">
                            <option>Public</option>
                            <option>Hidden</option>
                        </select>
                    </div>
                    <div className='space-y-2'>
                        <label className="label text-xl font-semibold">Images url</label>
                        <input type="text" name='photo' placeholder="Images url" className="input w-full input-success" />
                    </div>
                    <div className='md:col-span-2'>
                        <textarea rows={6} type="text" name='description' placeholder="Enter your description" className="resize-none textarea w-full textarea-success"></textarea>
                    </div>
                    <div className='md:col-span-2'>
                        <button className='btn btn-success w-full'>submit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ShareTips;