import React, { useState } from 'react'
import {Link} from 'react-scroll'

const Navbar = () => {

    const [Open , setOpen] = useState(false);

    return (
        <nav className='bg-gray-900 p-8  '>
            <div className='flex justify-between items-center p-18'>
               
                {/*Main links  */}
               <div className={`absolute left-0 bg-blue-400 text-shine top-[64px] w-full flex flex-col p-4  items-center text-lg rounded-xl md:flex md:flex-row md:justify-evenly font-bold text-gray-900 md:opacity-100 md:relative md:top-0 ${Open ? 'top-15 opacity-100':'top-[-490px] opacity-0 '} `} >
                    <ul className='bg-blue-400 transition-all duration-100  flex flex-col items-center gap-6 md:flex-row md:gap-8 p-4'>
                        <li className='hover:text-gray-100 hover:text-[22px] duration-200 cursor-pointer text-xl'>
                        <Link
                                to="home" // Ensure this ID exists on your Home section
                                smooth={true}
                                duration={500}
                                spy={true}
                                exact="true"
                                offset={-80}
                                onClick={() => setOpen(false)}
                            >
                                Home
                            </Link>
                        </li>
                        <li className='hover:text-gray-100 hover:text-[22px] duration-200 cursor-pointer text-xl'>
                        <Link
                                to="about" // Ensure this ID exists on your About section
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                                onClick={() => setOpen(false)}
                            >
                                About me
                            </Link>
                        </li>
                        <li className='hover:text-gray-100 hover:text-[22px] duration-200 cursor-pointer text-xl'>
                        <Link
                                to="project" // Ensure this ID exists on your Project section
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                                onClick={() => setOpen(false)}
                            >
                                Projects
                            </Link>
                        </li>
                        <li className='hover:text-gray-100 hover:text-[22px] duration-200 cursor-pointer text-xl'>
                        <Link
                                to="skills" // Ensure this ID exists on your Skills section
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                                onClick={() => setOpen(false)}
                            >
                                Skills
                            </Link>
                        </li>
                        <li className='hover:text-gray-100 hover:text-[22px] duration-200 cursor-pointer text-xl'>
                        <Link
                                to="contact" // This is the important part!
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                                onClick={() => setOpen(false)}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>

                 {/* Menu */}
                 <div onClick={()=>setOpen(!Open)} className='text-gray-100 md:hidden right-8 absolute cursor-pointer'>
                  <i class="fa-solid fa-bars fa-lg"  ></i>
                </div>

            </div>
        </nav>
    )
}

export default Navbar
