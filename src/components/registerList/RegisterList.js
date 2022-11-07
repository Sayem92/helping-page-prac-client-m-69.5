import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import SiteMenu from './SiteMenu';


const RegisterList = () => {
    const [volunteers, setVolunteers] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/volunteers')
            .then(res => res.json())
            .then(data => setVolunteers(data))


    }, []);

    const handleDelete = id => {
        const agree = window.confirm("Are you sure delete volunteer!")
        if (agree) {
            fetch(`http://localhost:5000/volunteer/${id}`, {
                method: "DELETE",
            })
                .then(res => res.json())
                .then(data => {
                    if(data.deletedCount > 0){
                        toast.success("Delete volunteer successfully")
                        console.log(data)
                   const remaining = volunteers.filter(vlo => vlo._id !== id) 
                   setVolunteers(remaining)    
                    }
                })
        }


    }

    return (
        <div className='m-4'>

            <div className='grid lg:grid-cols-6 gap-3'>
                <SiteMenu></SiteMenu>
                <div className="overflow-x-auto col-span-5 border p-2">
                    <h1 className='text-2xl font-semibold p-4 text-yellow-400'>Volunteer Register List</h1>
                    <table className="table table-compact w-full">
                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>Email ID</th>
                                <th>Registration Date</th>
                                <th>Volunteer List</th>
                                <th>Action</th>

                            </tr>
                        </thead>
                        <tbody>

                            {
                                volunteers?.map(vlo => <tr key={vlo._id}>
                                    <td>{vlo?.name}</td>
                                    <td>{vlo?.email}</td>
                                    <td>{vlo?.date}</td>
                                    <td>{vlo?.book}</td>
                                    <td>
                                        <button onClick={() => handleDelete(vlo._id)}
                                            className="btn bg-white border-none gap-2">
                                            ❌
                                        </button>
                                    </td>
                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RegisterList;




