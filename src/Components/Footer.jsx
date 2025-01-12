import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Footer = () => {

    const socialLinks = {
        linkedin: "https://www.linkedin.com/in/jatin-dhiman-6aab4b24a/",
        github: "https://github.com/Jatin12dhiman",
        Instagram: "https://www.instagram.com/jatin.dhiman1/",
    };


    return (

        <footer className='bg-gray-900 text-white  font-semibold md:text-xl py-28'>
            <div className='container  grid grid-cols-1 grid-wrap  md:grid-cols-3 lg:grid-col-4 gap-4 text-xl space-y-12'>
                {/* Quick Links */}
                <div className=' flex justify-center items-center  md:flex flex-col space-y-2 p-8'>
                <Link to="home" smooth={true} duration={500} offset={-80} className='text-white hover:text-gray-400 cursor-pointer'>Home</Link>
                    
                    <Link to="project" smooth={true} duration={500} offset={-80} className='text-white hover:text-gray-400 cursor-pointer'>Projects</Link>
                    <Link to="skills" smooth={true} duration={500} offset={-80} className='text-white hover:text-gray-400 cursor-pointer'>Skills</Link>
                    <Link to="contact" smooth={true} duration={500} offset={-80} className='text-white hover:text-gray-400 cursor-pointer'>Contact</Link>
                </div>
                {/* social media link */}
                <div className='flex items-center md:flex-row justify-evenly '>
                <a href={socialLinks.linkedin} target="_blank" rel="noopener noreferrer" className='hover:text-blue-500 text-3xl mx-4'> {/* Added styling and target */}
                    <FaLinkedin />
                </a>
                <a href={socialLinks.github} target="_blank" rel="noopener noreferrer" className='hover:text-black text-3xl mx-4'>
                    <FaGithub />
                </a>
                <a href={socialLinks.Instagram} target="_blank" rel="noopener noreferrer" className='hover:text-red-500 text-3xl mx-4'>
                    <FaInstagram />
                </a>
                <a href={socialLinks.twitter} target="_blank" rel="noopener noreferrer" className='hover:text-green-400 text-3xl mx-4'>
                    <FaWhatsapp  />
                </a>
                </div>
                {/* Contact me */}
                <div className=' flex justify-evenly items-center space-y-4 w-full'>
                    <div className=' space-y-2 flex flex-col items-center flex-wrap'>
                        <h3 className='items-center'>Contact me </h3>
                        <input
                            type='email'
                            placeholder='enter your email'
                            className='border-2 border-gray-800 w-full text-lg p-1 rounded-lg text-gray-900 pr-4'
                        />
                    </div>
                </div>
                
            </div>
            <div className=" text-center pt-8 text-sm text-gray-400  ">
                <p>© 2025. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
