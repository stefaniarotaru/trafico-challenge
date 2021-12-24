import React from 'react'
import bg from '../images/BG.svg'
import car from '../images/Group35.svg'
import UserForm from '../components/UserForm'
import BottomNavbar from '../components/BottomNavbar'
import facebook from '../images/f.svg'
import twitter from '../images/t.svg'
import instagram from '../images/i.svg'

const Footer = () => {
    return (
        <>
            <div className='mt-[8rem]   
            lg:mt-[18rem]
            h-[100rem]
            md:h-[50rem]'>
                <img src={bg} className='relative 
                object-fill 
                h-full 
                max-w-fit 
                xl:-ml-[16rem]'/>

                <img src={car} className='absolute 
                -mt-[111rem]
                md:-mt-[61rem]'
                data-aos="fade-right"
                data-aos-duration="1600"
                data-aos-once="true"/>

                <div className='absolute

                w-[24rem]
                -mt-[95rem]
                md:-mt-[44rem]
                ml-[2rem]
                md:w-[25rem]
                lg:ml-[10rem]

                xl:ml-[15rem]

                font-normal
                leading-[1.875rem]
                text-[1.125rem]
                text-white
                h-[10rem]
                
                rounded-l-lg'>
                    <div className='bg-[#ED4D47] 
                    h-[10rem] 
                    w-[0.5rem] 
                    rounded-l-lg 
                    float-left
                    '></div>
                    <div className='
                    p-[1.6rem]
                    md:px-[3.4rem] 
                    md:pt-[0.5rem]
                    text-[background: #402B2B]'>We provide traffic management consultants so you get started quickly, contact us for a quote today!
                    </div>
                </div>

                <UserForm/>

                <div className='-mt-[40rem]'>
                <BottomNavbar/>

                </div>


            </div>
            <div className='h-[5rem] 
            flex 
            ml-[3rem]
            md:ml-[6rem]
            lg:ml-[12rem]
            xl:ml-[18rem] 
            font-light 
            mt-[3rem]'>
                <span>
                Copyright @ 2019
                </span>
                <div className='flex 
                gap-x-[2rem] 
                h-[2rem] 
                ml-[3rem]
                md:ml-[22rem]
                lg:ml-[36rem]
                xl:ml-[40rem]'>
                    <img src={facebook}/>
                    <img src={twitter}/>
                    <img src={instagram}/>
                </div>
            </div>

        </>
    )
}

export default Footer
