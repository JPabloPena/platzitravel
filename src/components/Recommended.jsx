import React from 'react'
import RecommendedCard from './RecommendedCard'
import CARDS from '../constants/recommendedCards'

function Recommended () {
  return (
    <section id='recommended' className='p-6 bg-inherit'>
      <h2 className='text-3xl font-semibold text-primary dark:text-white'>Recommended</h2>
      <div className='w-auto pb-4 pt-4 mt-6 overflow-x-auto overscroll-x-contain flex space-x-6 overflow-y-hidden'>
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
