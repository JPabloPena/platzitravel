import React from 'react'

function RecommendedCard ({ imageClass, name, desc, index }) {
  const isOdd = index % 2 === 0

  return (
    <div className={`w-48 h-64 shadow-md rounded-lg overflow-hidden shrink-0 ${isOdd ? 'bg-secondary text-white' : 'bg-white text-primary'}`}>
      <div className={`w-full h-3/5 ${imageClass} bg-cover`} />
      <div className='w-full h-2/5'>
        <h3 className='font-bold text-xl px-4 py-2'>{name}</h3>
        <p className='px-4'>{desc}</p>
      </div>
    </div>
  )
}

export default RecommendedCard
