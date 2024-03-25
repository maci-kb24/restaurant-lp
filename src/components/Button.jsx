

import PropTypes from 'prop-types';

const Button = ({ children, href }) => {

  const handleClick = () => {
    const reservationDiv = document.getElementById('reservation');
    if (reservationDiv) {
      reservationDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
    <a href={href} onClick={handleClick} className="btn book-btn hover:text-white cursor-pointer hover:bg-gray-400 text-black font-extrabold tracking-widest bg-yellow-500 py-2 px-4 uppercase rounded">
        {children}
    </a>
    </>
  )
}

export default Button

Button.propTypes = {
  children: PropTypes.node.isRequired,
  href: PropTypes.string.isRequired
};