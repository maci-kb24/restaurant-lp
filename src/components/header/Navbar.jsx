
const Navbar = () => {

  const navlinks = [
    { title: 'Home', url: '#' },
    { title: 'About Us', url: '#' },
    { title: 'Chefs', url: '#' },
    { title: 'Menu', url: '#' },
    { title: 'Gallery', url: '#' },
    { title: 'Contacts', url: '#' },
  ]

  return (
    <div className="navbar">
      <div className="custom-container">
        <div className="flex justify-between items-center">
          <div className="menu">
            <ul className="flex">
              {navlinks.map((link, index) => (
                <li className="ml-12" key={index}>
                  <a className="uppercase font-extrabold hover:text-yellow-500" href={link.url}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar