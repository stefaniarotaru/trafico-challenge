import React from 'react'
import plus from '../images/plus.svg'
import { useState } from 'react';
import minus from '../images/minus.svg'


const Question = (props) => {

    const question = props.question;

    const [isOpen, setIsOpen] = useState(false);
    const [icon, setIcon] = useState(plus);

    const toggle = () => {
        setIsOpen(!isOpen);
        setIcon(isOpen ? plus : minus);
    }

    return (
        <div className=''>
            <div className={
                `w-[24rem]
                xl:h-[6rem]
                md:w-[32rem]
                xl:w-[34.375rem]
                bg-white
                rounded-[0.625rem]
                font-rubik
                font-medium
                text-[1.125rem]
                leading-[1.875rem]
                px-[2.188rem]
                py-[1.563rem]
                shadow-[0_20px_40px_rgba(238,77,71,0.1)]
                my-[0.625rem]
                flex
                flex-row
                relative
            
                `}>
                <p className='w-[25rem] '>{question.title}
                </p>


                <img src={icon}
                    className='w-[1.125rem] ml-[5rem]'
                    onClick={toggle} />


            </div>
            {isOpen && (
                <div className='bg-[#FFF7F5]
                w-[24rem]
                -mt-[1rem]
                md:w-[32rem]
                xl:w-[34.375rem]
                rounded-b-[0.625rem]
                min-h-[10rem]
                shadow-[0_20px_40px_rgba(238,77,71,0.1)]
                px-[2.188rem]
                py-[3.75rem]
                text-[#402B2B]
                font-light
                '>
                    <span>{question.Message}</span>
                </div>
            )}
        </div>
    )
}

export default Question
