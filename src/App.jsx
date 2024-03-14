import './App.css'
import About from './components/about/About'
import Dishes from './components/dishes/Dishes'
import Hero from './components/hero/Hero'

function App() {

  return (
    <>
    <div className='app text-white'>
    <Hero />
    <Dishes />
    <About />
    </div>
    </>
  )
}

export default App
