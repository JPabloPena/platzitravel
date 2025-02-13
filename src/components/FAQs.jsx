import React from 'react'
import FAQsCard from './FAQsCard'

const FAQS = [
  {
    title: 'Cancellation Policy',
    desc: 'For stays of less than one week it is important to give 3 days notice, otherwise you will be sanctioned.'
  },
  {
    title: 'Methods of Payment',
    desc: 'We accept different payment methods: VISA, MasterCard, American Express, Paypal and Binance.'
  },
  {
    title: 'Pets',
    desc: 'The issue of pets will depend directly on the host.'
  },
  {
    title: 'Security Information',
    desc: 'All our stays are insured in case of accidents.'
  },
  {
    title: 'Long Stays',
    desc: 'Stays of up to 3 months are available, in this case a deposit of 50% of the rental value is required.'
  }
]

function FAQs () {
  return (
    <section id='faqs' className='px-6 pt-12'>
      <h2 className='text-3xl text-primary font-semibold pb-6'>FAQs</h2>
      <div className='flex flex-col space-y-6'>
        {FAQS.map(faq => (
          <FAQsCard key={faq.title} title={faq.title} desc={faq.desc} />
        ))}
      </div>
    </section>
  )
}

export default FAQs
