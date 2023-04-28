import React from 'react'
import { IoIosAddCircleOutline } from 'react-icons/io'

const NewTask = () => {
    return (
        <div className='text-[#B47AEA] font-bold'>
            <IoIosAddCircleOutline className='inline-block' />
            <h1>Add New Task</h1>
        </div>
    )
}

export default NewTask