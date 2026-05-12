import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../assets/logo.png'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Event', path: '/event' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact', path: '/contact' },
  { label: 'Register', path: '/register' },
]

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    [
      'flex h-12 items-center px-4 text-[15px] font-semibold uppercase transition-colors duration-200 lg:h-20',
      isActive ? 'text-[#0d6efd]' : 'text-gray-900 hover:text-[#0d6efd]',
    ].join(' ')

  return (
    <nav className="sticky top-0 z-50 border-t-[5px] border-[#0d6efd] bg-white shadow-md">
      <div className="mx-auto flex min-h-20 w-full max-w-[1320px] items-center justify-between">
        <NavLink
          to="/"
          className="flex min-h-20 items-center px-4 lg:px-12"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={logo}
            alt="Samyukt Gujarati Samaj"
            className="h-14 w-auto object-contain lg:h-16"
          />
        </NavLink>

        <button
          type="button"
          className="mr-4 inline-flex h-11 w-11 items-center justify-center border border-gray-300 text-gray-700 lg:hidden"
          aria-controls="navbar-menu"
          aria-expanded={isOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="relative h-4 w-5">
            <span className="absolute left-0 top-0 h-0.5 w-5 bg-current" />
            <span className="absolute left-0 top-1/2 h-0.5 w-5 -translate-y-1/2 bg-current" />
            <span className="absolute bottom-0 left-0 h-0.5 w-5 bg-current" />
          </span>
        </button>

        <div
          id="navbar-menu"
          className={`absolute left-0 top-full w-full border-t border-gray-100 bg-white lg:static lg:flex lg:w-auto lg:flex-1 lg:items-center lg:justify-end lg:border-t-0 ${isOpen ? 'block' : 'hidden lg:flex'
            }`}
        >
          <div className="flex flex-col p-4 lg:ml-auto lg:flex-row lg:p-0">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/'}
                className={navLinkClass}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <h4 className="hidden pr-10 text-xl font-semibold text-gray-900 lg:block">
            <a href="tel:+916287678767" className="flex items-center gap-3 hover:text-[#0d6efd]">
              <span className="text-2xl text-[#0d6efd]" aria-hidden="true">
                &#9742;
              </span>
              +91 62876 78767
            </a>
          </h4>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
