import React from 'react'
import illustration from '../images/illustrations.svg'

const Howto = () => {
    return (
        <>
            <div className='grid grid-cols-2'>
                <div><img src={illustration} /></div>

                <div className='font-rubik'>
                    <p className='text-[#EE4D47]'>HOW TO APPLY</p>
                    <p>When applying for a traffic permit, there are certain requirements that you must meet that are included in the examination: requirements for professional knowledge, solid establishment, good reputation and financial resources. Important to remember is to confirm your application for a traffic permit by the company's company signer or CEO.</p>
                </div>

            </div>

        </>
    )
}

export default Howto
