import React from 'react'
import rectangle from '../images/Rectangle9.svg'
import group from '../images/Group14.svg'

const Faq = () => {
    return (
        <>
            <div>
                <img src={rectangle} className='right-0'/>
                <img src={group} />
            </div>
            <div className='grid grid-cols-2'>
                <div>
                    <p className='font-rubik text-[#EE4D47]'>FAQ</p>
                    <p className='font-dmSerifDisplay'>Questions and Answers on Professional Traffic Permits:</p>
                    <div>
                        List 1 of questions
                    </div>
                </div>
                <div>
                    List 2 of questions
                </div>

            </div>

        </>
    )
}

export default Faq
