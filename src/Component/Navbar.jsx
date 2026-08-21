import React, { useState } from 'react'
import spaimg1 from '../assets/spaimg1.jpg'
import { NavLink } from "react-router-dom"

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div
      className="
        min-h-screen
        bg-cover
        bg-center
        bg-no-repeat
        shadow-md
              transition
              duration-300
              hover:shadow-xl
              hover:-translate-y-2
      "
      fetchpriority="high"
      style={{ backgroundImage: `url(${spaimg1})` }}
    >

      {/* Navbar */}
      <div className="
        px-6
        sm:px-10
        lg:px-16
        py-6
        flex
        items-center
        justify-between
        relative
      ">

        {/* Logo */}
        <div className="
          text-2xl
          sm:text-3xl
          font-bold
          text-white
        ">
          Logo
        </div>


        {/* Desktop Navigation */}
        <ul className="
          hidden
          md:flex
          items-center
          gap-8
          lg:gap-12
          text-white
        ">

          <li>
            <NavLink
              to="/Aboutpage"
              className="hover:text-orange-300 transition"
            >
              About
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Servicepage"
              className="hover:text-orange-300 transition"
            >
              Service
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Contactform"
              className="hover:text-orange-300 transition"
            >
              Contact Us
            </NavLink>
          </li>

        </ul>


        {/* Hamburger Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            md:hidden
            text-white
            text-3xl
            font-bold
            focus:outline-none
          "
        >
          {menuOpen ? "✕" : "☰"}
        </button>


        {/* Mobile Menu */}
        {menuOpen && (
          <div className="
            absolute
            top-20
            right-5
            w-52
            bg-[#3E2C22]
            rounded-xl
            shadow-xl
            p-5
            z-50
            md:hidden
          ">

            <ul className="
              flex
              flex-col
              items-center
              gap-5
              text-white
            ">

              <li>
                <NavLink
                  to="/Aboutpage"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-orange-300 transition"
                >
                  About
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Servicepage"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-orange-300 transition"
                >
                  Service
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/Contactform"
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-orange-300 transition"
                >
                  Contact Us
                </NavLink>
              </li>

            </ul>

          </div>
        )}

      </div>


      {/* Hero Section */}
      <section className="
        text-center
        px-5
        sm:px-10
        lg:px-20
        mt-20
        sm:mt-28
        lg:mt-32
      ">

        <h1 className="
          text-3xl
          sm:text-4xl
          lg:text-5xl
          font-bold
          text-white
        ">
          Welcome To Our Spa
        </h1>

        <p className="
          text-lg
          sm:text-xl
          lg:text-2xl
          font-bold
          mt-4
          text-white
        ">
          Experience the ultimate in relaxation and rejuvenation.
        </p>

        <h3 className="
          text-3xl
          sm:text-4xl
          lg:text-5xl
          font-bold
          mt-4
          text-white
        ">
          Relax, Refresh, Reconnect
        </h3>


        {/* Buttons */}
        <section className="
          mt-10
          flex
          flex-col
          sm:flex-row
          justify-center
          items-center
          gap-4
          sm:gap-8
        ">

          <NavLink to="/Contactform">
            <button className="
              bg-red-950
              text-white
              h-10
              w-48
              rounded-lg
              hover:bg-orange-800
              transition
            ">
              Book An Appointment
            </button>
          </NavLink>

          <NavLink to="/Aboutpage">
            <button className="
              bg-red-950
              text-white
              h-10
              w-48
              rounded-lg
              hover:bg-orange-800
              transition
            ">
              About Us
            </button>
          </NavLink>

        </section>

      </section>

    </div>
  )
}

export default Navbar