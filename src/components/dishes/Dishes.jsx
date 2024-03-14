import DishCard from "./DishCard"
import Burger from '../../assets/images/special-dishes-1.png'

const Dishes = () => {
  return (
    <div className="dishes bg-black py-14">
      <div className="custom-container">
      <div className="dishes-content text-center pt-8">
            <h2 className="text-4xl font-extrabold text-center uppercase dishes-title">Our Special Dishes</h2>
            <p className="mt-8 max-w-prose mx-auto text-gray-400">We offer a wide range of dishes, from traditional to modern. Our chefs are always ready to prepare the best meals for you.</p>
        </div>
        <div className="dishes-gallery flex">
        <DishCard title="Beef Burger" image={Burger} description="lorem ipsum" price={12} />
        <DishCard title="Beef Burger" image={Burger} description="lorem ipsum" price={12} />
        <DishCard title="Beef Burger" image={Burger} description="lorem ipsum" price={12} />
        <DishCard title="Beef Burger" image={Burger} description="lorem ipsum" price={12} />
        <DishCard title="Beef Burger" image={Burger} description="lorem ipsum" price={12} />
        </div>
      </div>
        
    </div>
  )
}

export default Dishes