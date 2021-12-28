import React from 'react'

const Button = (props) => {

    const text = props.text;
    const link = props.link;
    return (
        <a href={link} className='bg-[#EE4D47]
        hover:bg-[#FF4D47]
        text-white
        text-[1rem]
        rounded-[0.313rem]
        p-3
        font-rubik'> {text}
    </a>
    )
}

export default Button
