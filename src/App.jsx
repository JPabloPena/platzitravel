import FAQs from './components/FAQs'
import Home from './components/Home'
import OutstandingPlaces from './components/OutstandingPlaces'
import Recommended from './components/Recommended'

function App () {
  return (
    <div className='font-montserrat'>
      <nav />
      <div id='tab-bar' />
      <section className='w-full h-screen'>
        <Home />
        <Recommended />
        <OutstandingPlaces />
        <FAQs />
      </section>
      <footer />
    </div>
  )
}

export default App
