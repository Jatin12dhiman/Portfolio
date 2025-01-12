import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as RouterLink, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [Open, setOpen] = useState(false);
    const location = useLocation();

    const handleScrollNavigation = (section) => {
        if (location.pathname === '/') {
            // If on the home page, scroll to the section
            document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' });
        } else {
            // If on any other page, use react-scroll to scroll smoothly within the same page
            // by using the ScrollLink component for smooth scrolling behavior.
            window.location.href = `/#${section}`;
        }
        setOpen(false); // Close the menu when clicked
    };

    return (
        <nav className='bg-gray-900 p-8'>
            <div className='flex justify-between items-center p-18 '>

                {/* Main Links */}
                <div className={`absolute left-0 bg-blue-400 text-shine top-[64px] w-full flex flex-col p-4 items-center text-lg rounded-xl md:flex md:flex-row md:justify-evenly font-bold text-gray-900 md:opacity-100 md:relative md:top-0 ${Open ? 'top-15 opacity-100' : 'top-[-490px] opacity-0 '} `}>
                    <ul className='bg-blue-400 transition-all duration-100 flex flex-col items-center gap-6 md:flex-row md:gap-8 p-4'>
                        {/* Home Link */}
                        <li className='hover:text-gray-100 hover:text-[22px] duration-200 cursor-pointer text-xl'>
                            <RouterLink
                                to="/" // Ensure this links to the Home page correctly
                                onClick={() => setOpen(false)}
                            >
                                Home
                            </RouterLink>
                        </li>
                        {/* About Me Link */}
                        <li className='hover:text-gray-100 hover:text-[22px] duration-200 cursor-pointer text-xl'>
                            <RouterLink to="/about" onClick={() => setOpen(false)}>About Me</RouterLink>
                        </li>
                        {/* Projects Link */}
                        <li className='hover:text-gray-100 hover:text-[22px] duration-200 cursor-pointer text-xl'>
                            <span onClick={() => handleScrollNavigation('project')}>Projects</span>
                        </li>
                        {/* Tech Stack Link */}
                        <li className='hover:text-gray-100 hover:text-[22px] duration-200 cursor-pointer text-xl'>
                            <span onClick={() => handleScrollNavigation('skills')}>Tech Stack</span>
                        </li>
                        {/* Contact Link */}
                        <li className='hover:text-gray-100 hover:text-[22px] duration-200 cursor-pointer text-xl'>
                            <span onClick={() => handleScrollNavigation('contact')}>Contact</span>
                        </li>
                    </ul>
                </div>

                {/* Menu Icon */}
                <div onClick={() => setOpen(!Open)} className='text-gray-100 md:hidden right-8 absolute cursor-pointer'>
                    <i className="fa-solid fa-bars fa-lg"></i>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
