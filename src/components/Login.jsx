import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <form className="w-full flex flex-col justify-center items-center h-[715px]">
            <div className='w-80 p-8'>
                <input
                    className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm cursor-pointer mb-5"
                    type="text"
                    placeholder="username*"
                />
                <input
                    className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm cursor-pointer mb-1"
                    type="password"
                    placeholder="Password*"
                />
                <span className='ml-36 text-xs text-[#4a4a4a] cursor-pointer'>Forget Password?</span>

                <button className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition cursor-pointer mt-5 mb-2">Login</button>
                <div className='text-sm text-[#4a4a4a] cursor-pointer'>Don't have account? <Link to={'/signup'} className='text-violet-700'>Signup</Link></div>
            </div>
        </form>
    );
}

export default Login;
