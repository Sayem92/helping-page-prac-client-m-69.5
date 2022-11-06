import React from 'react';
import Navbar from '../Navbar/Navbar';

const Home = () => {
    return (
        <div>

            <figure class="relative  transition-all duration-300 cursor-pointer filter ">
                <p>
                    <img class="rounded-lg w-full opacity-20" src="https://i.ibb.co/QfdFqKW/1000-F-368745661-Tyh-VZ2-Hho-QS1-Fcr0-ZEOv-Rcglu-SIp-Nmzh.jpg" alt="caption description " />
                </p>

                <figcaption class="absolute top-6 w-full ">
                    <Navbar></Navbar>
                    <h1 className='text-center font-bold text-5xl text-orange-500'>I make by helping people teams</h1>

                    <fieldset className="mt-10 w-full space-y-1 text-gray-100">

                        <div className="flex justify-center items-center">
                            <input type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs" />
                            <button className="ml-1 btn btn-success">Search</button>
                        </div>
                    </fieldset>

                </figcaption></figure>

        </div>

    );
};

export default Home;