import React from 'react'
import img12 from "../assets/img12.jpg"
import img13 from "../assets/img13.jpg"
import img14 from "../assets/img14.jpg"
import img15 from "../assets/img15.jpg"
import img16 from "../assets/img16.jpg"
import img17 from "../assets/img17.jpg"
import img11 from "../assets/img11.jpg"
import { NavLink } from 'react-router-dom'

const Servicepage = () => {
  return (
    <div>

      <div className="px-5 sm:px-8 lg:px-10 py-10">

        <h1 className="
          text-center
          text-3xl
          sm:text-4xl
          mb-10
          sm:mb-14
          font-extrabold
          text-[#3E2C22]
        ">
          What We Are Offering
        </h1>


        {/* Hot Stone Massage */}
        <div className="
          flex
          flex-col
          lg:flex-row
          items-center
          gap-6
          lg:gap-16
          mb-16
        ">

          <img
            src={img11}
            alt="Hot Stone Massage"
            className="
              w-full
              lg:w-1/2
              h-64
              sm:h-80
              object-cover
              rounded-lg
              shadow-md
              transition
              duration-300
              hover:shadow-xl
              hover:-translate-y-2
            "
          />

          <div className="w-full lg:w-1/2">

            <h3 className="
              mb-4
              font-bold
              text-xl
              sm:text-2xl
              text-[#3E2C22]
            ">
              Hot Stone Massage
            </h3>

            <p className="
              leading-7
              text-gray-600
              text-sm
              sm:text-base
            ">
              Hot Stone Massage is a deeply relaxing treatment that combines
              the soothing warmth of heated stones with gentle massage
              techniques. Smooth, heated stones are carefully placed on
              specific areas of the body to help release muscle tension and
              create a sense of deep relaxation.
            </p>

            <NavLink to="/Contactform">
              <button className="
                mt-5
                font-bold
                text-[#3E2C22]
                hover:underline
              ">
                Book Your Session →
              </button>
            </NavLink>

          </div>

        </div>


        {/* Deep Tissue Massage */}
        <div className="
          flex
          flex-col
          lg:flex-row-reverse
          items-center
          gap-6
          lg:gap-16
          mb-16
        ">

          <img
            src={img14}
            alt="Deep Tissue Massage"
            className="
              w-full
              lg:w-1/2
              h-64
              sm:h-80
              object-cover
              rounded-lg
              shadow-md
              transition
              duration-300
              hover:shadow-xl
              hover:-translate-y-2
            "
          />

          <div className="w-full lg:w-1/2">

            <h3 className="
              mb-4
              font-bold
              text-xl
              sm:text-2xl
              text-[#3E2C22]
            ">
              Deep Tissue Massage
            </h3>

            <p className="
              leading-7
              text-gray-600
              text-sm
              sm:text-base
            ">
              Deep Tissue Massage focuses on deeper layers of muscle and
              connective tissue using slower, more targeted techniques. It can
              be a great choice for guests who prefer a firmer massage and
              want focused attention on areas of muscle tightness.
            </p>

            <NavLink to="/Contactform">
              <button className="
                mt-5
                font-bold
                text-[#3E2C22]
                hover:underline
              ">
                Book Your Session →
              </button>
            </NavLink>

          </div>

        </div>


        {/* Aromatherapy Massage */}
        <div className="
          flex
          flex-col
          lg:flex-row
          items-center
          gap-6
          lg:gap-16
          mb-16
        ">

          <img
            src={img16}
            alt="Aromatherapy Massage"
            className="
              w-full
              lg:w-1/2
              h-64
              sm:h-80
              object-cover
              rounded-lg
              shadow-md
              transition
              duration-300
              hover:shadow-xl
              hover:-translate-y-2
            "
          />

          <div className="w-full lg:w-1/2">

            <h3 className="
              mb-4
              font-bold
              text-xl
              sm:text-2xl
              text-[#3E2C22]
            ">
              Aromatherapy Massage
            </h3>

            <p className="
              leading-7
              text-gray-600
              text-sm
              sm:text-base
            ">
              Aromatherapy Massage combines gentle massage techniques with
              carefully selected essential oils to create a calming and
              relaxing experience. The soothing aromas and peaceful massage
              help you unwind, release everyday tension, and enjoy a moment
              of complete relaxation.
            </p>

            <NavLink to="/Contactform">
              <button className="
                mt-5
                font-bold
                text-[#3E2C22]
                hover:underline
              ">
                Book Your Session →
              </button>
            </NavLink>

          </div>

        </div>


        {/* Body Scrub */}
        <div className="
          flex
          flex-col
          lg:flex-row-reverse
          items-center
          gap-6
          lg:gap-16
          mb-16
        ">

          <img
            src={img17}
            alt="Body Scrub"
            className="
              w-full
              lg:w-1/2
              h-64
              sm:h-80
              object-cover
              rounded-lg
              shadow-md
              transition
              duration-300
              hover:shadow-xl
              hover:-translate-y-2
            "
          />

          <div className="w-full lg:w-1/2">

            <h3 className="
              mb-4
              font-bold
              text-xl
              sm:text-2xl
              text-[#3E2C22]
            ">
              Body Scrub
            </h3>

            <p className="
              leading-7
              text-gray-600
              text-sm
              sm:text-base
            ">
              Our Body Scrub treatment gently exfoliates the skin to help
              remove accumulated dead skin cells and leave your skin feeling
              smoother and refreshed. Combined with nourishing care, it's a
              relaxing way to give your skin some extra attention.
            </p>

            <NavLink to="/Contactform">
              <button className="
                mt-5
                font-bold
                text-[#3E2C22]
                hover:underline
              ">
                Book Your Session →
              </button>
            </NavLink>

          </div>

        </div>


        {/* Facial Treatment */}
        <div className="
          flex
          flex-col
          lg:flex-row
          items-center
          gap-6
          lg:gap-16
          mb-16
        ">

          <img
            src={img15}
            alt="Facial Treatment"
            className="
              w-full
              lg:w-1/2
              h-64
              sm:h-80
              object-cover
              rounded-lg
              shadow-md
              transition
              duration-300
              hover:shadow-xl
              hover:-translate-y-2
            "
          />

          <div className="w-full lg:w-1/2">

            <h3 className="
              mb-4
              font-bold
              text-xl
              sm:text-2xl
              text-[#3E2C22]
            ">
              Facial Treatment
            </h3>

            <p className="
              leading-7
              text-gray-600
              text-sm
              sm:text-base
            ">
              Treat your skin to a relaxing facial designed to cleanse,
              refresh, and nourish. Our facial treatment combines gentle
              cleansing, exfoliation, massage, and moisturizing care to leave
              your skin feeling soft, fresh, and beautifully refreshed.
            </p>

            <NavLink to="/Contactform">
              <button className="
                mt-5
                font-bold
                text-[#3E2C22]
                hover:underline
              ">
                Book Your Session →
              </button>
            </NavLink>

          </div>

        </div>

      </div>


      {/* Footer */}
      <div className="
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
      ">

        {/* Contact Info */}
        <div className="
          w-full
          lg:w-1/2
          mt-5
          lg:mt-10
        ">

          <h1 className="
            text-3xl
            sm:text-4xl
            font-semibold
          ">
            Connect With Us
          </h1>

          <p className="mt-5">
            24 Serenity Lane, Gulberg III, Lahore, Pakistan
          </p>

          <footer className="mt-12">
            © 2026 Your Name. All rights reserved.
          </footer>

        </div>


        {/* Booking Box */}
        <div className="
          w-full
          lg:w-1/2
          shadow-[0_4px_15px_rgba(62,44,34,0.15)]
          border
          border-solid
          rounded-lg
          mt-5
          lg:mt-10
          mb-5
          p-6
          min-h-52
          flex
          flex-col
          items-center
          justify-center
        ">

          <h1 className="
            font-bold
            text-xl
            text-center
          ">
            A Moment Just For You
          </h1>

          <p className="mt-2">
            ~Give Yourself A Break
          </p>

          <NavLink to="/Contactform">
            <button className="
              mt-5
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

        </div>

      </div>

    </div>
  )
}

export default Servicepage