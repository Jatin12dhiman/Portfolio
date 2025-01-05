import React from 'react'

const Footer = () => {
    return (
        <footer className='bg-gray-900 text-white text-xl md:text-xl mt-12'>
            <div className='container  grid grid-cols-1 grid-wrap  md:grid-cols-3 lg:grid-col-4 gap-4 y-8'>
                {/* Quick Links */}
                <div className=' flex justify-center items-center  md:flex flex-col space-y-2 p-8'>
                    <span>  <a href="#" className='text-white hover:text-gray-400'>Home</a></span>
                    <span> <a href="#" className='text-white hover:text-gray-400'>About</a> </span>
                    <span> <a href="#" className='text-white hover:text-gray-400'>Projects</a> </span>
                    <span>  <a href="#" className='text-white hover:text-gray-400'>Skills</a></span>
                    <span>  <a href="#" className='text-white hover:text-gray-400'>Contact</a></span>
                </div>
                {/* social media link */}
                <div className='flex flex-col items-center md:flex-row justify-evenly '>
                    <a href="#" className='hover:text-gray-400'>Linkdin</a>
                    <a href="#" className='hover:text-gray-400'>Instagram</a>
                    <a href="#" className='hover:text-gray-400'>Twitter</a>
                </div>
                {/* Contact me */}
                <div className=' flex justify-evenly items-center space-y-4 w-full'>
                    <div className=' space-y-2 flex flex-col items-center flex-wrap'>
                        <h3 className='items-center'>Contact me </h3>
                        <input
                            type='email'
                            placeholder='enter your email'
                            className='border-2 border-gray-800 w-full text-lg p-1 rounded-lg text-gray-900'
                        />
                    </div>
                </div>
            </div>
            <div className=" text-center p-4 text-sm text-gray-400 ">
                <p>© 2025. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
