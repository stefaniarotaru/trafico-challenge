import React from 'react'
import illustration from '../images/illustrations.svg'

const Howto = () => {
    return (
        <>
            <div className='grid 
            grid-cols-1 
            md:grid-cols-2
            md:mt-[10rem]
            xl:mt-[17rem]
'>
                <div>
                    <img src={illustration}
                        className='xl:ml-[8rem]
                lg:-mt-[6rem]'
                        data-aos="fade-right"
                        data-aos-duration="1600"
                        data-aos-once="true" />
                </div>

                <div className='font-rubik 
                xl:ml-[11rem]
                w-full
                px-[2rem] '>

                    <p id='howto'
                        className='text-[#EE4D47]
                    text-2xl 
                    font-bold'>HOW TO APPLY</p>

                    <p className='text-[#402B2B] absolute
                text-lg
                font-light
                leading-10 
                w-[22rem]
                lg:w-[27rem]
                xl:w-[28.438rem]
                mt-10 '>
                        When applying for a traffic permit, there are certain requirements that you must meet that are included in the examination: requirements for professional knowledge, solid establishment, good reputation and financial resources. Important to remember is to confirm your application for a traffic permit by the company's company signer or CEO.</p>
                </div>

            </div>

        </>
    )
}

export default Howto
