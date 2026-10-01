import React from 'react'
import './App.css'

import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Service from './components/Service/Service'
import Footer from './components/Footer/Footer'
import Contact from './components/Contact/Contact'
import OurWork from './components/OurWork/OurWork'

const App = () => {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Service />

      <OurWork />

      <Contact />

      {/* WHATSAPP FLOATING BUTTON */}
      <a
        href="https://wa.me/+91 73044 54553"
        className="whatsapp-floating"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.52 3.48A11.86 11.86 0 0 0 12.04 0
            C5.48 0 .13 5.35.13 11.91
            c0 2.1.55 4.15 1.6 5.96L.03 24
            l6.27-1.64a11.9 11.9 0 0 0 5.74 1.47h.01
            c6.56 0 11.91-5.35 11.91-11.91
            0-3.18-1.24-6.17-3.44-8.44ZM12.05 21.8
            c-1.8 0-3.56-.48-5.1-1.39l-.37-.22-3.72.97
            .99-3.62-.24-.37a9.86 9.86 0 0 1-1.51-5.26
            c0-5.46 4.45-9.91 9.92-9.91
            2.65 0 5.14 1.03 7.01 2.9
            a9.84 9.84 0 0 1 2.9 7.01
            c0 5.46-4.45 9.91-9.91 9.91Zm5.43-7.42
            c-.3-.15-1.77-.87-2.04-.97
            -.27-.1-.47-.15-.67.15
            -.2.3-.77.97-.94 1.17
            -.17.2-.35.22-.65.07
            -.3-.15-1.25-.46-2.38-1.48
            -.88-.78-1.47-1.75-1.64-2.05
            -.17-.3-.02-.46.13-.61
            .13-.13.3-.35.45-.52
            .15-.17.2-.3.2-.5
            .1-.2.05-.37-.02-.52
            -.07-.15-.67-1.62-.92-2.22
            -.24-.58-.49-.5-.67-.51
            h-.57c-.2 0-.52.07-.79.37
            -.27.3-1.04 1.02-1.04 2.49
            0 1.47 1.07 2.89 1.22 3.09
            .15.2 2.1 3.21 5.09 4.5
            .71.31 1.27.49 1.7.63
            .72.23 1.37.2 1.89.12
            .58-.09 1.77-.72 2.02-1.42
            .25-.7.25-1.3.17-1.42
            -.07-.12-.27-.2-.57-.35Z"
            fill="currentColor"
          />
        </svg>
      </a>

      <Footer />
    </>
  )
}

export default App