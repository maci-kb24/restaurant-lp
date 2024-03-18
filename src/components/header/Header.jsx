import Logo from "./Logo"
import Navbar from "./Navbar"
import  { useState, useEffect } from 'react';


const Header = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const headerStyle = {
    backgroundColor: scrollY > 0 ? 'black' : 'transparent',
    transition: 'background-color 0.3s ease',
  };

  return (
    <div className="header z-50 fixed w-full top-0 left-0 py-4" style={headerStyle}>
     <div className="custom-container flex justify-between items-center">
      <Logo />
      <Navbar />
     </div>
        
    </div>
  )
}

export default Header