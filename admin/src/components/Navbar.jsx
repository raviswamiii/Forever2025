import React from 'react'
import {assets} from "../assets/assets.js"

export const Navbar = () => {
  return (
    <div className='flex justify-between items-center px-16 py-3'>
        <img className='w-[18%]' src={assets.logo} alt="" />
        <button className='bg-gray-600 text-white px-5 py-2 rounded-full text-sm'>Logout</button>
    </div>
  )
}
