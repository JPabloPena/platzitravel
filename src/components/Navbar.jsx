import { useContext } from 'react'
import SearchIcon from '../icons/SearchIcon'
import MoonIcon from '../icons/MoonIcon'
import { DarkModeContext } from '../context/DarkModeContext'

function Navbar () {
  const { toggleDarkMode } = useContext(DarkModeContext)

  return (
    <nav className='w-full h-16 hidden bg-white p-4 lg:flex lg:items-center lg:justify-between dark:bg-gray-800'>
      <a href='#' className='flex space-x-2'>
        <img src='../../public/plane.svg' className='w-7' />
        <p className='text-xl text-primary font-bold dark:text-white'>PlatziTravel</p>
      </a>
      <div className='flex space-x-8 font-bold text-primary dark:text-white'>
        <a href='#home' className='hover:text-tertiary'>Home</a>
        <a href='#recommended' className='hover:text-tertiary'>Recommended</a>
        <a href='#outstandingPlaces' className='hover:text-tertiary'>Outstanding</a>
        <a href='#faqs' className='hover:text-tertiary'>FAQs</a>
        <a href='#about' className='hover:text-tertiary'>About</a>
      </div>
      <div className='flex space-x-2'>
        <button className='hover:cursor-pointer'>
          <SearchIcon className='fill-current text-gray-200 dark:text-white' />
        </button>
        <button className='dark-mode-toggle hover:cursor-pointer' onClick={toggleDarkMode}>
          <MoonIcon className='fill-current text-primary dark:text-yellow-200' />
        </button>
      </div>
    </nav>
  )
}

export default Navbar
