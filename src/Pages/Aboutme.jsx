import React from 'react';
import { useNavigate } from 'react-router-dom';

const Aboutme = () => {
  const navigate = useNavigate();

  return (
    <div>  {/* Wrap everything in a container */}
      {/* Render your Navbar component */}
      <section id="about" className="bg-gray-800 py-20 px-8 md:px-24 text-white min-h-screen">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center md:text-left text-blue-400">About Me</h2>
          <div className="md:flex md:items-start">
            <div className="md:w-full">
              <p className="text-lg leading-relaxed mb-6">
                Hi, I'm Jatin Dhiman, a passionate and aspiring frontend web developer currently pursuing my B.Tech. I'm driven by a desire to create engaging and user-friendly web experiences that seamlessly blend aesthetics and functionality.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                My focus is on building clean, efficient, and responsive websites using modern web technologies. I'm proficient in HTML, CSS, and JavaScript, and I'm actively expanding my skillset with frameworks like React. I believe in writing well-documented and maintainable code that adheres to industry best practices.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                I'm particularly interested in the dynamic and ever-evolving world of frontend development. I enjoy the challenge of translating design concepts into interactive and accessible web interfaces. I'm always eager to learn new techniques and explore emerging technologies to stay at the cutting edge of the field.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                Beyond coding, I enjoy reading books – especially science fiction and fantasy – and exploring new technologies. I find that these activities help me stay creative, curious, and inspired in my development work.
              </p>
              <div className="mt-8 text-center md:text-left">
                <button
                  onClick={() => navigate(-1)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded transition duration-300 inline-block"
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Aboutme;