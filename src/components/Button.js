import React from 'react'
import union from '../images/Union.svg'
import { Link } from 'react-router-dom'

const Button = () => {

    return (
        <div>

            <Link to="/getstarted" className='
                w-[14rem]
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
                '> GET STARTED

                <img src={union} className='
                inline
                ml-6' />
            </Link>
        </div>

    )
}

export default Button
