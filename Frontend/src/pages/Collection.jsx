import React from 'react'
import { Filter } from '../components/Filter'
import { SearchBar } from '../components/SearchBar'

export const Collection = () => {
  return (
    <div className='border-t'>
      <SearchBar/>
      <Filter/>
    </div>
  )
}
