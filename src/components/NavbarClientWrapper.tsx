"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// This component ensures the client and server render the same href for blog links
export const BlogLink: React.FC<{
  className: string;
  onClick?: () => void;
  suppressHydrationWarning?: boolean;
}> = ({ className, onClick, suppressHydrationWarning }) => {
  return (
    <Link
      href="/blog"
      className={className}
      onClick={onClick}
      suppressHydrationWarning={suppressHydrationWarning || true}
    >
      Blog
    </Link>
  );
};

// Smooth scroll component for hash links in the footer
export const SmoothScrollLink: React.FC<{
  href: string;
  className: string;
  children: React.ReactNode;
}> = ({ href, className, children }) => {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    // Only apply smooth scrolling on the home page
    if (isHomePage && href.startsWith("/#")) {
      e.preventDefault();

      // Extract the ID from the href (remove the /# part)
      const id = href.substring(2);
      const element = document.getElementById(id);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
  };

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  );
};
