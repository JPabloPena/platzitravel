import React from 'react'
import OutstandingPlacesCard from './OutstandingPlacesCard'
import CARDS from '../constants/outstandingPlacesCards'

function OutstandingPlaces () {
  return (
    <section id='outstandingPlaces' className='px-6 w-full bg-inherit'>
      <h2 className='text-3xl text-primary font-semibold pb-6 dark:text-white'>
        Outstanding Places
      </h2>
      <div className='w-full h-full grid grid-cols-1 lg:grid-cols-2 gap-6'>
        {
          CARDS.map(card => (
            <OutstandingPlacesCard
              key={card.title}
              imageClass={card.imageClass}
              title={card.title}
              desc={card.desc}
              customClass={card.customClass}
            />
          ))
        }
      </div>
    </section>
  )
}

export default OutstandingPlaces
