import React, { useState } from 'react';
import taskifyLogo from '../../assets/taskify-logo-green.png'; 

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
            {/* Taskify Title and Logo */}
            <div className='absolute top-5 left-5 flex items-center space-x-2 sm:space-x-4'>
                {/* Logo */}
                <img src={taskifyLogo} alt="Taskify Logo" className="h-16 sm:h-24 w-auto" />
                {/* Title */}
                <div className='text-3xl sm:text-5xl font-extrabold text-emerald-600'>
                    Taskify
                </div>
            </div>

            <div className='border-2 rounded-xl border-emerald-600 p-6 sm:p-20'>
                <form
                    onSubmit={submitHandler}
                    className='flex flex-col items-center justify-center'
                >
                    <input
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }}
                        required
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-base sm:text-lg py-2 px-6 rounded-full placeholder:text-gray-400'
                        type="email"
                        placeholder='Enter your email'
                    />
                    <input
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                        required
                        className='outline-none bg-transparent border-2 border-emerald-600 font-medium text-base sm:text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400'
                        type="password"
                        placeholder='Enter password'
                    />
                    <button className='mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-base sm:text-lg py-2 px-8 w-full rounded-full'>
                        Log in
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login;
