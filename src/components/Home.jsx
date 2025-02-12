import React from 'react'

function Home () {
  return (
    <section id='home'>
      <div className='w-full h-3/4'>
        <div className='w-full h-full'>
          <img src='/images/sanFrancisco.jpg' />
          <div className='w-full h-full flex flex-col absolute space-y-96 py-4 items-center top-0'>
            <input className='bg-white outline-none p-3 rounded-full shadow-sm text-center transition duration-300 focus-within:shadow-sm focus:ring-2 focus:w-11/12' type='search' placeholder='San Francisco' />
            <button className='w-48 bg-white text-lg font-semibold p-4 rounded-full text-primary shadow-sm transition duration-500 ease-in-out hover:bg-primary hover:text-white hover:translate-y-1 hover:scale-110 cursor-pointer'>Explore</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home
