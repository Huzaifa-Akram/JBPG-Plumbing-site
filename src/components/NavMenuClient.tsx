"use client";

import React, { useContext } from "react";
import Link from "next/link";
import { NavigationContext } from "./NavigationClient";

// Button styles
const callButtonStyles = {
  button: `relative bg-[#62c46f] text-white font-medium rounded-full 
           transition-all duration-300 hover:bg-[#4ea75a] hover:scale-105 
           active:scale-95 shadow-md px-4 py-2 text-xs sm:text-sm`,
  container: `relative`,
};

// Client component for Blog Link
export function BlogLink({
  className,
  onClick,
}: {
  className: string;
  onClick?: () => void;
}) {
  return (
    <Link
      href="/blog"
      className={className}
      onClick={onClick}
      suppressHydrationWarning={true}
    >
      Blog
    </Link>
  );
}

// Desktop Navigation Menu
export function DesktopMenu() {
  const { handleHomeNavigation, handleNavigation } =
    useContext(NavigationContext);

  return (
    <>
      <div className="hidden lg:flex items-center justify-center">
        <ul className="flex space-x-5 xl:space-x-8">
          <li>
            <button
              onClick={handleHomeNavigation}
              className="text-sm xl:text-base text-gray-600 hover:text-[#38bdf8] transition-colors"
            >
              Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("about-us")}
              className="text-sm xl:text-base text-gray-600 hover:text-[#38bdf8] transition-colors"
            >
              About Us
            </button>
          </li>
          <li>
            <button
              onClick={() => handleNavigation("services")}
              className="text-sm xl:text-base text-gray-600 hover:text-[#38bdf8] transition-colors"
            >
              Services
            </button>
          </li>
          <li>
            <BlogLink className="text-sm xl:text-base text-gray-600 hover:text-[#38bdf8] transition-colors" />
          </li>
          <li>
            <Link
              href="/contact-us"
              className="text-sm xl:text-base text-gray-600 hover:text-[#38bdf8] transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="hidden lg:block">
        <Link href="tel:02036332827">
          <div className={callButtonStyles.container}>
            <button
              className={`${callButtonStyles.button} px-6 py-2 text-xs sm:text-sm`}
            >
              Call Us Now
            </button>
          </div>
        </Link>
      </div>
    </>
  );
}

// Mobile Navigation Controls
export function MobileControls() {
  const { isMenuOpen, toggleMenu } = useContext(NavigationContext);

  return (
    <div className="flex items-center lg:hidden">
      <Link
        href="tel:+442036332827"
        className="mr-3"
        onClick={() => {
          if (isMenuOpen) {
            toggleMenu();
          }
        }}
      >
        <div className={callButtonStyles.container}>
          <button className={`${callButtonStyles.button} px-4 py-1.5 text-xs`}>
            Call Us Now
          </button>
        </div>
      </Link>

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
  );
}

// Mobile Menu Overlay
export function MobileMenuOverlay() {
  const { isMenuOpen, toggleMenu, handleHomeNavigation, handleNavigation } =
    useContext(NavigationContext);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-[999] lg:hidden transition-opacity duration-300 ease-in-out ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={toggleMenu}
        aria-hidden="true"
      ></div>

      <div
        id="mobile-menu"
        className={`fixed top-0 right-0 w-64 h-full bg-white z-[1000] shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto ${
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
                <button
                  onClick={handleHomeNavigation}
                  className="text-base sm:text-lg text-gray-600 hover:text-[#38bdf8]"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("about-us")}
                  className="text-base sm:text-lg text-gray-600 hover:text-[#38bdf8]"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNavigation("services")}
                  className="text-base sm:text-lg text-gray-600 hover:text-[#38bdf8]"
                >
                  Services
                </button>
              </li>
              <li>
                <BlogLink
                  className="text-base sm:text-lg text-gray-600 hover:text-[#38bdf8]"
                  onClick={toggleMenu}
                />
              </li>
              <li>
                <Link
                  href="/contact-us"
                  className="text-base sm:text-lg text-gray-600 hover:text-[#38bdf8]"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
