import React from 'react'

function Footer () {
  return (
    <footer id='about' className='bg-gray-200/60 mt-12 p-6 pb-[88px] flex flex-col space-y-2'>
      <h2 className='text-lg'>About Us</h2>
      <ul>
        <li><a href='#' className='text-sm text-gray-500'>Investors</a></li>
        <li><a href='#' className='text-sm text-gray-500'>Employment</a></li>
        <li><a href='#' className='text-sm text-gray-500'>Terms and Conditions</a></li>
        <li><a href='#' className='text-sm text-gray-500'>Platzi Travel, Inc.</a></li>
      </ul>
      <p className='text-sm text-center mt-2 text-gray-800'>
        Developed by ⚡ <a className='underline underline-offset-4 transition-all duration-300 ease-in-out' href='https://github.com/JPabloPena/platzitravel'>JPabloPena</a> - 2025
      </p>
    </footer>
  )
}

export default Footer
