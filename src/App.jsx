import './App.css'
import About from './components/about/About'
import Cta from './components/cta/Cta'
import Dishes from './components/dishes/Dishes'
import Hero from './components/hero/Hero'
import Reservation from './components/reservation/Reservation'

function App() {

  return (
    <>
    <div className='app text-white'>
    <Hero />
    <Dishes />
    <About />
    <Cta />
    <Reservation />
    </div>
    </>
  )
}

export default App
