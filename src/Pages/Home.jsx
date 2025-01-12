import React, { useEffect, useRef } from 'react'
import image from "../assets/Jatin Dhiman Png (1) 2.png"
import { useNavigate } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
    const navigate = useNavigate(); // Initialize useNavigate
    const textContainerRef = useRef(null); // Ref for the text container

    useEffect(() => {
        AOS.init({
            duration: 1000, // Animation duration
            twice: true,     // Only animate once
            delay: 100,
            easing: 'ease-in-out'
        });
    }, []);

    const handleAboutClick = () => {
        navigate('/about'); // Navigate to /about route
    };

    const handleProjectsClick = () => {
        navigate('/projects'); // Navigate to /projects route
    };

    return (
        
            <section id="home" className=' bg-gray-900 flex flex-col justify-center items-center md:flex-row md:justify-evenly w-full pb-8 px-[12px]'>
                {/* My image */}
                <div className='' >
                    <img src={image}  className='bg-gray-900 w-[100%] object-cover' />
                </div>

                {/* About me  */}
                <div className="bg-gray-900 text-blue-500 text-2xl  h-full mt-12  shine-text flex flex-col "  data-aos="fade-down">
                    <div>
                    <h1 className="text-5xl  text-blue-300 font-bold animate-fadeIn text-center">
                        Hi there, I'm <span className="text-red-400">Jatin</span>
                    </h1>
                    <p className="mt-4 px-4 text-3xl tracking-wider font-semibold  text-center max-w-md">
                        A dedicated frontend web developer, creating professional websites and online solutions.
                    </p>
                    </div>
                    {/* Buttons */}
                    <div className='flex flex-row justify-center space-24 py-4 md:px-4 font-semibold'>
                        <button className='px-8 text-gray-900 text-lg rounded border border-blue-400 bg-blue-400  m-4 p-3 hover:text-white   duration-500 whitespace-nowrap'  onClick={handleAboutClick}>About Me</button>
                        {/* <button className='px-[32px] text-black text-lg rounded border border-blue-500 bg-blue-500 p-3  m-4  hover:text-white   duration-500' onClick={handleProjectsClick}>Projects</button> */}
                    </div>
                </div>


            </section>
        
    )
}

export default Home
