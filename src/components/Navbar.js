import React from 'react';
import { NavLink } from "react-router-dom";

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
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-blue-300/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-black font-bold">Skipper</h1>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex -mr-2 sm:hidden">
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
          <div className="hidden sm:flex sm:items-center">
            <NavItem to='/'>
              Home
            </NavItem>
            <NavItem to='/about'>
              About
            </NavItem>
            <NavItem to="/blog">
              Blogs
            </NavItem>
            <NavItem to="/contact">
              Contact
            </NavItem>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <div className="flex flex-col px-2 pt-2 pb-3 space-y-1">
          <NavItem to='/'>
              Home
            </NavItem>
            <NavItem to='/about'>
              About
            </NavItem>
            <NavItem to="/services">
              Services
            </NavItem>
            <NavItem to="/contact">
              Contact
            </NavItem>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
