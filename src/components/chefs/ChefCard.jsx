import PropTypes from 'prop-types';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";


const ChefCard = ({chefs}) => {
  return (
    <div className="chef-card">
        <div className="chef-img">
            <img src={chefs.image} alt="chef" />
        </div>
        <div className="chef-info text-center mt-5">
            <h3 className="text-xl font-bold mb-3">{chefs.name}</h3>
            <p className="text-gray-500 mb-5">{chefs.title}</p>
            <ul className='flex text-yellow-500 justify-center'>
              <li className='mr-2'><FaFacebook /></li>
              <li className='mr-2'><FaTwitter /></li>
              <li className='mr-2'><FaInstagram /></li>
            </ul>
        </div>
    </div>
  )
}

ChefCard.propTypes = {
  chefs: PropTypes.object.isRequired,
};

export default ChefCard