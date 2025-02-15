import React from 'react'

function RecommendedCard ({ imageClass, title, desc, index }) {
  const isOdd = index % 2 === 0

  return (
    <div className={`w-48 h-64 lg:w-56 lg:h-72 shadow-md rounded-lg shrink-0 transform transition hover:-translate-y-4 hover:shadow-xl overflow-visible ${isOdd ? 'bg-secondary text-white' : 'bg-white text-primary'}`}>
      <div className={`w-full h-3/5 rounded-lg ${imageClass} bg-cover`} />
      <div className='w-full h-2/5'>
        <h3 className='font-bold text-xl px-4 py-2'>{title}</h3>
        <p className='px-4'>{desc}</p>
      </div>
    </div>
  )
}

export default RecommendedCard
