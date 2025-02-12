import Home from './components/Home'
import Recommended from './components/Recommended'

function App () {
  return (
    <div className='font-montserrat'>
      <nav />
      <div id='tab-bar' />
      <section className='w-full h-screen'>
        <Home />
        <Recommended />
        <div id='highlighted' />
      </section>
      <footer />
    </div>
  )
}

export default App
