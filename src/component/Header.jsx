import { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, ChevronUp, Calendar, Microscope, Heart } from 'lucide-react';
import logo from '../assets/logo/logo.png'
import logo1 from '../assets/logo.jpg'
import { Link } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hoveredDropdown, setHoveredDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdown);
    }
  };

  const navItems = [
    { name: 'Home', link: '/' },
    {
      name: 'About',
      dropdown: true,
      items: [
        { name: 'About  Sadbhawana  Clinic', link: '/about/clinic' },
        { name: 'About Dr. Monika Pandey', link: '/about/dr-monika' },
     
      ]
    },
    {name:"Gynaecology Service" , link :'/services/gynaecology'},
    {name:"Psychiatric Service" , link :'/service/counselling'},
    { name: 'Cases', link: '/gallery' },
    { name: 'Contact Us', link: '/contact' },
  ];

  return (
    <header className={`border border-red-500`}>
      <div className="relative w-full mx-auto px-2">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to={"/"}>
            <div className="flex items-center z-10">
              <img src={logo} alt="sambhawna_logo" className="w-auto h-16" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 z-10">
            {navItems.map((item) => (
              <div 
                key={item.name} 
                className="relative group"
                onMouseEnter={() => item.dropdown && setHoveredDropdown(item.name)}
                onMouseLeave={() => item.dropdown && setHoveredDropdown(null)}
              >
                {item.dropdown ? (
                  <div className="flex items-center">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="px-0 xl:px-4 py-2 text-gray-700 font-medium hover:text-pink-600 transition-colors duration-200 flex items-center"
                      style={{ whiteSpace: 'nowrap' }}
                    >
                      {item.name}
                      {activeDropdown === item.name ? <ChevronUp size={16} className="ml-1" /> : <ChevronDown size={16} className="ml-1" />}
                    </button>

                    {(activeDropdown === item.name || hoveredDropdown === item.name) && (
                      <div className="absolute top-full left-0 w-auto min-w-max bg-white rounded-lg shadow-xl py-2 z-10 transition-all duration-300 ease-in-out opacity-100 transform translate-y-0">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.link}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200"
                            style={{ whiteSpace: 'nowrap' }}
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.link}
                    className="xl:px-4 px-2 py-2 text-gray-700 font-medium hover:text-pink-600 transition-colors duration-200"
                    style={{ whiteSpace: 'nowrap' }}
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
          </nav>

          {/* Appointment Button */}
          <div className="hidden lg:flex items-center z-10">
            <a
              href="/appoitment"
              className="ml-4 px-6 py-2 bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] text-white font-medium rounded-full flex items-center hover:bg-pink-600 transition-colors shadow-md"
            >
              <Calendar size={18} className="mr-2" />
              Appointment
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center z-10">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-pink-500 hover:bg-pink-50 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden relative bg-white shadow-lg border-t border-pink-100 mt-2 z-20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.name} className="w-full">
                {item.dropdown ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className="w-full flex justify-between items-center px-3 py-2 rounded-md text-base font-medium hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200"
                    >
                      {item.name}
                      {activeDropdown === item.name ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </button>

                    {activeDropdown === item.name && (
                      <div className="pl-4 py-2 space-y-1 bg-pink-50 rounded-md">
                        {item.items.map((subItem) => (
                          <a
                            key={subItem.name}
                            href={subItem.link}
                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-pink-100 hover:text-pink-600 transition-colors duration-200"
                          >
                            {subItem.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.link}
                    className="block px-3 py-2 rounded-md text-base font-medium hover:bg-pink-50 hover:text-pink-600 transition-colors duration-200"
                  >
                    {item.name}
                  </a>
                )}
              </div>
            ))}
            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex flex-col space-y-3">
                <a
                  href="/contact"
                  className="px-4 py-2 bg-gradient-to-r from-[#5b2e67] to-[#e47f9f] text-white font-medium rounded-full flex items-center justify-center hover:bg-pink-600 transition-colors duration-200 shadow-md"
                >
                  <Calendar size={18} className="mr-2" />
                  Make Appointment
                </a>
                <a
                  href="/home-collection"
                  className="px-4 py-2 bg-white text-pink-500 border-2 border-pink-500 font-medium rounded-full flex items-center justify-center hover:bg-pink-50 transition-colors duration-200 shadow-md"
                >
                  <Microscope size={18} className="mr-2" />
                  Home Collection
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}