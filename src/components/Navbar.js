import React from 'react'
import logo from '../images/logo.svg'

const Navbar2 = ({ toggle }) => {
    return (

        <div className='absolute
            flex 
            justify-between 
            items-center
            w-[40rem]
            mt-[4rem]
            md:w-[50rem]
            lg:w-[68rem]
            xl:w-[85rem]
            font-rubik
            text-white
            z-10
            '>

            <div className='
                flex 
                flex-auto 
                '>
                <img src={logo} className='
                ml-[2rem]
                md:ml-[6rem]
                lg:ml-[12rem]
                xl:w-[13.25rem]
                xl:ml-[18rem]'/>
            </div>

            <div className="mr-[16rem] cursor-pointer md:hidden"
                onClick={toggle}>
                <svg
                    className='w-8 h-8'
                    fill='none'
                    stroke='white'
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4 6h16M4 12h16M4 18h16'
                    />
                </svg>
            </div>

            <div className='
                relative
                whitespace-nowrap
                hidden                

                md:gap-x-[3.5rem]
                md:left-[0rem]
                md:flex

                lg:gap-x-[5rem]
                lg:left-[5rem]
                
                xl:gap-x-[10rem]
                xl:left-[13.5rem]
                
                '>
                <a href='#' className='pt-3 hover:text-[#FF4D47]'>ABOUT</a>
                <a href='#' className='pt-3 hover:text-[#FF4D47]'>HOW TO</a>
                <a href='#' className='pt-3 hover:text-[#FF4D47]'>FAQS</a>

                <a href="#" className='bg-[#EE4D47]
                    hover:bg-[#FF4D47]
                    text-white
                    rounded-[0.313rem]
                    p-3
                    font-rubik'> CONTACT US
                </a>
            </div>
        </div>

    )
}

export default Navbar2
