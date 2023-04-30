import React, { useEffect, useState } from 'react'
import { Checkbox } from '@mantine/core'
import { FiTrash2 } from 'react-icons/fi'
import { BiEditAlt } from 'react-icons/bi'
import axios from 'axios'


const Task = () => {
    const [apiData, setApiData] = useState([])

    // API REQUEST FOR FETCHING DATA
    useEffect(() => {
        axios.get(`https://644c6a5057f12a1d3dcabf3e.mockapi.io/data`)
            .then((response) => {
                setApiData(response.data)
            })
    }, [])

    const displayData = (id) => {
        const finalData = apiData.filter((result) => result.id === id)
        setApiData(finalData)
    }
    console.log(displayData)

    // API REQUEST FOR DELETING DATA
    const handleDelete = async (id) => {
        try {
            await axios({
                method: 'DELETE',
                url: `https://644c6a5057f12a1d3dcabf3e.mockapi.io/data/${id}`,
                headers: { 'Content-Type': 'application/json' }
            })
            const results = apiData.filter((result) => result.id !== id)
            setApiData(results)
        } catch (err) {
            console.log(err)
        }
    }
    return (
        <div className='mt-6'>
            {apiData.map((data, id) => (
                <div key={id} className='text-lg mt-5'>
                    <div className='w-fit flex items-center'>
                        <FiTrash2 onClick={() => handleDelete(data.id)} className='text-xl hover:cursor-pointer' />
                        <Checkbox className='p-4 hover:cursor-pointer' />
                        {data.task}
                        <BiEditAlt className='cursor-pointer' />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Task