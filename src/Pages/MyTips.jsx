import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { NavLink } from 'react-router';
import Swal from 'sweetalert2';


const MyTips = () => {

    const [myTips, setMyTips] = useState(null);
    const { user } = useContext(AuthContext);

    useEffect(() => {
        fetch(`https://gardening-server-six.vercel.app/myTips/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setMyTips(data)
            })
    }, [user])

    const handleTipsDelete = (id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://gardening-server-six.vercel.app/myTips/${id}`, { method: 'DELETE' })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const remaining = myTips.filter(single => single._id !== id);
                            setMyTips(remaining);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });

    }



    return (
        <div className="overflow-x-auto bg-base-300 py-8 bg rounded-xl p-4">
            <h1 className='text-success text-3xl md:text-4xl my-8 text-center font-bold'> My Garden Tips (total: {myTips?.length})</h1>
            <table className={`table w-full `}>
                {/* head */}
                <thead className='bg-gray-300 text-xl font-bold text-black'>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th className='text-center'>Update</th>
                        <th className='text-center'>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        myTips?.map(tips => <tr
                            key={tips._id}
                        >
                            <td className='py-10'>{tips.title}</td>
                            <td>{tips.category}</td>
                            <td>{tips.availability}</td>
                            <td className='text-center'><NavLink to={`/updateTip/${tips._id}`} className={'btn btn-success'}>Update</NavLink></td>
                            <td className='text-center'><button onClick={() => handleTipsDelete(tips._id)} className='btn btn-error'>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyTips;