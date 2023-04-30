import React, { useState } from 'react'
import { Input } from '@mantine/core'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { CgAddR } from 'react-icons/cg'
import axios from 'axios'



const NewTask = () => {
    const [isShown, setIsShown] = useState(false)
    const [task, setTask] = useState('')
    const postData = () => {
        axios.post(`https://644c6a5057f12a1d3dcabf3e.mockapi.io/data`, {
            task
        })
    }
    const handleClick = () => {
        setIsShown(current => !current)
    }


    return (
        <>
            <div onClick={handleClick} className='text-[#B47AEA] text-xl font-bold hover:underline cursor-pointer flex items-center w-fit mt-24'>
                <IoIosAddCircleOutline className='text-2xl' />
                <h1 className='ml-3'>Add New Task</h1>
            </div>
            {isShown ? (
                <div className='mt-5'>
                    <Input
                        className='w-'
                        name='task'
                        onChange={(e) => setTask(e.target.value)}
                        placeholder='Enter A New Task'
                        rightSection={
                            <CgAddR onClick={postData} type='submit' className='cursor-pointer text-[#B47AEA]' />
                        }
                    />
                </div>
            ) : null}
        </>
    )
}

export default NewTask