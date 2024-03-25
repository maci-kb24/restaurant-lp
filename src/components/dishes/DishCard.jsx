
import PropTypes from 'prop-types';

const DishCard = ({ dish }) => {
  return (
    <div className="dish-card">
        <div className='mb-5'>
            <img src={dish.image} />
        </div>
        <div className='text-center'>
            <h3 className='uppercase font-bold mb-5'>{dish.title}</h3>
            <p className='text-gray-300 mb-5'>{dish.description}</p>
            <p className='text-yellow-500 font-extrabold text-xl'>${dish.price}$</p>
        </div>
    </div>
  )
}

DishCard.propTypes = {
  dish: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default DishCard;

