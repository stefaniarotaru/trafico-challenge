import React from 'react'
import { useState } from 'react'
import union from '../images/Union.svg'

const Button = () => {

    return (
        <div>

            <a href="#" className='
                absolute
                bg-[#EE4D47]
                hover:bg-[#FF4D47]
                h-[3.75rem]
                inline-block
                text-white
                pt-5
                px-7
                rounded-[0.313rem]
                font-rubik
                font-bold

                top-[22.5rem]
                left-[2rem]

                md:top-[28rem]
                md:left-[8rem]

                lg:top-[32rem]
                lg:left-[12rem]

                xl:top-[41rem]
                xl:left-[18rem]
                '> GET STARTED

                <img src={union} className='
                inline
                ml-6' />
            </a>
        </div>

    )
}

export default Button
