import React from 'react'
import SearchIcon from '../icons/SearchIcon'
import MoonIcon from '../icons/MoonIcon'

function Navbar () {
  return (
    <nav className='w-full h-16 hidden bg-white p-4 lg:flex lg:items-center lg:justify-between'>
      <a href='#' className='flex space-x-2'>
        <img src='../../public/plane.svg' className='w-7' />
        <p className='text-xl text-primary font-bold'>PlatziTravel</p>
      </a>
      <div className='flex space-x-8'>
        <a href='#home' className='font-bold text-primary hover:text-tertiary'>Home</a>
        <a href='#recommended' className='font-bold text-primary hover:text-tertiary'>Recommended</a>
        <a href='#outstandingPlaces' className='font-bold text-primary hover:text-tertiary'>Outstanding</a>
        <a href='#faqs' className='font-bold text-primary hover:text-tertiary'>FAQs</a>
        <a href='#about' className='font-bold text-primary hover:text-tertiary'>About</a>
      </div>
      <div className='flex space-x-2'>
        <SearchIcon />
        <MoonIcon className='fill-current text-primary' />
      </div>
    </nav>
  )
}

export default Navbar
