import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router';
import { AuthContext } from '../Auth/AuthProvider';
import Swal from 'sweetalert2';

const UpdateTip = () => {
    const { id } = useParams();
    const { user } = useContext(AuthContext)
    const tips = useLoaderData();
    console.log(tips);

    const handleUpdateTips = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateTipsData = Object.fromEntries(formData.entries());
        // console.log(updateTipsData)

        fetch(`http://localhost:5000/updateTips/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(updateTipsData),
        })
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Your tips updated successfully",
                        showConfirmButton: false,
                        timer: 1500
                    });
                }
            })
    }

    return (
        <div className='bg-base-200 rounded-2xl py-8 px-4'>
            <h1 className='text-success text-2xl md:text-4xl font-bold my-8 text-center'>🌿 Edit Your Shared Tip
            </h1>

            <div className='w-full md:w-9/12 mx-auto'>
                <form onSubmit={handleUpdateTips} className='grid grid-cols-1 md:grid-cols-2 gap-8 inset-shadow-sm inset-shadow-indigo-500/50 rounded-2xl p-8'>
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
                        <input type="text" name='title' defaultValue={tips.title} placeholder="Title" className="input w-full input-success" />
                    </div>
                    <div className='space-y-2'>
                        <label className="label text-xl font-semibold">Plant Type/Topic</label>
                        <input type="text" name='type' defaultValue={tips.type} placeholder="Plant Type/Topic" className="input w-full input-success" />
                    </div>
                    <div className='space-y-2'>
                        <label className="label text-xl font-semibold">Difficulty Level</label>
                        <select defaultValue={tips.Level} name='Level' className="select w-full select-accent">
                            <option disabled value="">-- Select Category --</option>
                            <option>Easy</option>
                            <option>Medium</option>
                            <option>Hard</option>
                        </select>
                    </div>
                    <div className='space-y-2'>
                        <label className="label text-xl font-semibold">Category </label>
                        <select defaultValue={tips.category} name='category' className="select w-full select-accent">
                            <option>Composting</option>
                            <option>Plant Care</option>
                            <option>Vertical Gardening</option>
                        </select>
                    </div>
                    <div className='space-y-2'>
                        <label className="label text-xl font-semibold">Availability </label>
                        <select defaultValue={tips.availability} name='availability' className="select w-full select-accent">
                            <option>Public</option>
                            <option>Hidden</option>
                        </select>
                    </div>
                    <div className='space-y-2'>
                        <label className="label text-xl font-semibold">Images url</label>
                        <input type="text" name='photo' defaultValue={tips.photo} placeholder="Images url" className="input w-full input-success" />
                    </div>
                    <div className='md:col-span-2'>
                        <textarea rows={6} type="text" name='description' defaultValue={tips.description} placeholder="Enter your description" className="resize-none textarea w-full textarea-success"></textarea>
                    </div>
                    <div className='md:col-span-2'>
                        <button type='submit' className='btn btn-success w-full'>Save Changes</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateTip;