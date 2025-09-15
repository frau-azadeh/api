"use client";

import React, { useCallback, useState } from "react";

import clsx from "clsx";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import SearchBar from "./SearchBar";

const navItems = [
  { href: "/", label: "Main" },
  { href: "/todo", label: "To do" },
  { href: "/posts", label: "Post" },
  { href: "/photo", label: "Photo" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = useCallback((href: string) => pathname === href, [pathname]);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/*Logo*/}
          <Link href="/" className="flex items-center gap-2 text-xl ">
            <img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 transition duration-300 hover:scale-125 border border-gray-300 shadow rounded-lg"
            />
          </Link>

          {/* search bar*/}
          <div className="flex flex-1 justify-center m-2">
            <SearchBar />
          </div>
          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-gary-600 hover:text-blue-700 duration-300 transition md:hidden m-2"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          <div className="hidden md:flex gap-6">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={clsx(
                  "px-4 py-2 rounded-lg transition duration-300 font-medium",
                  {
                    "bg-blue-950 text-white": isActive(href),
                    "text-gray-700 hover:bg-blue-950 hover:text-white":
                      !isActive(href),
                  },
                )}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
        {/*Mobile Nav*/}
        {menuOpen && (
          <div className="md:hidden mt-2 pb-4 bg-blue-100">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={closeMenu}
                className={clsx(
                  "px-4 py-2 rounded-lg transition duration-300 block",
                  {
                    "bg-blue-950 text-white": isActive(href),
                    "text-gray-700 hover:bg-blue-950 hover:text-white":
                      !isActive(href),
                  },
                )}
              >
                {label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
