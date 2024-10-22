import React from 'react'
import NavBar from '../NavBar'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
    const navigate = useNavigate();
    return (
        <div>
            <NavBar />
            <div className='mt-3 flex justify-around'>
                <button className='bg-gray-300 hover:bg-gray-400 w-full p-4 rounded mx-2 text-center' onClick={() => navigate("/products")}>
                    Products
                </button>
                <button className='bg-gray-300 hover:bg-gray-400 w-full p-4 rounded mx-2 text-center' onClick={() => navigate("/users")}>
                    Users
                </button>
            </div>
        </div>
    )
}

export default Dashboard