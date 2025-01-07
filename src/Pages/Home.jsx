import React from 'react'
import image from "../assets/Jatin Dhiman Png (1) 2.png"

const Home = () => {
    return (
        
            <div className=' bg-gray-900 flex flex-col justify-center items-center md:flex-row md:justify-evenly w-full pb-8 px-[12px]'>
                {/* My image */}
                <div className=''>
                    <img src={image} className='bg-gray-900 w-[100%] object-cover' />
                </div>

                {/* About me  */}
                <div className="bg-gray-900 text-blue-500 text-2xl  h-full mt-12  shine-text flex flex-col ">
                    <div>
                    <h1 className="text-5xl  text-blue-300 font-bold animate-fadeIn text-center">
                        Hi there, I'm <span className="text-red-400">Jatin</span>
                    </h1>
                    <p className="mt-4 px-4 text-3xl tracking-wider font-semibold  text-center max-w-md">
                        A dedicated frontend web developer, creating professional websites and online solutions.
                    </p>
                    </div>
                    {/* Buttons */}
                    <div className='flex flex-row justify-center space-24 py-4 md:px-4'>
                        <button className='px-8 text-white text-lg rounded border border-blue-500 bg-blue-500  m-4 hover:bg-black md:border-sky-400 duration-500 whitespace-nowrap'>About Me</button>
                        <button className='px-[32px] text-white text-lg rounded border border-blue-500 bg-blue-500 p-3  m-4 hover:bg-black md:border-sky-400 duration-500'>Projects</button>
                    </div>
                </div>


            </div>
        
    )
}

export default Home
