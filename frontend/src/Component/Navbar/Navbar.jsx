import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const ref = React.useRef(null);

  const [isScrolled, setIsScrolled] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div ref={ref} className="md:h-25 mb-10">
      {/* <p className="w-10 h-[500px]"></p> */}
      <nav
        className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 
            bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
        }`}
      >
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <h1 className="text-2xl text-black">Aavin Junction</h1>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex  items-center gap-4 lg:gap-8">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/products">Products</NavLink>
          <NavLink to="/contact">Favourite</NavLink>
          <button
            className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer 
              text-black
             transition-all"
          >
            Favourite
          </button>
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-4">
          <svg
            className={`h-6 w-6 ${isScrolled ? "invert" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          ></svg>
          <button className="bg-black text-white px-8 py-2.5 rounded-full ml-4 transition-all duration-500">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-3 md:hidden">
          <svg
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`h-6 w-6 cursor-pointer ${isScrolled ? "invert" : ""}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <button
            className="absolute top-4 right-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          <NavLink to="/" onClick={() => setIsMenuOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/products" onClick={() => setIsMenuOpen(flase)}>
            Products
          </NavLink>
          <NavLink to="/contacts" onClick={() => setIsMenuOpen(false)}>
            Contacts
          </NavLink>

          <button className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
            Favourite
          </button>

          <button className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
            Login
          </button>
        </div>
      </nav>
    </div>
  );
};
export default Navbar;
