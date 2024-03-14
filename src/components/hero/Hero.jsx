
import banner from '../../assets/images/bg-header.png'
import Button from '../Button'
import Header from '../header/Header'

const Hero = () => {
  return (
    <div className="hero min-h-[140vh] bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${banner})`}}>
        <Header />
        <div className='hero-content '>
          <div className='custom-container ml-auto'>
            <div className='pt-28 max-w-prose'>
                <h1 className='pt-20 mb-7 text-[80px] font-extrabold leading-tight'>BEST QUALITY<br/> FOOD</h1>
                <h2>Discover the best foods from over 1,000 restaurants and fast delivery to your doorstep.Explore Our Menu, Book Your Table, and Embark on a Gastronomic Adventure</h2>
            </div>
            <div className='hero-btn mt-7'>
                <Button />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Hero