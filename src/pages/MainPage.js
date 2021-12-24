import React from 'react'
import Top from './Top';
import Navbar from '../components/Navbar';
import About from './About';
import Howto from './Howto';
import Faq from './Faq';
import Footer from './Footer';
import Dropdown from '../components/Dropdown';
import { useState, useEffect } from 'react'

const MainPage = () => {
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => {
      setIsOpen(!isOpen);
    }

    useEffect(() => {
        const hideMenu = () => {
          if (window.innerWidth > 768 && isOpen) {
            setIsOpen(false)
          }
        }
        window.addEventListener('resize', hideMenu);
        return () => {
          window.removeEventListener('resize', hideMenu);
        }
      })
  
    return (
        <div className='relative bg-[#FEF8F5] overflow-hidden'>

        <div className='
        h-[80rem]
        md:h-[80rem]
        lg:h-[85rem]
        xl:h-[90rem]'>
          <Navbar toggle={toggle}/>
          <Dropdown isOpen={isOpen} toggle={toggle} />
          <Top />
        </div>
  
        <About />
        <Howto />
        <Faq />
        <Footer />
            
        </div>
    )
}

export default MainPage
