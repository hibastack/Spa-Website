import React from 'react'

const WhyChooseUs = (props) => {
  return (
    <div className="w-full px-5 sm:px-10 lg:px-24">

      <p className="
        flex
        justify-center
        text-center
        text-base
        sm:text-lg
        leading-relaxed
      ">
        "{props.message}"
      </p>

      <p className="
        text-base
        sm:text-lg
        text-center
        mt-3
        font-semibold
      ">
        {props.customerName}
      </p>

    </div>
  )
}

export default WhyChooseUs