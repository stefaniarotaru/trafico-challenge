import logo from './logo.svg';
import './App.css';
import Top from './pages/Top';
import Navbar from './components/Navbar';
import About from './pages/About';
import Howto from './pages/Howto';
import Faq from './pages/Faq';
import Footer from './pages/Footer';
import Dropdown from './components/Dropdown';
import { useState, useEffect } from 'react'
import aos from 'aos'
import 'aos/dist/aos.css';

function App() {

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

  aos.init();

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
  );
}

export default App;
