import React from 'react'

const UserInput = (props) => {
    const placeholder = props.placeholder;

    return (
        <input type='text'
            placeholder={placeholder}
            className='border
        text-[1.125rem]
        border-[#EE4D47]/50
        placeholder:font-light
        placeholder:text-[#402B2B]
        focus:outline-none 
        focus:border-[#EE4D47]
        focus:ring-[#EE4D47]
        focus:shadow-[0_20px_40px_rgba(238,77,71,0.1)]
        block 
        rounded-[0.313rem] 
        focus:ring-1
        px-10
        w-[18rem]
        md:w-[25rem]
        h-[3.5rem]
        mx-auto
        mt-[0.625rem]'/>
    )
}

export default UserInput
