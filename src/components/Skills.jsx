import React from 'react';
import Bootstrap from "../assets/Bootstrap.png";
import Ccpp from "../assets/Ccpp.png";
import Css from "../assets/Css.png";
import Git1 from "../assets/Git1.png";
import Github from "../assets/Github.png";
import Html from "../assets/Html.png";
import Javascript from "../assets/Javascript.png";
import Node from "../assets/Node.png";
import Python from "../assets/Python.png";
import Reactt from "../assets/Reactt.png";
import Sass from "../assets/Sass.png";
import Tailwind from "../assets/Tailwind.png";
import Vscode from "../assets/Vscode.png";

const Skills = () => {

  const techstack =  [
    {
      id:1,
      src: Python,
      title: "Python",
      style: "shadow-yellow-300",
    },
    {
      id:2,
      src: Html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id:3,
      src: Css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id:4,
      src: Javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id:5,
      src: Ccpp,
      title: "C/C++",
      style: "shadow-blue-600",
    },
    {
      id:6,
      src: Reactt,
      title: "React.js",
      style: "shadow-cyan-400",
    },
    {
      id:7,
      src: Node,
      title: "Node.js",
      style: "shadow-lime-300",
    },
    {
      id:8,
      src: Tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-400",
    },
    {
      id:9,
      src: Bootstrap,
      title: "BOOTSTRAP",
      style: "shadow-purple-600",
    },
    {
      id:10,
      src: Sass,
      title: "SASS",
      style: "shadow-pink-400",
    },
    {
      id:11,
      src: Git1,
      title: "Git",
      style: "shadow-red-500",
    },
    {
      id:12,
      src: Vscode,
      title: "VS CODE",
      style: "shadow-blue-500",
    },
    {
      id:13,
      src: Github,
      title: "GITHUB",
      style: "shadow-gray-500",
    },
  ]

  return (
    <div name="skills" className="bg-gradient-to-b from-gray-800 to-black pt-20 pb-10 w-full h-fit">

      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div>
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
           Skills
          </p>
          <p className="py-7">
           These are the technologies that I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          
          {
            techstack.map(({id, src, title, style}) => (

            <div 
            key={id} 
            className= {`shadow-md hover:scale-105 duration-500 
            py-2 rounded-lg ${style}`} >
            <img src={src} alt="" className="w-20 mx-auto"  />
            <p className="mt-4">{title}</p>
            </div>

            ))
          }

        </div>

      </div>

    </div>
  );
}

export default Skills