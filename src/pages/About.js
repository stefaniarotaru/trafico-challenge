import React from 'react'
import illustration from '../images/Illustration.svg'

const About = () => {
    return (

        <div className='grid grid-cols-2'>
            <div className='font-rubik'>
                <p className='text-[#EE4D47]'>ABOUT US</p>
                <p>The occupational traffic permit is one of the most important things in the company when carrying out freight transport. In fact, it is a prerequisite for doing business traffic at all.</p>
                <div className='bg-#FCDDD4'>
                    How do you do when you need to obtain a commercial traffic permit for freight transport to your business?
                </div>

            </div>
            <div>
                <img src={illustration}/>
            </div>
        </div>

    )
}

export default About
