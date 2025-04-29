import Image from "next/image";
import Link from "next/link";
import NavigationClient from "./NavigationClient";
import {
  DesktopMenu,
  MobileControls,
  MobileMenuOverlay,
} from "./NavMenuClient";

export default function Navbar() {
  return (
    <NavigationClient>
      <nav
        className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 bg-white sm:px-8 lg:px-25 z-[100] transition-all duration-300 shadow-sm"
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

        {/* Desktop Menu (client component) */}
        <DesktopMenu />

        {/* Mobile Controls (client component) */}
        <MobileControls />
      </nav>

      {/* Mobile Menu Overlay (client component) */}
      <MobileMenuOverlay />
    </NavigationClient>
  );
}
