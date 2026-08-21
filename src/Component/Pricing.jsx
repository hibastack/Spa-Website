import React from 'react'

const Pricing = (props) => {
  return (

    <div className="
      w-full
      max-w-sm
      min-h-96
      mx-auto
      grid
      justify-center
      bg-gray-100
      p-5
      sm:p-6
      rounded-lg
      shadow-md
      mt-10
     
              transition
              duration-300
              hover:shadow-xl
              hover:-translate-y-2
    ">

      <div className="
        mb-4
        text-lg
        sm:text-xl
        font-bold
        text-center
      ">
        {props.name}
      </div>

      <div className="
        p-3
        border-b-2
        border-t-2
        mb-4
        text-xl
        sm:text-2xl
        font-bold
        text-orange-900
        text-center
      ">
        {props.price}
      </div>

      <ul className="
        list-disc
        list-inside
        mt-4
        space-y-2
        text-sm
        sm:text-base
      ">
        {props.features.map((feature, index) => (
          <li key={index}>
            {feature}
          </li>
        ))}
      </ul>

      <button className="
        bg-red-950
        text-white
        h-10
        w-48
        max-w-full
        mx-auto
        rounded-lg
        hover:bg-orange-800
        transition
      ">
        Book Session
      </button>

    </div>
  )
}

export default Pricing