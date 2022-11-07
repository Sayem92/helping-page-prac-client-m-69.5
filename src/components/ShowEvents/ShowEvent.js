import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Navbar from '../Home/Navbar/Navbar';

const ShowEvent = () => {
    const [event, setEvent] = useState([])

    useEffect(() => {
        
            fetch('http://localhost:5000/addEvent')
                .then(res => res.json())
                .then(data => setEvent(data))


        }, []);
   
// console.log(event);

    return (
        <div>
            <Navbar></Navbar>

            <div className='grid grid-cols-2 gap-10 mx-40 my-20 bg-slate-100 p-10 rounded-lg'>

                {
                    event?.map(eve =>   <div key={eve._id} className="card lg:card-side bg-base-100 shadow-xl">
                    <figure>
                        <img src={eve?.img} alt="Album" />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">{eve?.title}</h2>
                        <p>date dekaw oita baki</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Cancel</button>
                        </div>
                    </div>
                </div> )
                }
              
            </div>
        </div>
    );
};

export default ShowEvent;