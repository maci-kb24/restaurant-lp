
import PropTypes from 'prop-types';

const DishCard = ({ dishes }) => {
  return (
    <div className="dish-card">
        <div>
            <img src={dishes.image} />
        </div>
        <div>
            <h3>{dishes.title}</h3>
            <p>{dishes.description}</p>
            <p>{dishes.price}$</p>
        </div>
    </div>
  )
}

DishCard.propTypes = {
  dishes: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired
  }).isRequired
};

export default DishCard;

