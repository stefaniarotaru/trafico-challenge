import React from 'react'

const Dropdown = ({isOpen, toggle}) => {
    return ( 
        <div className={
            isOpen 
            ? 'absolute w-full grid grid-rows-4 text-center bg-white/90 items-center z-50 mt-[5rem] font-rubik font-bold' 
            : 'hidden'}
            onClick={toggle}>
            <a href='#about' className="p-4 text-orange-400 hover:text-[#EE4D47]" >ABOUT</a>
            <a href='#howto' className="p-4 text-orange-400 hover:text-[#EE4D47]" >HOW TO</a>
            <a href='#faq' className="p-4 text-orange-400 hover:text-[#EE4D47]" >FAQ</a>
            <a href='#contact' className="p-4 text-orange-400 hover:text-[#EE4D47]" >CONTACT US</a>

        </div>
    )
}

export default Dropdown
