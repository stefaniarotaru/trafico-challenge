import React from 'react'
import rectangle from '../images/Rectangle9.svg'
import group from '../images/Group14.svg'
import QuestionList from '../components/QuestionList'

const Faq = () => {
    return (
        <>
            <div id='faq'
            className='h-[165rem]
            md:h-[130rem]
            lg:h-[93.75rem]'>
                <img src={rectangle} className='float-right relative' />
                <img src={group} className='absolute 

                ml-[1rem]
                mt-[4rem]
                w-[24rem]

                md:ml-[26rem]
                md:mt-[5rem]
                md:w-[30rem]

                lg:ml-[36rem]
                lg:mt-[15rem]
                lg:w-[34rem]

                xl:ml-[44.688rem]
                xl:w-[44.25rem]'/>

                <div className='absolute
                mt-[25rem]
                
                md:w-[34.375rem]

                md:ml-[5rem]
                md:mt-[9rem]

                lg:ml-[5rem]
                lg:mt-[8rem] 

                xl:ml-[15rem]
                xl:mt-[20rem] 
                '>

                    <p className='text-[#EE4D47]
                    text-2xl
                    font-rubik 
                    font-bold
                    ml-[2rem]
                    md:ml-0'>FAQ
                    </p>

                    <p className='font-dmSerifDisplay
                    leading-[4.2rem]
                    text-[2rem]
                    lg:text-[3rem]
                    mt-[4rem]                    
                    ml-[2rem]
                    md:ml-0'>Questions and Answers on Professional Traffic Permits:</p>


                    <QuestionList/>
                </div>

            </div>

        </>
    )
}

export default Faq
