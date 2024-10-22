import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({
        username: '',
        password: '',
    });

    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        const newError = { ...error };

        if (!username.trim()) {
            newError.username = 'Username is required';
        } else {
            newError.username = '';
        }

        if (!password.trim()) {
            newError.password = 'Password is required';
        } else {
            newError.password = '';
        }

        setError(newError);

        if (newError.username || newError.password) {
            return;
        } else {
            localStorage.setItem("user", username);
            localStorage.setItem("password", password);
            // alert('Login successful!', { username, password });
            navigate('/dashboard');
        }

    };

    return (
        <div className='flex flex-col justify-center items-center my-auto h-screen'>
            <h2 className='text-2xl font-bold'>Login to Cart</h2>
            <div className='w-fit p-4 my-3 rounded-md flex justify-center items-center bg-gray-300'>
                <form onSubmit={handleSubmit}>
                    <div className='my-3 p-3 flex'>
                        <label htmlFor="username">Username:</label>
                        <section className='mx-2'>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                className='p-1 rounded'
                                placeholder='Username'
                            />
                            {error.username && <p className="error text-sm mt-1 text-red-500">{error.username}</p>}
                        </section>
                    </div>
                    <div className='my-3 p-3 flex'>
                        <label htmlFor="password">Password:</label>
                        <section className='mx-2'>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className='p-1 rounded'
                                placeholder='Password'
                            />
                            {error.password && <p className="error text-sm mt-1 text-red-500">{error.password}</p>}
                        </section>
                    </div>
                    <div className='flex justify-center'>
                        <button type="submit" className='font-bold w-fit py-2 px-4 rounded-md bg-black text-white'>Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
