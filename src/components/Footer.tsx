import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Instagram, Youtube } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/menu', label: 'Our Menu' },
  { href: '/reservation', label: 'Reservation' },
]

export default function Footer() {
  return (
    <footer className="bg-dark-lighter pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div>
            <Link href="/">
              <Image
                src="/images/logo.png"
                alt="Baha Lounge"
                width={150}
                height={150}
                className="h-32 w-auto mb-4"
              />
            </Link>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xl font-serif text-white mb-6">About</h3>
            <nav className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-400 hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-serif text-white mb-6">Newsletters</h3>
            <p className="text-gray-400 mb-4">Please sign up for offers and events.</p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                className="bg-dark border border-gray-700 px-4 py-3 text-white placeholder-gray-500 focus:border-primary focus:outline-none"
              />
              <button type="submit" className="btn-primary">
                Subscribe
              </button>
            </form>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-serif text-white mb-6">Contact</h3>
            <div className="space-y-4 text-gray-400">
              <p>
                BAHA-LOUNGE RESTAURANT & SHISHA<br />
                2-6 DEANCROSS STREET<br />
                LONDON E1 2QA
              </p>
              <p>
                <a
                  href="mailto:HELLO@BAHALOUNGE.COM"
                  className="hover:text-primary transition-colors"
                >
                  HELLO@BAHALOUNGE.COM
                </a>
              </p>
              <p>
                <a
                  href="tel:07908812345"
                  className="hover:text-primary transition-colors"
                >
                  079 0881 2345
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} bahalounge.com, All Rights Reserved
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/profile.php?id=61585576940921"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="https://www.tiktok.com/@baha_lounge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="TikTok"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
              </svg>
            </a>
            <a
              href="https://www.instagram.com/baha_lounge"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <Youtube className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
