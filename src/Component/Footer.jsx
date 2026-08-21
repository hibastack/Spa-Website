import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='text-white bg-[#3E2C22]'>

      {/* Navbar */}
      <div className='
        px-6
        sm:px-10
        lg:px-16
        py-8
        flex
        flex-col
        sm:flex-row
        items-center
        justify-between
        gap-6
      '>

        {/* Logo */}
        <div className='text-2xl font-bold'>
          Logo
        </div>

        {/* Links */}
        <ul className='
          flex
          flex-col
          sm:flex-row
          items-center
          gap-4
          sm:gap-8
          lg:gap-12
        '>

          <NavLink
            to="/Aboutpage"
            className='hover:text-orange-300 transition'
          >
            About
          </NavLink>

          <NavLink
            to="/Servicepage"
            className='hover:text-orange-300 transition'
          >
            Service
          </NavLink>

          <NavLink
            to="/Contactform"
            className='hover:text-orange-300 transition'
          >
            Contact Us
          </NavLink>

        </ul>

      </div>


      {/* Footer Content */}
      <div className='
        flex
        flex-col
        lg:flex-row
        gap-10
        px-6
        sm:px-10
        lg:px-16
        pb-10
      '>

        {/* Contact Info */}
        <div className='
          w-full
          lg:w-1/2
          mt-5
          lg:mt-10
        '>

          <h1 className='
            text-3xl
            sm:text-4xl
            font-semibold
          '>
            Connect With Us
          </h1>

          <p className='mt-5'>
            24 Serenity Lane, Gulberg III, Lahore, Pakistan
          </p>

          <footer className='mt-12'>
            © 2026 Your Name. All rights reserved.
          </footer>

        </div>


        {/* Booking Box */}
        <div className='
          w-full
          lg:w-1/2
          shadow-[0_4px_15px_rgba(62,44,34,0.15)]
          border
          border-solid
          rounded-lg
          mt-5
          lg:mt-10
          p-6
          min-h-52
          flex
          flex-col
          items-center
          justify-center
        '>

          <h1 className='font-bold text-xl text-center'>
            A Moment Just For You
          </h1>

          <p className='mt-2 text-center'>
            ~Give Yourself A Break
          </p>

          <NavLink to="/Contactform">
            <button
              className='
                mt-5
                bg-red-950
                text-white
                h-10
                w-48
                rounded-lg
                hover:bg-orange-800
                transition
              '
            >
              Book An Appointment
            </button>
          </NavLink>

        </div>

      </div>

    </div>
  )
}

export default Footer