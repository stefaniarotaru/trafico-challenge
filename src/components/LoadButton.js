import React from 'react'
import plus from '../images/plus.svg'
import minus from '../images/minus.svg'
import { useState } from 'react';
import Question from './Question';

const LoadButton = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [icon, setIcon] = useState(plus);
    const [text, setText] = useState('LOAD MORE');

    const toggle = () => {
        setIsOpen(!isOpen);
        console.log('isOpen: ', isOpen);
        setIcon(isOpen ? plus : minus);
        setText(isOpen ? 'LOAD MORE' : 'LOAD LESS');
    }

    return (     
            <div onClick={toggle}
            className='w-[24rem]
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
                <p className='text-center inline-block w-full'>{text}</p>

                <img src={icon} className='w-[1.125rem]'/>
            </div>
    )
}

export default LoadButton
