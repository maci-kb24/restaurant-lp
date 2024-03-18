import DishCard from "./DishCard"
import Burger from '../../assets/images/special-dishes-1.png'

const dishes = [
  { title: 'Beef Burger', image: Burger, description: 'lorem ipsum', price: 12 },
  { title: 'Turkey Burger', image: Burger, description: 'lorem ipsum', price: 12 },
  { title: 'Chicen Burger', image: Burger, description: 'lorem ipsum', price: 12 },
  { title: 'Cheese Burger', image: Burger, description: 'lorem ipsum', price: 12 },
  { title: 'Pizza Burger', image: Burger, description: 'lorem ipsum', price: 12 },
]

const Dishes = () => {
  return (
    <div className="dishes bg-black py-14">
      <div className="custom-container">
      <div className="dishes-content text-center pt-8">
            <h2 className="text-4xl font-extrabold text-center uppercase dishes-title">Our Special Dishes</h2>
            <p className="mt-8 max-w-prose mx-auto text-gray-400">We offer a wide range of dishes, from traditional to modern. Our chefs are always ready to prepare the best meals for you.</p>
        </div>
        <div className="dishes-gallery flex">
          {dishes.map((dish, index) => (
            <DishCard dishes={dish} key={index} />
          ))}
        </div>
      </div>
        
    </div>
  )
}

export default Dishes