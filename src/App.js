import logo from './logo.svg';
import './App.css';
import Top from './pages/Top';
import Navbar from './components/Navbar';
import About from './pages/About';
import Howto from './pages/Howto';
import Faq from './pages/Faq';
import Footer from './pages/Footer';
import { useState, useEffect } from 'react'

function App() {

  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
        console.log('i resizedd')
      }
    }
    window.addEventListener('resize', hideMenu);
    return () => {
      window.removeEventListener('resize', hideMenu);
    }
  })

  return (
    <div className='relative bg-[#FEF8F5] overflow-hidden'>

      <div className='h-[90rem]'>
        <Navbar toggle={toggle}/>
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
