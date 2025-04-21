"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import CallUsNowButton from "./CallUsNowButton";
import { usePathname, useRouter } from "next/navigation";
import { BlogLink } from "./NavbarClientWrapper";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const pathname = usePathname();
  const router = useRouter();
  const isHomePage = pathname === "/";

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;

      setIsScrolled(currentScrollPos > 10);

      const isScrollingUp = prevScrollPos > currentScrollPos;
      const scrollDifference = Math.abs(prevScrollPos - currentScrollPos);

      if (scrollDifference > 10) {
        setIsVisible(isScrollingUp || currentScrollPos < 10);
        setPrevScrollPos(currentScrollPos);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isMenuOpen, prevScrollPos]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (sectionId: string) => {
    if (isHomePage) {
      scrollToSection(sectionId);
    } else {
      router.push(`/#${sectionId}`);
    }
  };

  const handleHomeNavigation = () => {
    if (isHomePage) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }

    if (isMenuOpen) {
      toggleMenu();
    }
  };

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      if (isMenuOpen) {
        toggleMenu();
      }

      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-white sm:px-8 lg:px-25 z-[100] transition-all duration-300 ${
          isScrolled ? "shadow-md" : "shadow-sm"
        } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
        aria-label="Main navigation"
      >
        <div className="flex items-center">
          <Link href="/">
            <div className="flex items-center">
              <Image
                src="/images/site-logo.svg"
                alt="JB Plumbing and Heating"
                width={150}
                height={150}
                className="w-40 sm:w-40 md:w-48 lg:w-52 h-auto"
                priority
              />
            </div>
          </Link>
        </div>

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
          <Link href="/contact-us">
            <CallUsNowButton className="px-4 sm:px-6 py-2 text-xs sm:text-sm" />
          </Link>
        </div>

        <div className="flex items-center lg:hidden">
          <Link
            href="/contact-us"
            className="mr-3"
            onClick={() => {
              if (isMenuOpen) {
                toggleMenu();
              }
            }}
          >
            <CallUsNowButton className="px-4 py-1.5 text-xs" />
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
      </nav>

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
};

export default Navbar;
