import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Auth/AuthProvider';
import { NavLink } from 'react-router';
import Swal from 'sweetalert2';


const MyTips = () => {

    const [myTips, setMyTips] = useState(null);
    const { user } = useContext(AuthContext);
    console.log(myTips)

    useEffect(() => {
        fetch(`http://localhost:5000/myTips/${user?.email}`)
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
                fetch(`http://localhost:5000/myTips/${id}`, { method: 'DELETE' })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            const remaining = myTips.filter(single => single._id !== id);
                            console.log(data)
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
        <div className="overflow-x-auto bg-base-300 py-8 bg">
            <h1 className='text-success text-3xl md:text-4xl my-8 text-center font-bold'> My Garden Tips (total: {myTips?.length})</h1>
            <table className="table w-full md:max-w-8/12 mx-auto">
                {/* head */}
                <thead className='bg-gray-300 text-xl font-bold text-black'>
                    <tr>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Date</th>
                        <th>Update</th>
                        <th>Delete</th>
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
                            <td>12/08/2025</td>
                            <td><NavLink to={`/updateTip/${tips._id}`} className={'btn btn-success'}>Update</NavLink></td>
                            <td><button onClick={() => handleTipsDelete(tips._id)} className='btn btn-error'>Delete</button></td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyTips;