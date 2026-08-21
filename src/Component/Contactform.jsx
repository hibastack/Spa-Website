import React from 'react'

const Contactform = () => {
  return (
    <div className="min-h-screen flex justify-center items-center bg-stone-50 p-4 sm:p-6">

      <form className="w-full max-w-2xl bg-white p-5 sm:p-8 rounded-2xl shadow-lg">

        <h1 className="text-2xl sm:text-3xl font-bold text-center mb-2">
          Book An Appointment
        </h1>

        <p className="text-center text-gray-500 mb-6 sm:mb-8">
          Take a moment for yourself 🌸
        </p>

        {/* Name */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            Your Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-red-950"
          />
        </div>

        {/* Email */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            Email
          </label>

          <input
            type="email"
            placeholder="Enter your email"
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-red-950"
          />
        </div>

        {/* Phone */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            Phone Number
          </label>

          <input
            type="tel"
            placeholder="03XX-XXXXXXX"
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-red-950"
          />
        </div>

        {/* Service */}
        <div className="mb-5">
          <label className="block mb-2 font-semibold">
            Select Service
          </label>

          <select className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-red-950">
            <option>Select a service</option>
            <option>Full Body Massage</option>
            <option>Relaxation Massage</option>
            <option>Facial</option>
            <option>Hot Stone Massage</option>
            <option>Couples Massage</option>
          </select>
        </div>

        {/* Date & Time */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">

          <div>
            <label className="block mb-2 font-semibold">
              Date
            </label>

            <input
              type="date"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-red-950"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">
              Time
            </label>

            <input
              type="time"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-red-950"
            />
          </div>

        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block mb-2 font-semibold">
            Message
          </label>

          <textarea
            rows="4"
            placeholder="Anything you'd like us to know?"
            className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-red-950"
          ></textarea>
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full bg-red-950 text-white py-3 rounded-lg hover:bg-orange-800 transition"
        >
          Book Appointment
        </button>

      </form>

    </div>
  )
}

export default Contactform