import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaArrowRight,
} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#07102e] text-white">
      {/* Background Glow */}
      <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/20 blur-3xl"></div>

      <div className="mx-auto max-w-[1320px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div>
            <h2 className="text-3xl font-extrabold tracking-wide">
              Sardar Patel Bhavan
            </h2>

            <p className="mt-5 text-sm leading-7 text-slate-300">
              A premium community destination in Bengaluru dedicated to
              culture, traditions, celebrations, and togetherness.
            </p>

            {/* Social Icons */}
            <div className="mt-8 flex items-center gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-lg transition duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:text-black"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-lg transition duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:text-black"
              >
                <FaInstagram />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/10 text-lg transition duration-300 hover:-translate-y-1 hover:bg-cyan-400 hover:text-black"
              >
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Address Section */}
          <div>
            <h3 className="mb-7 text-2xl font-bold text-cyan-300">
              Contact Us
            </h3>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  <FaMapMarkerAlt className="text-cyan-400" />
                </div>

                <p className="text-sm leading-7 text-slate-300">
                  SARDAR PATEL BHAVAN BANGALORE
                  <br />
                  #16, Thimmaiah Road,
                  <br />
                  (Opp. Cantt. Rly Station),
                  <br />
                  Vasanth Nagar,
                  <br />
                  Bengaluru - 560052
                </p>
              </div>

              <div className="flex items-center gap-4">
                <FaPhoneAlt className="text-cyan-400" />

                <a
                  href="tel:6287678767"
                  className="text-sm text-slate-300 transition hover:text-cyan-400"
                >
                  62876 78767
                </a>
              </div>

              <div className="flex items-center gap-4">
                <FaEnvelope className="text-cyan-400" />

                <a
                  href="mailto:patelbhavanbengaluru@hotmail.com"
                  className="break-all text-sm text-slate-300 transition hover:text-cyan-400"
                >
                  patelbhavanbengaluru@hotmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="mb-7 text-2xl font-bold text-cyan-300">
              Quick Links
            </h3>

            <ul className="space-y-4">
              <li>
                <NavLink
                  to="/"
                  className="group flex items-center gap-3 text-sm text-slate-300 transition hover:text-cyan-400"
                >
                  <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className="group flex items-center gap-3 text-sm text-slate-300 transition hover:text-cyan-400"
                >
                  <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/event"
                  className="group flex items-center gap-3 text-sm text-slate-300 transition hover:text-cyan-400"
                >
                  <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
                  Events
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/gallery"
                  className="group flex items-center gap-3 text-sm text-slate-300 transition hover:text-cyan-400"
                >
                  <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
                  Gallery
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className="group flex items-center gap-3 text-sm text-slate-300 transition hover:text-cyan-400"
                >
                  <FaArrowRight className="text-xs transition group-hover:translate-x-1" />
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="mb-7 text-2xl font-bold text-cyan-300">
              Newsletter
            </h3>

            <p className="mb-6 text-sm leading-7 text-slate-300">
              Subscribe to receive updates about events, celebrations, and
              cultural activities.
            </p>

            <div className="relative">
              <input
                type="email"
                placeholder="Your email"
                className="h-14 w-full rounded-full border border-white/10 bg-white/10 px-6 pr-32 text-sm text-white outline-none backdrop-blur-md placeholder:text-slate-400 focus:border-cyan-400"
              />

              <button className="absolute right-2 top-2 rounded-full bg-cyan-400 px-6 py-3 text-sm font-semibold text-black transition hover:bg-cyan-300">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-center md:flex-row">
          <p className="text-sm tracking-wide text-slate-400">
            Copyright © 2026 AG Solutions, All Rights Reserved.
          </p>

          <div className="flex items-center gap-5 text-sm text-slate-400">
            <NavLink
              to="/privacy-policy"
              className="transition hover:text-cyan-400"
            >
              Privacy Policy
            </NavLink>

            <NavLink
              to="/terms"
              className="transition hover:text-cyan-400"
            >
              Terms & Conditions
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer