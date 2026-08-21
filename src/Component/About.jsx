import React from 'react'
import aboutimg from '../assets/aboutimg.jpg'
import imgabout2 from '../assets/imgabout2.jpg'
import imgabout3 from '../assets/imgabout3.jpg'
import { NavLink } from 'react-router-dom'

const About = () => {
  return (
    <div>

      <h1 className='
        text-3xl 
        sm:text-4xl 
        lg:text-5xl 
        font-bold 
        mt-10 
        text-center 
        px-4
      '>
        Place to Relax, Refresh & Reconnect
      </h1>

      <section className='
        mt-10 
        flex 
        flex-col 
        lg:flex-row 
        gap-8 
        px-5 
        sm:px-10 
        lg:px-20
        justify-center
      '>

        {/* Text Section */}
        <div className='w-full lg:w-1/2'>

          <p className='
            p-4 
            sm:p-6 
            lg:p-10 
            text-lg 
            sm:text-xl 
            lg:text-2xl 
            font-extralight
            leading-relaxed
          '>
            At our spa, we believe true wellness begins with taking a moment
            for yourself. Our goal is to create a peaceful space where you can
            escape the everyday stress, relax your body, and refresh your mind.

            From soothing massages to rejuvenating spa treatments, every
            experience is designed with care, comfort, and relaxation in mind.

            Your time. Your peace. Your wellness.
          </p>

          <div className='flex justify-center'>
            <NavLink to='/Aboutpage'>
              <button className='
                bg-red-950 
                text-white 
                h-10 
                w-48 
                rounded-lg 
                hover:bg-orange-800
                transition
              '>
                Learn More
              </button>
            </NavLink>
          </div>

        </div>


        {/* Images Section */}
        <div  className='w-full lg:w-1/2'>

          <div className='grid w-full gap-2'>

            <img fetchpriority="high"
              className='
                h-40 
                sm:h-48 
                lg:h-32 
                w-full 
                rounded-2xl 
                object-cover
                shadow-md
              transition
              duration-300
              hover:shadow-xl
              hover:-translate-y-2
              '
              src={aboutimg}
              alt='About Us'
            />

            <img fetchpriority="high"
              className='
                h-40 
                sm:h-48 
                lg:h-32 
                w-full 
                rounded-2xl 
                object-cover
                shadow-md
              transition
              duration-300
              hover:shadow-xl
              hover:-translate-y-2
              '
              src={imgabout2}
              alt='About Us'
            />

            <img fetchpriority="high"
              className='
                h-40 
                sm:h-48 
                lg:h-32 
                w-full 
                rounded-2xl 
                object-cover
                shadow-md
              transition
              duration-300
              hover:shadow-xl
              hover:-translate-y-2
              '
              src={imgabout3}
              alt='About Us'
            />

          </div>

        </div>

      </section>

    </div>
  )
}

export default About