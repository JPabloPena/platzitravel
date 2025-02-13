import React from 'react'
import RecommendedCard from './RecommendedCard'

const CARDS = [
  {
    imageClass: 'bg-norway',
    title: 'Norway',
    desc: 'Beautiful landscapes'
  },
  {
    imageClass: 'bg-newYork',
    title: 'New York',
    desc: 'Concrete jungle'
  },
  {
    imageClass: 'bg-yosemite',
    title: 'Yosemite',
    desc: 'A break from the world'
  },
  {
    imageClass: 'bg-seattle',
    title: 'Seattle',
    desc: 'Big city'
  },
  {
    imageClass: 'bg-switzerland',
    title: 'Switzerland',
    desc: 'Big city'
  }
]

function Recommended () {
  return (
    <section id='recommended' className='p-6'>
      <h2 className='text-3xl font-semibold text-primary'>Recommended</h2>
      <div className='w-auto h-72 mt-6 overflow-x-auto overscroll-x-contain flex space-x-6 overflow-y-hidden'>
        {
          CARDS.map((card, index) => (
            <RecommendedCard
              key={card.title}
              imageClass={card.imageClass}
              title={card.title}
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
