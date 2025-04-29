"use client";

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

// Client-side navigation logic component
export default function NavigationClient({
  children,
}: {
  children: React.ReactNode;
}) {
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
    <NavigationContext.Provider
      value={{
        isMenuOpen,
        isScrolled,
        isVisible,
        toggleMenu,
        handleNavigation,
        handleHomeNavigation,
        isHomePage,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

// Create context to share navigation state
export const NavigationContext = React.createContext({
  isMenuOpen: false,
  isScrolled: false,
  isVisible: true,
  toggleMenu: () => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  handleNavigation: (sectionId: string) => {},
  handleHomeNavigation: () => {},
  isHomePage: false,
});
