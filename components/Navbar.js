"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { SunIcon, MoonIcon, Cog6ToothIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  //  const [dark, setDark] = useState(false);

  // useEffect(() => {
  //   document.documentElement.classList.toggle("dark", dark);
  // }, [dark]);

  return ( 
    <>
        <nav className="fixed top-4 left-1/2 -translate-x-1/2
            w-[95%] max-w-6xl
            bg-white/30 dark:bg-slate-900/40
            backdrop-blur-lg
            rounded-2xl px-6 py-4
            shadow-lg
            flex items-center justify-between
            z-50"
        >
          
          {/* Logo */}
          <div className="flex items-center gap-2 font-bold text-lg text-gray-800 dark:text-white">
            <span className="text-lg">📚</span>
            <span>Shelfie</span>
          </div>          

          {/* Links */}
          <div className="hidden md:flex items-center gap-6 text-gray-700 dark:text-gray-200 font-medium">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/login" className="hover:text-blue-600 bg-blue-500 text-white px-4 py-2 rounded-2xl">Sign In</Link>
            {/* <button
              onClick={() => setDark(!dark)}
              className="
               rounded-lg p-2
               bg-black/10 dark:bg-white/10
               text-gray-800 dark:text-white
               hover:scale-105 transition
              "
              aria-label="Toggle theme"
            >
              {dark ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </button> */}
            <Link href="/setting" title="Privacy" className="hover:text-blue-600"> <Cog6ToothIcon className="h-5 w-5" /> </Link>
          </div>   

          {/* Right controls */}
        <div className="flex items-center gap-3 md:hidden">                

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-gray-800 dark:text-white"
          >
            ☰
          </button>
        </div>
        </nav>

        {/* Mobile Dropdown */}
      {menuOpen && (
        <div
          className="
            fixed top-24 left-1/2 -translate-x-1/2
            w-[90%] max-w-sm
            bg-white dark:bg-slate-900
            rounded-2xl shadow-xl
            p-6
            z-40
            animate-[fadeDown_0.25s_ease-out]
          "
        >
          <div className="flex flex-col gap-4 text-gray-700 dark:text-gray-200 font-medium">
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link href="/login" onClick={() => setMenuOpen(false)}>
              Login
            </Link>
            <Link href="/register" onClick={() => setMenuOpen(false)}>
              Register
            </Link>
            <Link href="/setting" onClick={() => setMenuOpen(false)}>
              Setting
            </Link>

          </div>
        </div>
      )}
    </>  
   );
}
 
export default Navbar;