import React from 'react'
import FAQsCard from './FAQsCard'
import FAQS from '../constants/faqs'

function FAQs () {
  return (
    <section id='faqs' className='px-6 pt-12 pb-12 bg-inherit'>
      <h2 className='text-3xl text-primary font-semibold pb-6 dark:text-white'>FAQs</h2>
      <div className='flex flex-col space-y-6'>
        {FAQS.map(faq => (
          <FAQsCard key={faq.title} title={faq.title} desc={faq.desc} />
        ))}
      </div>
    </section>
  )
}

export default FAQs
