import React, { useState } from 'react'

const Navbar = () => {

    const [Open , setOpen] = useState(false);

    return (
        <nav className='bg-gray-900 p-8 '>
            <div className='flex justify-between items-center p-18'>
               
                {/*Main links  */}
                <div className={`absolute left-0  bg-blue-400 text-shine top-[64px] w-full flex flex-col p-4 gap-6 items-center text-lg rounded-xl md:static md:flex-row md:justify-evenly font-bold text-gray-900 
                ${Open ? 'top-15 opacity-100':'top-[-490px] md:opacity-100'} transition-all duration-300 ease-in-out `} >
                    <ul className='bg-blue-400 transition-all duration-100  flex flex-col items-center gap-6 md:flex-row md:gap-8 p-4'>
                        <li className='hover:text-gray-100 cursor-pointer text-xl'>Home</li>
                        <li className='hover:text-gray-100 cursor-pointer text-xl'>About</li>
                        <li className='hover:text-gray-100 cursor-pointer text-xl'>Project</li>
                        <li className='hover:text-gray-100 cursor-pointer text-xl'>Skills</li>
                        <li className='hover:text-gray-100 cursor-pointer text-xl'>Contact</li>
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
