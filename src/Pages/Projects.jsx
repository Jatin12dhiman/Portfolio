import React from 'react'
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
  },
  {
    title: 'Todo App',
    imageUrl: Image2,
    bgColor: 'bg-blue-200',
  },
  {
    title: 'Pokemon App',
    imageUrl: Image3,
    bgColor: 'bg-blue-200',
  },
  {
    title: 'Figma Design',
    imageUrl: Image4,
    bgColor: 'bg-blue-800',
  },
  {
    title: 'Tic-Tac-Toe',
    imageUrl: Image5,
    bgColor: 'bg-blue-800',
  },
  {
    title: 'Bill Generator',
    imageUrl: Image6,
    bgColor: 'bg-blue-800',
  }
]

const Projects = () => {
  return (
    <section id="project" className='bg-gray-700  '>
      <h1 className='text-4xl text-blue-300 font-bold text-center hover:text-blue-400 duration-1000 pt-8 '>Projects</h1>
      <div className='  grid grid-cols-1 md:grid-cols-2 gap-12 p-12  bg-gray-700'>

        {Idprojects.map((Product, index) => (
          <div key={index}
            className={`relative  h-64 transform transition-transform duration-300 hover:scale-105 cursor-pointer bg-red-100 rounded ${Product.bgColor} `}
          >
            <div className=''>
              <img src={Product.imageUrl}
                className='filter: blur-[2px] hover:filter-none w-full h-[200px] object-cover rounded-lg shadow-md'
              />
            </div>
            <div className='rounded flex flex-row space-x-6 justify-between p-3  bg-blue-100 ' >
              <p className='text-xl font-semibold pt-2'>{Product.title}</p>
              <button className=' text-xl font-semibold bg-green-200 border-2 border-green-300 p-2  rounded  hover:bg-gray-700 hover:text-blue-300 hover:border-gray-700 duration-700 w-36 h-12 '>Check it</button>
            </div>
            
          </div>
          
        ))}
        
      </div>
   
    </section>
  )
}

export default Projects
