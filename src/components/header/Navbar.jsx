import PropTypes from "prop-types";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";

const navlinks = [
  { id:1,title: "Home", url: "#hero" },
  { id:2, title: "About Us", url: "#about" },
  { id:3, title: "Chefs", url: "#chefs" },
  { id:4, title: "Menu", url: "#menu" },
  { id:5, title: "Gallery", url: "#gallery" },
  { id:6, title: "Contacts", url: "#contact" },
];


const Navbar = () => {
  const [isNavOpen, setisNavOpen] = useState(false);

  return (
    <>
      <div className="navbar hidden md:block">
        <ul className="flex">
          {navlinks.map((link) => (
            <li className="ml-12" key={link.id}>
              <a
                className="uppercase font-extrabold hover:text-yellow-500"
                href={link.url}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className=" md:hidden">
        <button onClick={() => setisNavOpen(!isNavOpen)}>
            {isNavOpen ? <IoMdClose size={35} fontWeight={'900'} /> : <RxHamburgerMenu size={25} />}
        </button>
    </div>
    <div className={`mobile-nav md:hidden flex fixed top-0 left-0 ${isNavOpen ? 'bg-black' : 'md:bg-transparent'}  p-8 h-full w-80`}>
        {isNavOpen && (
          <ul className="flex flex-col">
            {navlinks.map((link, index) => (
              <li  key={index} className="mb-4">
                <a
                  className="uppercase font-extrabold hover:text-yellow-500"
                  href={link.url}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
     
    </>
  );
};

Navbar.propTypes = {
  isNavOpen: PropTypes.bool,
  setisNavOpen: PropTypes.func,
  navlinks: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
    })
  ).isRequired,
};

export default Navbar;
