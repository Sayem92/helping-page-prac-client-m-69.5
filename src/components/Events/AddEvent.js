import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import SiteMenu from '../registerList/SiteMenu';
import { Example } from './Example';

const AddEvent = () => {

    const navigate = useNavigate()

    const handleAddEvents= e =>{
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const description = form.description.value;
        // const date = form.date;
        const img = form.img.value;
        // console.log(title, description, img);

        const addEvent = {
            title,
            description,
            img
        }


        fetch('http://localhost:5000/addEvent',{
            method: "POST",
            headers: {
                "content-type" : "application/json"
            },
            body: JSON.stringify(addEvent)
        })
        .then(res=> res.json())
        .then(data => {
            toast.success("add event successfully")
            form.reset()
            console.log(data)
            navigate('/showEvent')

           
        })


    }




    return (
        <div className='m-4 '>
            <div className='grid lg:grid-cols-6 gap-3'>
                <SiteMenu></SiteMenu>
                <div className="overflow-x-auto col-span-5 border p-12 bg-slate-100 rounded-lg">
                    <h1 className='text-3xl font-semibold p-4 text-yellow-400'>Add Event</h1>
                    <form onSubmit={handleAddEvents}>
                    <div className='grid grid-cols-2 gap-5'>
                        <div >
                            <label className='py-2 text-2xl'>Enter Title</label>
                            <input type="text" name='title' placeholder="Enter title" className="my-3 w-full input input-bordered input-accent block" required/>

                            <label className=' text-2xl'>Description</label>
                            <textarea name='description' className=" mt-3  w-full textarea textarea-success block" placeholder="Description" required></textarea>
                        </div>

                        <div>
                            <label className=' text-2xl'>Event Date</label>
                            <Example></Example>

                            <label className=' text-2xl'>Banner</label>

                            <input type="text" name='img' placeholder="Img Upload" className="mt-3 w-full input input-bordered input-accent block" required/>
                        </div>
                    </div>
                    <button type='submit' className="btn btn-info text-white  mt-2">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;