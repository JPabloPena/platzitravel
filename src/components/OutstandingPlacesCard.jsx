import React from 'react'

function OutstandingPlacesCard ({ imageClass, title, desc }) {
  return (
    <div className={`w-full h-96 ${imageClass} bg-cover rounded-2xl relative overflow-hidden`}>
      <div className='w-full h-full absolute bg-black opacity-20' />
      <div className='relative'>
        <h3 className='text-3xl px-8 pt-8 pb-2 font-semibold text-white'>{title}</h3>
        <p className='text-sm pl-8 text-white mr-24'>{desc}</p>
      </div>
    </div>
  )
}

export default OutstandingPlacesCard
