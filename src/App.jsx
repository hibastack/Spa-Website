import './App.css'

import Navbar from './Component/Navbar'
import About from './Component/About'
import Service from './Component/Service'
import Pricing from './Component/Pricing'
import WhyChooseUs from './Component/WhyChooseUs'
import Footer from './Component/Footer'

import img6 from './assets/img6.jpg'
import img7 from './assets/img7.jpg'
import img9 from './assets/img9.jpg'
import img8 from './assets/img8.jpg'

import Contactform from './Component/Contactform'
import Servicepage from './Component/Servicepage'
import Aboutpage from './Component/Aboutpage'

import { Routes, Route } from "react-router-dom"


function Home() {
  return (
    <div>

      {/* Navbar */}
      <div>
        <Navbar />
      </div>


      {/* About */}
      <div className='mt-16 sm:mt-20'>
        <About />
      </div>


      {/* Services */}
      <div className='mt-16 sm:mt-20'>

        <h1 className='
          mt-10
          flex
          justify-center
          text-center
          text-3xl
          sm:text-4xl
          lg:text-5xl
          font-bold
          px-4
        '>
          Services
        </h1>


        <div className='
          grid
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5
          mt-10
          mx-5
          sm:mx-10
          p-4
          sm:p-8
          rounded-2xl
          text-white
          text-center
        '>

          <Service
            style={{ backgroundImage: `url(${img7})` }}
            name="Hot Stone Massage"
            description="Warm stones and gentle massage techniques help relax muscles and melt away stress."
          />

          <Service
            style={{ backgroundImage: `url(${img6})` }}
            name="Express Facial & Sheet Mask"
            description="A refreshing facial with a hydrating sheet mask to leave your skin soft, fresh and glowing."
          />

          <Service
            style={{ backgroundImage: `url(${img9})` }}
            name="Back Relaxation Massage"
            description="Gentle massage focused on the back and waist area to ease everyday tension and promote relaxation."
          />

          <Service
            style={{ backgroundImage: `url(${img8})` }}
            name="Deep Relaxation Back Massage"
            description="A soothing full-back massage designed to release muscle tension and provide deep relaxation."
          />

        </div>

      </div>


      {/* Pricing */}
      <div className='mt-16 sm:mt-20'>

        <div className='
          flex
          flex-col
          items-center
          text-center
          px-5
        '>

          <h1 className='
            mt-5
            text-3xl
            sm:text-4xl
            lg:text-5xl
            font-bold
          '>
            Find Your Treatment
          </h1>

          <p className='mt-6 text-base sm:text-lg'>
            Discover the perfect treatment for your needs
          </p>

        </div>


        {/* Pricing Cards */}
        <div className='
          grid
          grid-cols-1
          md:grid-cols-2
          lg:grid-cols-3
          gap-6
          mt-10
          px-5
          sm:px-10
          lg:px-16
          font-bold
        '>

          <Pricing
            name="Basic Package"
            price="$50"
            features={[
              "Back & Shoulder Focus Treatment",
              "Warm Herbal Compress",
              "Full Body Relaxing Massage"
            ]}
          />

          <Pricing
            name="Premium Package"
            price="$100"
            features={[
              "Aromatherapy Therapy",
              "Facial Refreshment Treatment",
              "Hot Stone Therapy"
            ]}
          />

          <Pricing
            name="Deluxe Package"
            price="$150"
            features={[
              "Full Body Therapy",
              "Deep Cleansing Facial Treatment",
              "Full Body Reflexology Therapy"
            ]}
          />

        </div>

      </div>


      {/* Reviews */}
      <div className='mt-16 sm:mt-20'>

        <h1 className='
          mt-16
          sm:mt-20
          flex
          justify-center
          text-center
          font-extrabold
          text-3xl
          sm:text-4xl
          px-4
        '>
          Love By Our Clients
        </h1>


        <div className='
          mt-8
          mx-5
          sm:mx-10
          lg:mx-20
          p-4
          sm:p-6
          text-center
          font-semibold
        '>

          <WhyChooseUs
            message="Absolutely loved my experience! The massage was so relaxing, the staff was incredibly kind, and the whole place had such a peaceful atmosphere. I left feeling completely refreshed!"
            customerName="— Emily R."
          />

        </div>

      </div>


      {/* Footer */}
      <div className='mt-16 sm:mt-20'>
        <Footer />
      </div>

    </div>
  )
}


function App() {
  return (
    <Routes>

      {/* Home Page */}
      <Route path="/" element={<Home />} />

      {/* About Page */}
      <Route path="/Aboutpage" element={<Aboutpage />} />

      {/* Services Page */}
      <Route path="/Servicepage" element={<Servicepage />} />

      {/* Booking Page */}
      <Route path="/Contactform" element={<Contactform />} />

    </Routes>
  )
}


export default App