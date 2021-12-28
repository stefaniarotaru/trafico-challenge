import React from 'react'
import illustration from '../images/Illustration.svg'
import Button from '../components/Button'

const GetStartedPage = () => {
    return (
        <div>
            <div className='bg-[#FEF8F5]
        absolute
        margin-auto
        top-0
        bottom-0
        left-0
        right-0
        flex
        justify-center'>
                <div className='flex 
            flex-col
            md:flex-row
            items-center'>
                    <p className='
                font-dmSerifDisplay
                text-[3rem]'>
                        Work in progress...
                        <br/>
                        <Button text='BACK' link='/'/>
                    </p>
                    <img src={illustration} />
                </div>
            </div>
            
        </div>
    )
}

export default GetStartedPage
