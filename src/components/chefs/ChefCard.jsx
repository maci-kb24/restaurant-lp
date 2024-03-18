
import PropTypes from 'prop-types';

const ChefCard = ({chefs}) => {
  return (
    <div className="chef-card">
        <div className="chef-img">
            <img src={chefs.image} alt="chef" />
        </div>
        <div className="chef-info">
            <h3 className="text-xl font-bold">{chefs.name}</h3>
            <p className="text-gray-500">{chefs.title}</p>
        </div>
    </div>
  )
}

ChefCard.propTypes = {
  chefs: PropTypes.object.isRequired,
};

export default ChefCard