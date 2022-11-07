import React from 'react';
import logo from '../../assets/logo.webp'
import google from '../../assets/Google.png'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { authContext } from '../../contexts/AuthProvider';
import toast from 'react-hot-toast';

const Login = () => {
    const { googleLogin } = useContext(authContext);


    const handleGoogleLogin = () => {
        googleLogin()
            .then(result => {
                console.log(result.user);
                toast.success('Login successfully')
            })
            .then(error => console.log(error))
    }


    return (
        <div className='mb-20'>
            <div className='flex justify-center items-center my-5'>
                <img className='h-20 w-20 ml-5' src={logo} alt="" />
                <h1 className='text-2xl text-center font-bold text-blue-500'>Helping Team</h1>
            </div>

            <div className='lg:mx-96 border lg:p-20 rounded-lg bg-slate-100'>
                <h1 className='text-3xl text-center font-bold text-yellow-400 mb-16'>Login with</h1>
                <div onClick={handleGoogleLogin} className='flex justify-between items-center rounded-2xl border border-gray-500 p-2 mb-3'>
                    <img className='w-8 h-8' src={google} alt="" />
                    <p className='font-medium'>Continue with Google</p>
                </div>

                <p>Don't have an account? <Link to='/register' className='text-blue-500 underline'>Create an account</Link></p>
            </div>
        </div>
    );
};

export default Login;