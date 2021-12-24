import React from 'react'
import logo from '../images/logo.svg'

const BottomNavbar = () => {
    return (
        <div className='absolute
            w-full
            flex 
            justify-between 
            items-center
            w-[40rem]
            -mt-[26rem]
            md:w-[50rem]
            md:mt-[24rem]
            lg:w-[68rem]
            xl:w-[85rem]
            font-rubik
            font-normal
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


            <div className='
                relative
                whitespace-nowrap
                flex
                flex-col     
                -left-[30rem]
                mt-[34rem]
                md:mt-[0rem]
                gap-y-[6rem]
                         

                md:gap-x-[7rem]
                md:left-[5rem]
                md:flex-row

                lg:gap-x-[6.4rem]
                lg:left-[0.5rem]
                
                xl:-left-[8.5rem]
                
                '>
                <a href='#about' className='pt-3 hover:text-[#FF4D47]'>ABOUT</a>
                <a href='#howto' className='pt-3 hover:text-[#FF4D47]'>HOW TO</a>
                <a href='#faq' className='pt-3 hover:text-[#FF4D47]'>FAQS</a>

            </div>
        </div>
    )
}

export default BottomNavbar
