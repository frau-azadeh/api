"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import SearchBar from "@/components/ui/SearchBar";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto  sm:px-6 lg:px-8">
        {/* Mobile & Desktop Container */}
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 text-xl font-bold text-blue-600"
          >
            <img
              src="/logo.png"
              alt="Logo"
              className="w-15 h-15 m-2 transform transition hover:scale-125"
            />
          </Link>

          {/* Center: Search bar */}
          <div className="flex-1 flex justify-center">
            <SearchBar />
          </div>

          {/* Right: Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 hover:text-blue-600 md:hidden m-2"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-6 ">
            <Link
              href="/todo"
              className="text-gray-700 rounded-lg transition px-4 py-2 hover:bg-blue-950 hover:text-white"
            >
              To do
            </Link>
            <Link
              href="/posts"
              className="text-gray-700 rounded-lg transition px-4 py-2 hover:bg-blue-950 hover:text-white"
            >
              Post
            </Link>
            <Link
              href="/photo"
              className="text-gray-700 rounded-lg transition px-4 py-2 hover:bg-blue-950 hover:text-white"
            >
              Photo
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-2 pb-4 bg-blue-100 ">
            <Link
              href="/todo"
              className="block text-gray-700 hover:bg-blue-950 hover:text-white py-2 p-2"
            >
              To do
            </Link>
            <Link
              href="/posts"
              className="block text-gray-700 hover:bg-blue-950 hover:text-white py-2 p-2"
            >
              Post
            </Link>
            <Link
              href="/photo"
              className="block text-gray-700 hover:bg-blue-950 hover:text-white py-2 p-2"
            >
              Photo
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
