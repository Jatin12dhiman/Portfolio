import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image1 from "../assets/NearMrkt.jpg";
import Image2 from "../assets/Todo_pro.jpg";
import Image3 from "../assets/Pokedex.jpg";
import Image4 from "../assets/Nexcent.jpg";
import Image5 from "../assets/Tic-Tac-Toe.jpg";
import Image6 from "../assets/Bill_generator.jpg";


const Idprojects = [
  {
    title: 'Shoping Website',
    imageUrl: Image1,
    bgColor: 'bg-blue-200',
    link:'https://nearmrkt.netlify.app/',
  },
  {
    title: 'Todo App',
    imageUrl: Image2,
    bgColor: 'bg-blue-200',
    link:'https://jatintodo.netlify.app/',

  },
  {
    title: 'Pokemon App',
    imageUrl: Image3,
    bgColor: 'bg-blue-200',
    link:'https://urpokemon.netlify.app/',
  },
  {
    title: 'Figma Design',
    imageUrl: Image4,
    bgColor: 'bg-blue-800',
    link:'https://jatin12dhiman.github.io/Figma-responsive-design/',
  },
  {
    title: 'Tic-Tac-Toe', 
    imageUrl: Image5,
    bgColor: 'bg-blue-800',
    link:'https://tic-tac-cat.netlify.app/',
  },
  {
    title: 'Bill Generator',
    imageUrl: Image6,
    bgColor: 'bg-blue-800',
    link:'https://bill-calculator121.netlify.app/',
  }
]

const Projects = () => {
   useEffect(() => {
          AOS.init({
              duration: 1000, // Animation duration
              once: true,     // Only animate once
              delay: 100,
              easing: 'ease-in-out'
          });
      }, []);
  return (
    <section id="project" className='bg-gray-700  '>
      <h1 className='text-4xl text-blue-300 font-bold text-center hover:text-blue-400 duration-1000 pt-8 '>Projects</h1>
      <div className='  grid grid-cols-1 md:grid-cols-2 gap-12 p-12  bg-gray-700'>

        {Idprojects.map((Product, index) => (
          <div key={index} data-aos="zoom-in-right"
            className={`relative  h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer bg-red-100 rounded ${Product.bgColor} `}
          >
            <div className=''>
              <img src={Product.imageUrl}
                className='filter: blur-[2px] hover:filter-none w-full h-[200px] object-cover rounded-lg shadow-md'
              />
            </div>
            <div className='rounded flex flex-row space-x-6 justify-between p-3  bg-blue-100 m' >
              <p className='text-xl font-semibold pt-2'>{Product.title}</p>
              <a href={Product.link} target="_blank" rel="noopener noreferrer" className='text-center text-xl font-semibold bg-blue-300 border-2 border-blue-300 p-2 rounded hover:bg-blue-500 hover:text-gray-200 hover:border-blue-500 duration-700 w-36 h-12'>Check it</a>
            </div>
            
          </div>
          
        ))}
        
      </div>
   
    </section>
  )
}

export default Projects
