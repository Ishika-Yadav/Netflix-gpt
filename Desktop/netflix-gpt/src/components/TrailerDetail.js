import React from 'react'
 import { FaPlay } from "react-icons/fa";
 import { BsInfoCircle } from "react-icons/bs";

const TrailerDetail = ({title,discription}) => {
  return (
    <div className='pt-66 px-12 absolute text-white'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{discription}</p>
        <div className='flex '>
            <button className='mx-2 flex items-center gap-x-3   rounded-md text-black bg-white p-3 px-8 font-bold   hover:bg-opacity-75  '> <FaPlay size={24}/> PLAY</button>
            <button className=' flex items-center gap-x-3  bg-gray-500 bg-opacity-75 rounded-md  text-black p-3 px-8 font-bold  bg-opacity-75  '><BsInfoCircle size={24} />More Info</button>
        </div>
    </div>
  )
}

export default TrailerDetail