import React from 'react'
import Tailwind from '../assets/Tailwind_image.png'
import Html from '../assets/Html_image.png'
import Css from '../assets/Css_image.png'
import Nodejs from '../assets/Node_image.png'
import Javascript from '../assets/Js_image.png'
import ReactIm from '../assets/React_image.png'
import Figma from '../assets/Figma_image.png'
import Mongodb from '../assets/Mongo_image.png'

const MyTech = [
  {
    title: 'Html',
    imageUrl: Html,
    bgColor: 'bg-gray-200',
    content: ' Provides the basic structure and content of a webpage using elements and tags. It is the foundation upon which everything else is built',
  },
  {
    title: 'CSS',
    imageUrl: Css,
    bgColor: 'bg-gray-200',
    content: ' Styles and formats the HTML content, controlling the visual presentation like colors, fonts, and layout. It makes webpages look good.'
  },
  {
    title: 'Tailwind',
    imageUrl: Tailwind,
    bgColor: 'bg-gray-200',
    content: ' A utility-first CSS framework that provides pre-designed CSS classes for rapid UI development. It allows you to style HTML directly in your markup.'
  },
  {
    title: 'Javascript',
    imageUrl: Javascript,
    bgColor: 'bg-gray-200',
    content: ' A programming language that adds interactivity and dynamic behavior to webpages. It makes websites respond to user actions.'
  },
  {
    title: 'React',
    imageUrl: ReactIm,
    bgColor: 'bg-gray-200',
    content: 'A JavaScript library for building user interfaces (UIs) based on reusable components. It is popular for creating single-page applications.'
  },
  {
    title: 'Node Js',
    imageUrl: Nodejs,
    bgColor: 'bg-gray-200',
    content: 'A JavaScript runtime environment that allows you to run JavaScript on the server-side. It is used for building backend applications and APIs.'
  },
  {
    title: 'Mongo db',
    imageUrl: Mongodb,
    bgColor: 'bg-gray-200',
    content: ' A NoSQL database that stores data in flexible, JSON-like documents. It is known for its scalability and ease of use in web applications.'
  },
  {
    title: 'Figma',
    imageUrl: Figma,
    bgColor: 'bg-gray-200',
    content: ' A collaborative design tool used to create user interfaces and prototypes. It is popular among UI/UX designers for its ease of use and real-time collaboration.'
  }
]


const TechStack = () => {
  return (
    <div id="skills">
      <h1 className='text-3xl pt-8 font-bold bg-gray-400 text-gray-900 text-center shadow-md '>My Tech Stack</h1>
      <div className=' grid grid-cols-1 md:grid-cols-2 gap-12 p-12 bg-gray-400  '>
        {MyTech.map((Tech, index) => (
          <div key={index} className={`group bg-gray-100 flex items-center justify-center p-4 space-x-4 md:flex-col rounded shadow-md hover:shadow-xl transition duration-100 ease-in-out" ${Tech.bgColor}`}>
            <div className=''>
              <img className=' rounded w-[170px] md:w-[90px] group-hover:animate-bounce  transition duration-300 ease-in-out
              ' src={Tech.imageUrl} />
            </div>
            <div>
              <p className='text-xl font-semibold'>{Tech.title}</p>
              <p className='pt-2'>{Tech.content}</p>
            </div>

          </div>
        ))}

      </div>
    </div>
  )
}

export default TechStack
