'use client'

import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTentangKamiClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = pathname === '/' ? 'prologue' : '/?scrollTo=prologue';
    pathname === '/' 
      ? document.getElementById(target)?.scrollIntoView({ behavior: 'smooth' }) 
      : router.push(target);
    setIsMenuOpen(false);
  };

  return (
    <nav className={classNames("fixed top-0 w-full z-50", { "bg-white shadow-md": isScrolled, "bg-transparent": !isScrolled })}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link href="/" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
              <Image src="/icon.svg" alt="Logo" width={50} height={50} />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
              <Link
                href="#prologue"
                className={classNames("px-3 py-2 rounded-md text-sm font-medium", {
                  "bg-gray-200 text-gray-900": pathname === "#prologue",
                  "text-gray-800 hover:bg-gray-200": pathname !== "#prologue",
                })}
                onClick={handleTentangKamiClick}
              >
                Tentang Kami
              </Link>
              <Link
                href="/program"
                className={classNames("px-3 py-2 rounded-md text-sm font-medium", {
                  "bg-gray-200 text-gray-900": pathname === "/program",
                  "text-gray-800 hover:bg-gray-200": pathname !== "/program",
                })}
              >
                Program
              </Link>
              <Link
                href="/galeri"
                className={classNames("px-3 py-2 rounded-md text-sm font-medium", {
                  "bg-gray-200 text-gray-900": pathname === "/galeri",
                  "text-gray-800 hover:bg-gray-200": pathname !== "/galeri",
                })}
              >
                Galeri
              </Link>
              <Link
                href="/kontak"
                className={classNames("px-3 py-2 rounded-md text-sm font-medium", {
                  "bg-gray-200 text-gray-900": pathname === "/kontak",
                  "text-gray-800 hover:bg-gray-200": pathname !== "/kontak",
                })}
              >
                Kontak
              </Link>
            </div>
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-800 hover:bg-gray-200 px-5 py-2 rounded-md text-sm font-medium">
              Login
            </button>
            <button className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-800">
              Sign Up
            </button>
          </div>
          <div className="flex md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-gray-900 hover:bg-gray-100"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      <div className={classNames("md:hidden bg-gray-100 shadow-xl overflow-hidden transition-all duration-300 ease-in-out", { "max-h-96 opacity-100": isMenuOpen, "max-h-0 opacity-0": !isMenuOpen })}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="#prologue"
            className={classNames("block px-3 py-2 rounded-md text-base font-medium", {
              "bg-gray-200 text-gray-900": pathname === "#prologue",
              "text-gray-800 hover:bg-gray-200": pathname !== "#prologue",
            })}
            onClick={handleTentangKamiClick}
          >
            Tentang Kami
          </Link>
          <Link
            href="/program"
            className={classNames("block px-3 py-2 rounded-md text-base font-medium", {
              "bg-gray-200 text-gray-900": pathname === "/program",
              "text-gray-800 hover:bg-gray-200": pathname !== "/program",
            })}
          >
            Program
          </Link>
          <Link
            href="/galeri"
            className={classNames("block px-3 py-2 rounded-md text-base font-medium", {
              "bg-gray-200 text-gray-900": pathname === "/galeri",
              "text-gray-800 hover:bg-gray-200": pathname !== "/galeri",
            })}
          >
            Galeri
          </Link>
          <Link
            href="/kontak"
            className={classNames("block px-3 py-2 rounded-md text-base font-medium", {
              "bg-gray-200 text-gray-900": pathname === "/kontak",
              "text-gray-800 hover:bg-gray-200": pathname !== "/kontak",
            })}
          >
            Kontak
          </Link>
          <button className="w-full text-gray-800 hover:bg-gray-200 block px-4 py-2 rounded-md text-base font-medium">Login</button>
          <button className="bg-gray-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-700 w-full">Sign Up</button>
        </div>
        <div className="py-6 border-t border-gray-200">
          <div className="flex justify-center space-x-6 mt-4">
            <a href="https://www.facebook.com" className="text-gray-600 hover:text-gray-900"><FaFacebookF className="h-6 w-6" /></a>
            <a href="https://twitter.com" className="text-gray-600 hover:text-gray-900"><FaTwitter className="h-6 w-6" /></a>
            <a href="https://www.instagram.com/gemapalapurworejo/" className="text-gray-600 hover:text-gray-900"><FaInstagram className="h-6 w-6" /></a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;