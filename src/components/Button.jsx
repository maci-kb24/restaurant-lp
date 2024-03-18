

const Button = () => {
  const handleClick = () => {
    const reservationDiv = document.getElementById('reservation');
    if (reservationDiv) {
      reservationDiv.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <>
    <a onClick={handleClick} className="btn book-btn hover:text-white cursor-pointer hover:bg-gray-400 text-black font-extrabold tracking-widest bg-yellow-500 py-2 px-4 uppercase rounded">
        Book a Table
    </a>
    </>
  )
}

export default Button