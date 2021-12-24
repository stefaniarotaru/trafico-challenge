import React from 'react'
import Button from './Button'
import UserInput from './UserInput'

const UserForm = () => {
    return (
        <div id='contact'
        className='w-[22rem]
 
        h-[27.5rem] 
        bg-white 
        absolute 
        -mt-[80rem]
        ml-[2rem]
        
        md:w-[34.375rem]
        md:-mt-[58rem]
        md:ml-[25rem]
        lg:ml-[35rem]
        xl:ml-[43rem]
        lg:-mt-[58rem]
        shadow-[0_20px_40px_rgba(238,77,71,0.1)]
        rounded-[0.625rem]
        font-rubik
        font-light
        leading-[2.5rem]'>

            <p className='
            ml-[2rem]
            mt-[1rem]
            md:ml-[5rem]
            md:mt-[3.25rem]
            '>Name</p>
            <UserInput placeholder='Your name' />


            <p className='            
            ml-[2rem]
            mt-[1rem]
            md:ml-[5rem]
            md:mt-[3.25rem]'>Email Address</p>
            <UserInput placeholder='Your email address' />

            <div className='mt-[1.875rem]
            ml-[4.6rem]
            leading-6'>
                <Button />
            </div>


        </div>
    )
}

export default UserForm
