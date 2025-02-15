import React from 'react'

function OutstandingPlacesCard ({ imageClass, title, desc, customClass }) {
  return (
    <div className={`w-full h-96 ${imageClass} bg-cover rounded-2xl relative overflow-hidden lg:bg-center lg:text-right ${customClass}`}>
      <div className='w-full h-full absolute bg-black opacity-20' />
      <div className='relative px-8'>
        <h3 className='text-3xl pt-8 pb-2 font-semibold text-white'>{title}</h3>
        <p className='text-sm text-white w-3/4 lg:text-lg lg:justify-self-end'>{desc}</p>
      </div>
    </div>
  )
}

export default OutstandingPlacesCard
