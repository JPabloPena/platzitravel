import React from 'react'
import OutstandingPlacesCard from './OutstandingPlacesCard'

const CARDS = [
  {
    imageClass: 'bg-chicago',
    title: 'Chicago',
    desc: '2 rooms, bathroom and kitchen.',
    customClass: 'lg:col-span-2'
  },
  {
    imageClass: 'bg-LA',
    title: 'Los Angeles',
    desc: '4 rooms, 3 bathrooms, kitchen and private pool.',
    customClass: 'lg:row-span-2 lg:h-full'
  },
  {
    imageClass: 'bg-miami',
    title: 'Miami',
    desc: '3 rooms, 2 bathrooms, kitchen and amazing sea view.'
  },
  {
    imageClass: 'bg-bali',
    title: 'Bali',
    desc: '2 rooms, 2 bathrooms, kitchen and private pool.'
  }
]

function OutstandingPlaces () {
  return (
    <section id='outstandingPlaces' className='px-6 w-full'>
      <h2 className='text-3xl text-primary font-semibold pb-6'>
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
