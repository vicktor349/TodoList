import { Checkbox } from '@mantine/core'
import React from 'react'
import { FiTrash2 } from 'react-icons/fi'

const Task = () => {
    return (
        <div className='text-lg mt-6'>
            <div className='w-fit flex items-center'>
                <FiTrash2 className='text-xl' />
                <Checkbox className='p-4' />
                <p >Morning Walk</p>
            </div>
            <div className='w-fit flex items-center'>
                <FiTrash2 className='text-xl' />
                <Checkbox className='p-4' />
                <p >Lunch</p>
            </div>
            <div className='w-fit flex items-center'>
                <FiTrash2 className='text-xl' />
                <Checkbox className='p-4' />
                <p >Dinner with Shobit</p>
            </div>
            <div className='w-fit flex items-center'>
                <FiTrash2 className='text-xl' />
                <Checkbox className='p-4' />
                <p >Night Reading</p>
            </div>
        </div>
    )
}

export default Task