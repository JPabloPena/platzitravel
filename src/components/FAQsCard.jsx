import React from 'react'

function FAQsCard ({ title, desc }) {
  return (
    <div>
      <h3 className='text-xl font-medium text-primary'>{title}</h3>
      <p className='pt-2'>{desc}</p>
    </div>
  )
}

export default FAQsCard
