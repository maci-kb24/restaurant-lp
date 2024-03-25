import DishCard from "./DishCard"
import dish1 from '../../assets/images/special-dishes-1.png'
import dish2 from '../../assets/images/special-dishes-2.jpg'
import dish3 from '../../assets/images/special-dishes-3.jpg'
import dish4 from '../../assets/images/special-dishes-4.jpg'
import dish5 from '../../assets/images/special-dishes-5.png'

const dishes = [
  { title: 'Beef Burger', image: dish1, description: 'lorem ipsum, dolor sit, amet consectetur adipicing, elit', price: 8.60 },
  { title: 'Turkey Burger', image: dish2, description: 'lorem ipsum, dolor sit, amet consectetur adipicing, elit', price: 12 },
  { title: 'Chicen Burger', image: dish3, description: 'lorem ipsum, dolor sit, amet consectetur adipicing, elit', price: 12.99 },
  { title: 'Cheese Burger', image: dish4, description: 'lorem ipsum, dolor sit, amet consectetur adipicing, elit', price: 15 },
  { title: 'Pizza Burger', image: dish5, description: 'lorem ipsum, dolor sit, amet consectetur adipicing, elit', price: 10 },
]

const Dishes = () => {
  return (
    <div className="dishes bg-black py-[100px]">
      <div className="custom-container">
      <div className="dishes-content flex justify-center items-center text-center">
            <h2 className="flex items-center text-4xl font-extrabold  uppercase dishes-title">Our Special Dishes</h2>
        </div>
        <div>
        <p className="my-8 max-w-prose mx-auto text-gray-400">We offer a wide range of dishes, from traditional to modern. Our chefs are always ready to prepare the best meals for you.</p>
        </div>
        <div className="dishes-gallery grid md:grid-cols-4 grid-col-1 sm:grid-cols-2  gap-6">
          {dishes.map((dish, index) => (
            <DishCard dish={dish} key={index} />
          ))}
        </div>
      </div>
        
    </div>
  )
}

export default Dishes