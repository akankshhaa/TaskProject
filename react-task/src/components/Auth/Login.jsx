import React, { useState } from 'react';
import TaskifyLogo from '../TaskifyLogo';  

const Login = ({ handleLogin }) => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        handleLogin(email, password);
        setEmail("");
        setPassword("");
    };

    return (
        <div className='flex h-screen w-screen items-center justify-center'>
            {/* Taskify Title and Logo (TaskifyLogo Component) */}
            <div className='absolute top-1 left-1 flex items-center space-x-1'>
                {/* Using the TaskifyLogo component */}
                <TaskifyLogo />
                {/* Title */}
                <div className='text-4xl font-extrabold text-emerald-600'>
                    Taskify
                </div>
            </div>

            <div className='border-2 rounded-xl border-emerald-600 p-20'>
                <form
                    onSubmit={(e) => {
                        submitHandler(e)
                    }}
                    className='flex flex-col items-center justify-center'
                >
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400'
                        type="email"
                        placeholder='Enter your email'
                    />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400'
                        type="password"
                        placeholder='Enter password'
                    />
                    <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full'>
                        Log in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;
