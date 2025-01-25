import React from 'react'

export const Title = ({text1, text2}) => {
  return (
    <div className='flex items-center gap-2'>
        <p className='text-gray-600'>{text1} <span className='text-gray-800 font-medium'>{text2}</span></p>
        <hr className='h-[2px] w-12 bg-gray-700 border-none' />
    </div>
  )
}
