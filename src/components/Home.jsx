import React from 'react'

function Home() {
  return (
    <div id='home'>
      <div className='w-full h-3/4'>
        <div className='w-full h-full'>
          <img src='/images/sanFrancisco.jpg'/>
          <div className='w-full h-full flex flex-col absolute space-y-96 py-4 items-center top-0'>
            <input className='bg-white outline-none p-3 rounded-full shadow-sm text-center' type='search' placeholder='San Francisco' />
            <button className='w-36 bg-white text-xl font-semibold p-4 rounded-full text-primary shadow-sm'>Explore</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home