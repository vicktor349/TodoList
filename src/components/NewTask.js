import React from 'react'
import { IoIosAddCircleOutline } from 'react-icons/io'


const NewTask = () => {
    return (
        <div className='text-[#B47AEA] text-xl font-bold hover:underline cursor-pointer flex items-center w-fit mt-24'>
            <IoIosAddCircleOutline className='text-2xl' />
            <h1 className='ml-3'>Add New Task</h1>
        </div>
    )
}

export default NewTask