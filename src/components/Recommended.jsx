import React from 'react'
import RecommendedCard from './RecommendedCard'

const CARDS = [
  {
    imageClass: 'bg-norway',
    name: 'Norway',
    desc: 'Beautiful landscapes'
  },
  {
    imageClass: 'bg-newYork',
    name: 'New York',
    desc: 'Concrete jungle'
  }
]

function Recommended () {
  return (
    <section id='recommended' className='p-6'>
      <h2 className='text-3xl font-semibold text-primary'>Recommended</h2>
      <div className='w-auto h-72 mt-6 overflow-x-auto overscroll-x-contain flex space-x-6'>
        {
          CARDS.map((card, index) => (
            <RecommendedCard
              key={card.name}
              imageClass={card.imageClass}
              name={card.name}
              desc={card.desc}
              index={index}
            />
          ))
        }
      </div>
    </section>
  )
}

export default Recommended
