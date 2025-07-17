import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <header className="w-full fixed top-0 left-0 z-50 flex items-center justify-center mt-5 ">
      <nav
        className="w-2/4 flex items-center justify-evenly  px-4 sm:px-8 py-4 bg-white/30 backdrop-blur-sm shadow-2xl ring-2 ring-black/20 rounded-b-3xl sm:rounded-4xl"
        style={{ boxShadow: 'inset 2px 8px 15px white' }}
      >
        {/* Nav links always visible */}
        <div className="flex flex-row space-x-2 sm:space-x-4">
          <NavLink
            to='/'
            className={({ isActive }) =>
              block px-4 sm:px-6 py-2 sm:py-2.5 bg-black/0 rounded-2xl ring-2 ${
                isActive
                  ? 'ring-amber-500 text-black font-bold'
                  : 'ring-black/0'
              } hover:ring-amber-500 transition-all duration-300 text-sm sm:text-base
            }
          >
            Home
          </NavLink>
          <NavLink
            to='/projects'
            className={({ isActive }) =>
              block px-4 sm:px-6 py-2 sm:py-2.5 bg-black/0 rounded-2xl ring-2 ${
                isActive
                  ? 'ring-amber-500 text-black font-bold'
                  : 'ring-black/0'
              } hover:ring-amber-500 transition-all duration-300 text-sm sm:text-base
            }
          >
            Projects
          </NavLink>
          <NavLink
            to='/about'
            className={({ isActive }) =>
              block px-4 sm:px-6 py-2 sm:py-2.5 bg-black/0 rounded-2xl ring-2 ${
                isActive
                  ? 'ring-amber-500 text-black font-bold'
                  : 'ring-black/0'
              } hover:ring-amber-500 transition-all duration-300 text-sm sm:text-base
            }
          >
            About
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) =>
              block px-4 sm:px-6 py-2 sm:py-2.5 bg-black/0 rounded-2xl ring-2 ${
                isActive
                  ? 'ring-amber-500 text-black font-bold'
                  : 'ring-black/0'
              } hover:ring-amber-500 transition-all duration-300 text-sm sm:text-base
            }
          >
            Contact
          </NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
