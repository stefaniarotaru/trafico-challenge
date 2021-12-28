import React from 'react'
import logo from '../images/logo.svg'
import Button from './Button'

const Navbar = ({ toggle }) => {
    return (

        <div className='absolute
            w-full
            flex 
            justify-between 
            items-center
            w-[40rem]
            mt-[1.5rem]
            md:w-[50rem]
            md:mt-[4rem]
            lg:w-[68rem]
            xl:w-[85rem]
            font-rubik
            font-bold
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
                xl:ml-[15rem]'/>
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
                
                xl:gap-x-[8.5rem]
                xl:-left-[1rem]
                
                '>
                <a href='#about' className='pt-3 hover:text-[#FF4D47]'>ABOUT</a>
                <a href='#howto' className='pt-3 hover:text-[#FF4D47]'>HOW TO</a>
                <a href='#faq' className='pt-3 hover:text-[#FF4D47]'>FAQS</a>

                <Button text='CONTACT US' link='#contact'/>
            </div>
        </div>

    )
}

export default Navbar
