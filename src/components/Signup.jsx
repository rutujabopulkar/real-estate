import React from 'react';
import { Link } from 'react-router-dom';

const Signup = () => {
    return (
        <form className="w-full flex flex-col justify-center items-center h-[715px]">
            <div className='w-80 p-8'>
                <input
                    className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm cursor-pointer mb-5"
                    type="text"
                    placeholder="username*"
                />
                <input
                    className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm cursor-pointer mb-5"
                    type="password"
                    placeholder="Password*"
                />
                <input
                    className="border border-gray-300 focus:border-violet-700 outline-none rounded w-full px-4 h-14 text-sm cursor-pointer mb-5"
                    type="password"
                    placeholder="Re-enter Password*"
                />

                <button className="bg-violet-700 hover:bg-violet-800 text-white rounded p-4 text-sm w-full transition cursor-pointer mb-2">Signup</button>
                <div className='text-sm text-[#4a4a4a] cursor-pointer'>Already have account? <Link to={'/login'} className='text-violet-700'>Login</Link></div>
            </div>
        </form>
    );
}

export default Signup;
