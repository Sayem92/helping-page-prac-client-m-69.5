import React from 'react';
import SiteMenu from '../registerList/SiteMenu';

const AddEvent = () => {
    return (
        <div className='m-4'>
            <div className='grid lg:grid-cols-6 gap-3'>
                <SiteMenu></SiteMenu>
                <div className="overflow-x-auto col-span-5 border p-2">
                    <h1 className='text-2xl font-semibold p-4 text-yellow-400'>Add Event</h1>
                    <div>
                        <div>
                            <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
                            <textarea className="textarea textarea-success" placeholder="Bio"></textarea>
                        </div>
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddEvent;