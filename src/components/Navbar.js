import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import WebLogo from '../assets/WebportLogo.png';
import { Link } from 'react-router-dom';

function NavItem({ to, children }) {
  return (
    <NavLink
      to={to}
      className={({ isActive, isPending }) =>
        isPending
          ? 'px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:bg-white focus:text-black'
          : isActive
          ? 'px-3 py-2 rounded-md text-sm font-medium bg-white text-black'
          : 'px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-white hover:text-black focus:outline-none focus:bg-white focus:text-black'
      }
    >
      {children}
    </NavLink>
  );
}

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const shouldShowDesktopMenu = windowWidth > 640;

  return (
    <nav className="fixed top-0 left-0 w-full bg-blue-300/80 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
          
      <Link to="/">
        <img
          src={WebLogo}
          alt="WebLogo"
          className="object-contain hover:animate-pulse h-20 w-30"
        />
      </Link>
    
          </div>

          {/* Mobile menu button */}
          <div className="flex mr-2 lg:hidden md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none"
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
          {shouldShowDesktopMenu && (
            <div className="sm:flex sm:items-center">
              <NavItem to="/">Home</NavItem>
              <NavItem to="/about">About</NavItem>
              
            </div>
          )}
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="lg:hidden md:hidden bg-blue-300/80">
          <div className="flex flex-col px-4 pt-2 pb-2 space-y-1">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
