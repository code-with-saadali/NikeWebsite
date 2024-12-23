import { useState } from "react";
import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";

const Nav = () => {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className='padding-x py-8 absolute z-10 w-full'>
      <nav className='flex justify-between items-center max-container'>
        <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className='m-0 w-[129px] h-[29px] hover:scale-110 duration-500'
          />
        </a>

        {/* Desktop Menu */}
        <ul className='flex-1 flex justify-center items-center gap-16 max-lg:hidden'>
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className='font-montserrat leading-normal text-lg text-slate-gray hover:text-black duration-300'
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Sign In and Explore links (Desktop) */}
        <div className='flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24'>
          <a href='/' className="hover:scale-105 duration-300 hover:text-gray-500 hover:underline">Sign in</a>
          <span>/</span>
          <a href='/' className="hover:scale-105 duration-300 hover:text-gray-500 hover:underline">Explore now</a>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className='hidden max-lg:block' onClick={toggleMenu}>
          <img src={hamburger} alt='hamburger icon' width={25} height={25} />
        </div>
      </nav>

      {/* Mobile Menu (Conditional Rendering) */}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full bg-white py-4 shadow-md z-20">
          <div className="px-4 py-10">
            {/* Close (X) Icon */}
            <button
              onClick={() => setIsMenuOpen(false)} // Close the menu
              className="absolute top-5 right-8 text-[40px] font-bold text-gray-600"
            >
              &times;
            </button>
          </div>
          <a href='/'>
          <img
            src={headerLogo}
            alt='logo'
            width={129}
            height={29}
            className=' absolute top-8 pl-2 m-0 w-[129px] h-[29px] hover:scale-110 duration-500'
          />
        </a>
          <ul className='flex flex-col items-center gap-4'>
            {navLinks.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className='font-montserrat text-lg text-slate-gray hover:text-black duration-300'
                  onClick={() => setIsMenuOpen(false)} // Close menu after clicking link
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href='/'
                className="font-montserrat text-lg text-slate-gray hover:text-black duration-300"
                onClick={() => setIsMenuOpen(false)} // Close menu after clicking link
              >
                Sign in
              </a>
            </li>
            <li>
              <a
                href='/'
                className="font-montserrat text-lg text-slate-gray hover:text-black duration-300"
                onClick={() => setIsMenuOpen(false)} // Close menu after clicking link
              >
                Explore now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Nav;
