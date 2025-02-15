import React from 'react'

function Home () {
  return (
    <section id='home' className='h-[563px] lg:h-3/4'>
      <div className='w-full h-full'>
        <div className='w-full h-full relative bg-sanFrancisco lg:bg-sanFranciscoDesktop bg-cover lg:bg-center'>
          <div className='w-full flex flex-col absolute space-y-96 py-4 items-center top-0 lg:space-y-0 lg:items-start lg:pt-48 lg:pl-16'>
            <input className='bg-white outline-none p-3 rounded-full shadow-sm text-center transition duration-300 focus-within:shadow-sm focus:ring-2 focus:w-11/12 lg:hidden' type='search' placeholder='San Francisco' />
            <div className='hidden h-auto lg:w-2/5 lg:flex lg:pb-6'>
              <p className='text-4xl font-bold'>Find more locations like this</p>
            </div>
            <button className='w-48 bg-white text-lg font-semibold p-4 rounded-full text-primary shadow-sm transition duration-500 ease-in-out hover:bg-primary hover:text-white hover:translate-y-1 hover:scale-110 cursor-pointer'>Explore</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
