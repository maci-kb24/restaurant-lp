import './App.css'
import About from './components/about/About'
import Chefs from './components/chefs/Chefs'
import Cta from './components/cta/Cta'
import Dishes from './components/dishes/Dishes'
import Footer from './components/footer/Footer'
import Hero from './components/hero/Hero'
import BookingTable from './components/booking/BookingTable'
import Gallery from './components/gallery/Gallery'
import Menu from './components/menu/Menu'

function App() {

  return (
    <div className='app text-white'>
      <Hero />
      <Dishes />
      <About />
      <Cta />
      <Chefs />
      <Menu />
      <Gallery />
      <BookingTable />
      <Footer />
    </div>
  )
}

export default App
