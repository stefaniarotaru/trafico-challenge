import React from 'react'
import illustration from '../images/Illustration.svg'

const About = () => {
    return (

        <div id='about' className='grid 
        grid-cols-1 
        md:grid-cols-2'>

            <div className='font-rubik 
            w-full
            px-[2rem]

            md:w-[28rem]
            md:ml-[3rem]

            lg:w-[30rem]
            lg:ml-[7rem]

            xl:w-[35.625rem] 
            xl:ml-[15.313rem]
            '>

                <p id='about'
                    className='text-[#EE4D47] 
                   text-2xl 
                   font-bold'>ABOUT US
                </p>

                <p className='text-[#402B2B] 
                text-lg
                font-light
                leading-10 
                w-full
                xl:w-[29.375rem] 
                mt-10 
                '>The occupational traffic permit is one of the most important things in the company when carrying out freight transport. In fact, it is a prerequisite for doing business traffic at all.
                </p>

                <div className='bg-[#FCDDD4]/40 
                font-medium
                leading-9

                md:text-[1.125rem]
                lg:text-[1.25rem]
                xl:text-[1.5rem]

                text-[#402B2B]
                h-[10rem]
                
                rounded-l-lg
                overflow-hidden
                mt-20'>
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
                    text-[background: #402B2B]'>How do you do when you need to obtain a commercial traffic permit for freight transport to your business?
                    </div>
                </div>

            </div>
            <div>
                <img src={illustration}   
                className='
                md:-mt-[6rem]
                xl:ml-[7rem]'              
                data-aos="fade-left"
                data-aos-duration="1600"
                data-aos-once="true"
                />
            </div>
        </div>

    )
}

export default About
