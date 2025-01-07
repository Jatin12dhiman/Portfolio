import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Projects from './Pages/Projects';

const App = () => {
  return (
    <div className=''>
      <Navbar />
      <Home />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
