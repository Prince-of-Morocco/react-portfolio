import React, { useState, useEffect } from 'react';
import dev from "../../public/dev.png?url";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    // Trigger tagline fade-in on mount
    const timer = setTimeout(() => setShowTagline(true), 300);
    return () => clearTimeout(timer);
  }, []);

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Skills" },
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">

          {/* Left Logo + Text */}
          <div className="flex space-x-2 items-center">
            <img src={dev} className="h-12 w-12 rounded-full" alt="Logo" />
            <div>
              <h1 className="font-semibold text-xl cursor-pointer leading-tight">
                Bharat<span className="text-green-500 text-2xl">h</span>
              </h1>

              {/* 💡 Animated + Glowing Tagline */}
              <p
                className={`text-xs md:text-sm font-medium italic bg-gradient-to-r from-blue-600 via-green-500 to-indigo-500 bg-clip-text text-transparent transition-all duration-1000 ease-out transform ${
                  showTagline
                    ? 'opacity-100 translate-y-0 glow'
                    : 'opacity-0 translate-y-2'
                }`}
              >
                Crafting intelligent solutions that make technology feel human.
              </p>
            </div>
          </div>

          {/* Desktop Navbar */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Menu Button */}
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>

        {/* Mobile Navbar */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
