import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import TechStack from './Pages/TechStack';
import Contact from './Pages/Contact';
import Aboutme from './Pages/Aboutme';


const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Home />
      <Aboutme />
      <Projects/>
      <TechStack />
      <Contact  />
      <Footer />
    </div>
  )
}

export default App
