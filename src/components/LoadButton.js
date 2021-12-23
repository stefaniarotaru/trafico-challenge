import React from 'react'
import plus from '../images/plus.svg'

const LoadButton = () => {
    return (
        <div className='w-[24rem]
        md:w-[32rem]
        
        xl:w-[34.375rem]

        bg-[#ED4D47]/20
        rounded-[0.625rem]
        font-rubik
        font-medium
        text-[1.125rem]
        text-[#ED4D47]
        
        leading-[1.875rem]
        px-[2.188rem]
        py-[1.563rem]
        shadow-[0_20px_40px_rgba(238,77,71,0.1)]
        my-[0.625rem]

        flex
        flex-end
'>
            <p className='text-center inline-block w-full'>LOAD MORE</p>

            <img src={plus} className=' w-[1.125rem]  ' />

        </div>
    )
}

export default LoadButton
