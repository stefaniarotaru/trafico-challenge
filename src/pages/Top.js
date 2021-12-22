import React from 'react'
import scene from '../images/Scene.svg'
import mobel from '../images/mobel.svg'
import Button from '../components/Button'
import aos from 'aos'

const Top2 = () => {
    aos.init();



    return (
        <div className='absolute w-full'>

            <div className='
            min-w-[100.75rem]
            relative
            '>
                <img src={scene} className='absolute
                -ml-[50rem]
                md:-ml-[24rem]
                lg:-ml-[10rem]
                xl:ml-0
                xl:w-full
                2xl:ml-0
                2xl-w-full' />


                <div className='absolute
                w-[50rem]
                grid
                font-dmSerifDisplay
                text-white
                leading-none

                left-[2rem]
                top-[12rem]
                text-[3rem]
                w-[20rem]

                md:left-[8rem]
                md:top-[12rem]
                md:text-[4rem]
                md:w-[30rem]

                lg:left-[12rem]
                lg:top-[12rem]
                lg:text-[5rem]
                lg:w-[40rem]

                xl:left-[18rem]
                xl:top-[16rem]
                xl:text-[6.25rem]'>
                    Your awesome traffic permit consultant.
                </div>
            </div>

            <Button/>

            <div className='absolute
                top-[58rem]
                w-[20rem]
                md:top-[49rem]
                md:w-[30rem] 
                lg:top-[50rem]
                lg:w-full
                xl:top-[55rem]
                '
                data-aos="fade-right"
                data-aos-duration="1600"
                data-aos-once="true"
            >
                <img src={mobel} />
            </div>
        </div>
    )
}

export default Top2
