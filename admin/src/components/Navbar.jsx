import React from 'react'
import {assets} from "../assets/assets.js"

export const Navbar = ({setToken}) => {
  return (
    <div className='flex justify-between items-center sm:px-16 px-6 py-3'>
        <img className='h-[15vw] sm:h-[6vw]' src={assets.logo} alt="" />
        <button onClick={()=>setToken('')} className='bg-gray-600 text-white sm:px-5 px-3 sm:py-2 py-1 rounded-full sm:text-sm text-xs'>Logout</button>
    </div>
  )
}
