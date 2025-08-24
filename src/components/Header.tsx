'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const NavLink = ({ href, label }: { href: string; label: string }) => (
  <Link
    href={href}
    className="text-primary font-medium hover:text-accent transition-colors duration-300"
  >
    {label}
  </Link>
);

const MobileNavLink = ({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) => (
  <Link
    href={href}
    className="text-primary font-medium hover:text-accent transition-colors duration-300"
    onClick={onClick}
  >
    {label}
  </Link>
);

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Desktop Header */}
      <header
        className={`hidden md:flex fixed w-full transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white py-4'}`}
        style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100 }}
      >
        <div className="container-custom flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center ml-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-12 w-40"
            >
              <Image
                src="/images/logo.jpg"
                alt="Arrodar Logo"
                fill
                className="object-contain"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex space-x-8"
          >
            <NavLink href="#disponibles" label="Disponibles" />
            <NavLink href="#clientes" label="Clientes" />
            <NavLink href="#vendemos" label="Vendemos tu Auto" />
            <NavLink href="#contacto" label="Contacto" />
          </motion.nav>
        </div>
      </header>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={toggleMobileMenu}
          className="text-primary focus:outline-none bg-white rounded-full p-2 shadow-lg"
          aria-label="Toggle mobile menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="bg-white shadow-lg rounded-lg mt-2 w-48 overflow-hidden"
            >
              <div className="py-2 flex flex-col space-y-2 p-2">
                <MobileNavLink href="#disponibles" label="Disponibles" onClick={toggleMobileMenu} />
                <MobileNavLink href="#clientes" label="Clientes" onClick={toggleMobileMenu} />
                <MobileNavLink href="#vendemos" label="Vendemos tu Auto" onClick={toggleMobileMenu} />
                <MobileNavLink href="#contacto" label="Contacto" onClick={toggleMobileMenu} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}