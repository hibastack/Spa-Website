import React from 'react'
import newimg2 from "../assets/newimg2.jpg"
import newimg3 from "../assets/newimg3.jpg"
import newimg4 from "../assets/newimg4.jpg"
import newimg5 from "../assets/newimg5.jpg"
import newimg6 from "../assets/newimg6.jpg"
import newimg7 from "../assets/newimg7.jpg"
import newimg8 from "../assets/newimg8.jpg"
import Contactform from './Contactform'
import { NavLink } from 'react-router-dom'

const Aboutpage = () => {
  return (
    <div>

      {/* Hero Heading */}
      <div className='
        px-5
        sm:px-10
        lg:px-20
        mt-12
        lg:mt-20
        text-center
      '>

        <div className='
          flex
          flex-col
          sm:flex-row
          items-center
          justify-center
          gap-4
        '>

          <h1 className='
            text-4xl
            sm:text-5xl
            lg:text-6xl
          '>
            Heaven Like
          </h1>

          <img loading="lazy"
            src={newimg7}
            alt=""
            className='
              shadow-md
              transition
              duration-300
              hover:shadow-xl
              hover:-translate-x-2
              h-28
              w-72
              rounded-2xl
              object-cover
              border
              border-black
            '
          />

          <h1 className='
            text-4xl
            sm:text-5xl
            lg:text-6xl
          '>
            Experience
          </h1>

        </div>

      </div>


      {/* Section Heading */}
      <div>
        <h1 className='
          flex
          justify-center
          text-center
          mb-3
          text-4xl
          sm:text-5xl
          lg:text-6xl
          mt-16
          lg:mt-20
          px-4
        '>
          Choose Your Peace
        </h1>
      </div>


      {/* Cards */}
      <div className='
        grid
        grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-3
        gap-8
        px-5
        sm:px-10
        lg:px-20
        my-12
        lg:my-20
      '>

        {/* Card 1 */}
        <div>
          <img loading="lazy"
            src={newimg2}
            alt=""
            className='
              shadow-md
              transition
              duration-300
              hover:shadow-xl
              hover:-translate-y-3
              h-80
              w-full
              object-cover
              border
              rounded-lg
            '
          />

          <div>
            <h3 className='mt-2 mb-2 font-bold text-xl sm:text-2xl'>
              The Art of Relaxation
            </h3>

            <p>
              Discover simple ways to slow down, breathe deeply, and give
              your body the rest it deserves.
            </p>

            <NavLink to="/Contactform">
              <button className='
                mt-5
                font-bold
                text-[#3E2C22]
                hover:underline
              '>
                Read More →
              </button>
            </NavLink>
          </div>
        </div>


        {/* Card 2 */}
        <div>
          <img loading="lazy"
            src={newimg3}
            alt=""
            className='
              shadow-md
              transition
              duration-300
              hover:shadow-xl
              hover:-translate-y-2
              h-80
              w-full
              object-cover
              border
              rounded-lg
            '
          />

          <div>
            <h3 className='mt-2 mb-2 font-bold text-xl sm:text-2xl'>
              Create Your Perfect Spa Moment
            </h3>

            <p>
              From calming scents to warm towels, discover little rituals
              that turn an ordinary day into a peaceful escape.
            </p>

            <NavLink to="/Contactform">
              <button className='
                mt-5
                font-bold
                text-[#3E2C22]
                hover:underline
              '>
                Read More →
              </button>
            </NavLink>
          </div>
        </div>


        {/* Card 3 */}
        <div>
          <img loading="lazy"
            src={newimg4}
            alt=""
            className='
              animate-pulse
              shadow-md
              transition-all
              duration-300
              hover:shadow-xl
              hover:-translate-y-2
              h-80
              w-full
              object-cover
              border
              rounded-lg
            '
          />

          <div>
            <h3 className='mt-2 mb-2 font-bold text-xl sm:text-2xl'>
              Why Massage Is Good for You
            </h3>

            <p>
              Learn how regular massage can help you relax and create a
              deeper sense of well-being.
            </p>

            <NavLink to="/Contactform">
              <button className='
                mt-5
                font-bold
                text-[#3E2C22]
                hover:underline
              '>
                Read More →
              </button>
            </NavLink>
          </div>
        </div>


        {/* Card 4 */}
        <div>
          <img loading="lazy"
            src={newimg5}
            alt=""
            className='
              shadow-md
              transition
              duration-300
              hover:shadow-xl
              hover:-translate-y-2
              h-80
              w-full
              object-cover
              border
              rounded-lg
            '
          />

          <div>
            <h3 className='mt-2 mb-2 font-bold text-xl sm:text-2xl'>
              A Ritual of Self-Care
            </h3>

            <p>
              Give your skin the attention it deserves with soothing
              treatments designed to leave you feeling refreshed.
            </p>

            <NavLink to="/Contactform">
              <button className='
                mt-5
                font-bold
                text-[#3E2C22]
                hover:underline
              '>
                Read More →
              </button>
            </NavLink>
          </div>
        </div>


        {/* Card 5 */}
        <div>
          <img loading="lazy"
            src={newimg6}
            alt=""
            className='
              shadow-md
              transition
              duration-300
              hover:shadow-xl
              hover:-translate-y-2
              h-80
              w-full
              object-cover
              border
              rounded-lg
            '
          />

          <div>
            <h3 className='mt-2 mb-2 font-bold text-xl sm:text-2xl'>
              The Power of Touch
            </h3>

            <p>
              Explore the calming experience of massage and make relaxation
              a beautiful part of your routine.
            </p>

            <NavLink to="/Contactform">
              <button className='
                mt-5
                font-bold
                text-[#3E2C22]
                hover:underline
              '>
                Read More →
              </button>
            </NavLink>
          </div>
        </div>


        {/* Card 6 */}
        <div>
          <img loading="lazy"
            src={newimg8}
            alt=""
            className='
              shadow-md
              transition
              duration-300
              hover:shadow-xl
              hover:-translate-y-2
              h-80
              w-full
              object-cover
              border
              rounded-lg
            '
          />

          <div>
            <h3 className='mt-2 mb-2 font-bold text-xl sm:text-2xl'>
              Make Time for Yourself
            </h3>

            <p>
              Small moments of self-care can make a beautiful difference.
              Discover ways to bring more calm into your day.
            </p>

            <NavLink to="/Contactform">
              <button className='
                mt-5
                font-bold
                text-[#3E2C22]
                hover:underline
              '>
                Read More →
              </button>
            </NavLink>
          </div>
        </div>

      </div>


      {/* Footer */}
      <div className='
        flex
        flex-col
        lg:flex-row
        text-white
        bg-[#3E2C22]
        gap-10
        px-6
        sm:px-10
        lg:px-16
        py-10
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
          p-6
          mt-5
          lg:mt-10
          mb-5
          flex
          flex-col
          items-center
          justify-center
          min-h-52
        '>

          <h1 className='font-bold text-xl'>
            A Moment Just For You
          </h1>

          <p className='mt-2'>
            ~Give Yourself A Break
          </p>

          <NavLink to="/Contactform">
            <button className='
              mt-5
              bg-red-950
              text-white
              h-10
              w-48
              rounded-lg
              hover:bg-orange-800
              transition
            '>
              Book An Appointment
            </button>
          </NavLink>

        </div>

      </div>

    </div>
  )
}

export default Aboutpage