import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.webp';
import { BsFillPeopleFill } from "react-icons/bs";


const SiteMenu = () => {
    return (
        <div className='border'>
            <div className='flex justify-center items-center'>
                <img className='h-20 w-20 ' src={logo} alt="" />
                <h1 className='text-2xl font-bold text-blue-500'>Helping Team</h1>
            </div>

            <aside className="w-full p-2  sm:w-60 dark:bg-gray-900 dark:text-gray-100">
                <nav className="space-y-8 text-sm">
                    <div className="space-y-2">
                        <div className='flex justify-start items-center text-blue-600'>
                            <BsFillPeopleFill />
                            <p className="text-sm ml-2 font-semibold   dark:text-gray-400">Volunteer Register List</p>
                        </div>
                        <div className="flex flex-col space-y-1 text-xl font-medium">
                            <Link to='/'>+ Add Event</Link>

                        </div>
                    </div>
                </nav>
            </aside>
        </div>
    );
};

export default SiteMenu;