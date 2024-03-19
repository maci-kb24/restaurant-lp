import './App.css'
import About from './components/about/About'
import Chefs from './components/chefs/Chefs'
import Cta from './components/cta/Cta'
import Dishes from './components/dishes/Dishes'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import BookTable from './components/booktable/BookTable'

function App() {

  return (
    <>
    <div className='app text-white'>
    <Hero />
    <Dishes />
    <About />
    <Cta />
    <Chefs />
    <BookTable />
    <Footer />
    </div>
    </>
  )
}

export default App
