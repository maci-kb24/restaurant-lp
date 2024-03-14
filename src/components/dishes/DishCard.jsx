
import PropTypes from 'prop-types';

const DishCard = ({title, image, description, price}) => {
  return (
    <div className="dish-card">
        <div>
            <img src={image} />
        </div>
        <div>
            <h3>{title}</h3>
            <p>{description}</p>
            <p>{price}$</p>
        </div>
    </div>
  )
}

DishCard.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired
};

export default DishCard;

