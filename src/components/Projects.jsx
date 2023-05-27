import React from 'react'
import Box_Office from '../assets/portfolio/Box_Office.png';
import Brushed from '../assets/portfolio/Brushed.png';
import Flappy_Bird from '../assets/portfolio/Flappy_Bird.jpg';
import Tindog from '../assets/portfolio/Tindog.png';

const Projects = () => {
    const portfolios = [
        {
          id: 1,
          src: Box_Office,
          href1: "https://box-office-z18g-mihirrrsharma.vercel.app/",
          href2: "https://github.com/MihirrrSharma/BoxOffice_",
        },
        {
          id: 2,
          src: Brushed,
          href1: "https://mihirrrsharma.github.io/Paint-Clone/",
          href2: "https://github.com/MihirrrSharma/Paint-Clone",
        },
        {
          id: 3,
          src: Flappy_Bird,
          href1: "https://github.com/MihirrrSharma/Flappy-Bird-Clone",
          href2: "https://github.com/MihirrrSharma/Flappy-Bird-Clone",
        },
        {
          id: 4,
          src: Tindog,
          href1: "https://mihirrrsharma.github.io/Tindog/",
          href2: "https://github.com/MihirrrSharma/Tindog",
        }
        
      ];
  
    return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 pt-20 pb-20 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Check out some of my work</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 pb-21 sm:px-0">
          {portfolios.map(({ id, src, href1, href2 }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md h-2/3 duration-200 hover:scale-105 w-full"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href = {href1}
                  target= '_blank'
                  rel="noreferrer"
                  >
                   Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href = {href2}
                  target= '_blank'
                  rel="noreferrer">
                   Code
                  </a> 
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects
