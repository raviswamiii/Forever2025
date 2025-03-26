import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

export const Sidebar = () => {
  return (
    <div className='border-r border-gray-300 w-[18%] h-screen text-sm flex flex-col gap-3 pt-6 pl-10'>
        <NavLink to="/add" className='flex gap-3 border border-gray-300 border-r-0 py-3 pl-3 rounded-l cursor-pointer'>
            <img className='h-5' src={assets.add_icon} alt="" />
            <p>Add Items</p>
        </NavLink>
        <NavLink to="/list" className='flex gap-3 border border-gray-300 border-r-0 py-3 pl-3 rounded-l cursor-pointer'>
            <img className='h-5' src={assets.order_icon} alt="" />
            <p>List Items</p>
        </NavLink>
        <NavLink to="/orders" className='flex gap-3 border border-gray-300 border-r-0 py-3 pl-3 rounded-l cursor-pointer'>
            <img className='h-5' src={assets.order_icon} alt="" />
            <p>Orders</p>
        </NavLink>
    </div>
  )
}
