"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // When menu is open, prevent body scrolling to avoid layout shifts
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    
    return () => {
      // Cleanup - restore scrolling when component unmounts
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="flex items-center justify-between p-4 bg-white shadow-sm sm:px-8 lg:px-25 relative z-50"
      aria-label="Main navigation"
    >
      {/* Logo - now responsive */}
      <div className="flex items-center">
        <Link href="/">
          <div className="flex items-center">
            <Image
              src="/images/site-logo.svg"
              alt="JB Plumbing and Heating"
              width={150}
              height={150}
              className="w-32 sm:w-40 md:w-48 lg:w-52 h-auto"
              priority
            />
          </div>
        </Link>
      </div>

      {/* Desktop Navigation Links - responsive font sizes */}
      <div className="hidden lg:flex items-center justify-center">
        <ul className="flex space-x-5 xl:space-x-8">
          <li>
            <Link
              href="/"
              className="text-sm xl:text-base text-gray-600 hover:text-[#38bdf8] transition-colors"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className="text-sm xl:text-base text-gray-600 hover:text-[#38bdf8] transition-colors"
            >
              About Us
            </Link>
          </li>
          <li>
            <Link
              href="/services"
              className="text-sm xl:text-base text-gray-600 hover:text-[#38bdf8] transition-colors"
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className="text-sm xl:text-base text-gray-600 hover:text-[#38bdf8] transition-colors"
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-sm xl:text-base text-gray-600 hover:text-[#38bdf8] transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Call Us Now button (desktop) - matching sizes with hero */}
      <div className="hidden lg:block">
        <Link href="/contact">
          <button className="bg-[#62c46f] text-white px-4 sm:px-6 py-2 rounded-full hover:bg-[#] transition-colors text-xs sm:text-sm">
            Call Us Now
          </button>
        </Link>
      </div>

      {/* Burger menu button for mobile */}
      <div className="lg:hidden">
        <button
          onClick={toggleMenu}
          className="flex flex-col justify-center items-center w-10 h-10 space-y-1.5 focus:outline-none"
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
        >
          <span
            className={`block h-0.5 w-8 bg-gray-600 transform transition duration-300 ease-in-out ${
              isMenuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></span>
          <span
            className={`block h-0.5 w-8 bg-gray-600 transition duration-300 ease-in-out ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          ></span>
          <span
            className={`block h-0.5 w-8 bg-gray-600 transform transition duration-300 ease-in-out ${
              isMenuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></span>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
        aria-hidden="true"
      ></div>

      {/* Mobile Menu Slide-in Panel */}
      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 w-64 h-full bg-white z-50 shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ maxWidth: "100vw" }}
      >
        <div className="flex flex-col h-full p-6">
          <div className="flex justify-end mb-6">
            <button
              onClick={toggleMenu}
              className="text-gray-500 hover:text-gray-800 focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav aria-label="Mobile navigation">
            <ul className="flex flex-col space-y-6">
              <li>
                <Link
                  href="/"
                  className="text-base sm:text-lg text-gray-600 hover:text-[#38bdf8]"
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-base sm:text-lg text-gray-600 hover:text-[#38bdf8]"
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-base sm:text-lg text-gray-600 hover:text-[#38bdf8]"
                  onClick={toggleMenu}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-base sm:text-lg text-gray-600 hover:text-[#38bdf8]"
                  onClick={toggleMenu}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-base sm:text-lg text-gray-600 hover:text-[#38bdf8]"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          <div className="mt-auto">
            <Link href="/contact" onClick={toggleMenu}>
              <button className="w-full bg-[#38bdf8] text-white py-2 rounded-full hover:bg-[#0ea5e9] transition-colors text-xs sm:text-sm">
                Call Us Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
