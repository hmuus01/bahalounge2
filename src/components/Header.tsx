'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Phone } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/events', label: 'Events' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/menu', label: 'Our Menu' },
  { href: '/reservation', label: 'Reservation' },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-dark/95 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/images/logo.png"
              alt="Baha Lounge"
              width={120}
              height={120}
              className="h-28 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white hover:text-primary transition-colors duration-300 uppercase text-sm tracking-wider"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Phone & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <a
              href="tel:07908812345"
              className="flex items-center text-primary hover:text-primary-light transition-colors"
            >
              <Phone className="w-4 h-4 mr-2" />
              079 0881 2345
            </a>
            <Link href="/reservation" className="btn-primary">
              Book a Table
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-800">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-white hover:text-primary transition-colors duration-300 uppercase text-sm tracking-wider"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:07908812345"
                className="flex items-center text-primary hover:text-primary-light transition-colors"
              >
                <Phone className="w-4 h-4 mr-2" />
                079 0881 2345
              </a>
              <Link
                href="/reservation"
                className="btn-primary text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Book a Table
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
