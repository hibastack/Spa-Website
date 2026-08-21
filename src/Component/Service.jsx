import React from 'react'

const Service = (props) => {
  return (
    <div className="w-full">

      <div
        style={props.style}
        className="
          w-full
          min-h-64
          sm:min-h-72
          lg:min-h-80
          bg-cover
          bg-center
          bg-no-repeat
          rounded-xl
          flex
          items-center
          justify-center
          p-5
          sm:p-8
        "
      >

        <div className="
          flex
          flex-col
          gap-3
          sm:gap-4
          items-center
          justify-center
          text-center
          max-w-xl
        ">

          <h2 className="
            font-bold
            text-xl
            sm:text-2xl
            lg:text-3xl
            text-black
          ">
            {props.name}
          </h2>

          <p className="
            font-medium
            text-base
            sm:text-lg
            lg:text-xl
            text-black
          ">
            {props.description}
          </p>

        </div>

      </div>

    </div>
  )
}

export default Service