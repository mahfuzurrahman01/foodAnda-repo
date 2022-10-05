import React from 'react';
import Navbar from '../Navbar/Navbar';

const Login = () => {
    return (
        <div className='h-full'>
            <Navbar></Navbar>
            <div className='flex md:flex-row flex-col bg-gray-400 bg-opacity-50 w-3/4 mx-auto mt-28 justify-center items-center'>
                <div className='md:w-1/2 m-10 bg-orange-400 bg-opacity-30 p-7 flex flex-col justify-center'>
                    <h1 className='text-rose-900 font-semibold text-2xl'>Sign in</h1>
                    <div className='flex gap-4 justify-center my-1'>
                        <span className='text-2xl text-rose-900 '><i class="fa-brands fa-facebook"></i></span>
                        <span className='text-2xl text-rose-900 '><i class="fa-brands fa-google-plus"></i></span>
                        <span className='text-2xl text-rose-900 '><i class="fa-brands fa-linkedin"></i></span>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <input type="text" className='py-2 rounded-md px-3 bg-gray-700 bg-opacity-50' placeholder='User Email'/>
                        <input type="text" className='py-2 rounded-md px-3 bg-gray-700 bg-opacity-50' placeholder='password'/>
                        <p className='underline cursor-pointer'>Forget password?</p>
                        <button className='bg-rose-900 py-1 px-3 rounded-md mt-2 text-white' type="submit">Sign in</button>
                    </div>
                </div>
                <div className='md:w-1/2 m-10 bg-blue-400 bg-opacity-30 p-7 flex flex-col justify-center '>
                      <h1 className='text-2xl font-semibold text-white'>Sign Up</h1>
                      <p className='text-xl font-light'>Sign up here if you don't have account</p>
                      <button className='bg-rose-900 py-1 px-3 rounded-md mt-2 text-white' type="submit">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Login;