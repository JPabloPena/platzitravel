import React from 'react'
import HomeIcon from '../icons/HomeIcon'
import SearchIcon from '../icons/SearchIcon'
import HeartIcon from '../icons/HeartIcon'
import MoonIcon from '../icons/MoonIcon'
import QuestionIcon from '../icons/QuestionIcon'

function TabBar () {
  return (
    <nav id='tab-bar' className='w-full h-16 bg-white fixed bottom-0 shadow-md flex space-x-8 justify-center items-center'>
      <a href='#home'>
        <HomeIcon className='fill-current text-gray-200' />
      </a>
      <a href='#recommended'>
        <SearchIcon className='fill-current text-primary' />
      </a>
      <a href='#outstandingPlaces'>
        <HeartIcon className='fill-current text-gray-200' />
      </a>
      <button>
        <MoonIcon className='fill-current text-gray-200' />
      </button>
      <a href='#faqs'>
        <QuestionIcon className='fill-current text-gray-200' />
      </a>
    </nav>
  )
}

export default TabBar
