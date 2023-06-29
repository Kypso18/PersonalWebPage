import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-black font-bold">Skipper</h1>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex -mr-2 sm:hidden bg-blue-300">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-blue-200 focus:outline-none focus:bg-blue-300"
              onClick={handleMenuToggle}
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center">
            
            <NavLink to='/'><a
              
              className="px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-300 hover:bg-white hover:text-black focus:outline-none focus:bg-white focus:text-black"
            >
              Home
            </a>
            </NavLink>
            <NavLink to='/about'>
            <a
              className="px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-300 hover:bg-white hover:text-black focus:outline-none focus:bg-white focus:text-black"
            >
              About
            </a>
            </NavLink>
            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-300 hover:bg-white hover:text-black focus:outline-none focus:bg-white focus:text-black"
            >
              Blogs
            </a>
            <a
              href="#"
              className="px-3 py-2 rounded-md text-sm font-medium text-white bg-blue-300 hover:bg-white hover:text-black focus:outline-none focus:bg-white focus:text-black"
            >
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
          <NavLink to='/'>
            <a
    
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-300 hover:bg-white hover:text-black focus:outline-none focus:bg-white focus:text-black"
            >
              Home
            </a>
            </NavLink>
            <NavLink to='/about'>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-300 hover:bg-white hover:text-black focus:outline-none focus:bg-white focus:text-black"
            >
              About
            </a>
            </NavLink>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-300 hover:bg-white hover:text-black focus:outline-none focus:bg-white focus:text-black"
            >
              Services
            </a>
            <a
              href="#"
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-blue-300 hover:bg-white hover:text-black focus:outline-none focus:bg-white focus:text-black"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
