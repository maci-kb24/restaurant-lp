import banner from "../../assets/images/bg-offer.png"
import Button from "../Button"


const Cta = () => {
  return (
    <div className="cta bg-no-repeat bg-cover bg-center bg-fixed" style={{backgroundImage: `url(${banner})`}}>
        <div className="custom-container py-[100px]">
            <h1 className="mb-8 text-4xl font-extrabold">DOUBLE CHEESE PIZZA <br/>30% OFF FRIDAY ONLY</h1>
            <Button href="#booking-table">Book A Table</Button>
        </div>
    </div>
  )
}

export default Cta