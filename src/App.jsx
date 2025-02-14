import FAQs from './components/FAQs'
import Footer from './components/Footer'
import Home from './components/Home'
import OutstandingPlaces from './components/OutstandingPlaces'
import Recommended from './components/Recommended'
import TabBar from './components/TabBar'

function App () {
  return (
    <div className='font-montserrat'>
      <div id='tab-bar' />
      <section className='w-full h-screen'>
        <Home />
        <Recommended />
        <OutstandingPlaces />
        <FAQs />
        <Footer />
        <TabBar />
      </section>
      <footer />
    </div>
  )
}

export default App
