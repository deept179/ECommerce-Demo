import React from 'react'

const NavBar = () => {
    const item = 1;
    return (
        <div className='flex justify-between m-2'>
            <div className='font-bold text-lg'>
                Welcome to the Cart
            </div>
            <div className='flex flex-col items-center'>
                <p className='bg-gray-200 rounded-full px-3 py-1 h-fit'>{item ? item : 0}</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-width="2" d="M5 5h17l-2 9H7L4 2H0m7 12l1 4h13m-2 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2ZM9 23a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z" /></svg>
            </div>
        </div>
    )
}

export default NavBar