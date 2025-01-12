import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import TechStack from './Pages/TechStack';
import Contact from './Pages/Contact';
import Aboutme from './Pages/Aboutme';

const App = () => {
    return (
        <Router>
            <div className=''>
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <> {/* Fragment to wrap multiple elements */}
                            <Home />
                            <Projects />
                            <TechStack />
                            <Contact />
                        </>
                    } />
                    <Route path="/about" element={<Aboutme />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
};

export default App;