import React from 'react';

import Bootstrap from "../assets/Bootstrap.png";
import Css from "../assets/Css.png";
import Git1 from "../assets/Git1.png";
import Html from "../assets/Html.png";
import Javascript from "../assets/Javascript.png";
import Node from "../assets/Node.png";
import Python from "../assets/Python.png";
import Reactt from "../assets/Reactt.png";
import Tailwind from "../assets/Tailwind.png";
import {
  TypeScriptIcon,
  ExpressIcon,
  MongoDBIcon,
  ReduxIcon,
  DockerIcon,
  GraphQLIcon,
  JestIcon,
  CICDIcon,
  CloudIcon,
  RestApiIcon,
  NextjsIcon,
  PostmanIcon
} from "../assets/SkillIcons";

const Skills = () => {

  const techstack =  [
    // Core MERN & Web
    { id: 1, src: Javascript, title: "JavaScript", style: "shadow-yellow-500" },
    { id: 5, src: Node, title: "Node.js", style: "shadow-lime-300" },
    { id: 3, src: Reactt, title: "React.js", style: "shadow-cyan-400" },
    { id: 6, src: ExpressIcon, title: "Express.js", style: "shadow-gray-600", isSvg: true },
    { id: 7, src: MongoDBIcon, title: "MongoDB", style: "shadow-green-500", isSvg: true },
    { id: 24, src: Python, title: "Python", style: "shadow-yellow-300" },
    { id: 8, src: ReduxIcon, title: "Redux", style: "shadow-purple-500", isSvg: true },
    { id: 2, src: TypeScriptIcon, title: "TypeScript", style: "shadow-blue-400", isSvg: true },
    { id: 4, src: NextjsIcon, title: "Next.js", style: "shadow-gray-700", isSvg: true },
    { id: 14, src: Git1, title: "Git", style: "shadow-red-500" },
    { id: 17, src: DockerIcon, title: "Docker", style: "shadow-blue-300", isSvg: true },
    { id: 20, src: RestApiIcon, title: "REST API", style: "shadow-orange-500", isSvg: true },
    { id: 21, src: GraphQLIcon, title: "GraphQL", style: "shadow-pink-500", isSvg: true },
    { id: 22, src: CICDIcon, title: "CI/CD", style: "shadow-gray-400", isSvg: true },
    { id: 19, src: PostmanIcon, title: "Postman", style: "shadow-orange-400", isSvg: true },
    { id: 10, src: Bootstrap, title: "Bootstrap", style: "shadow-purple-600" },
    { id: 12, src: Css, title: "CSS", style: "shadow-blue-500" },
    { id: 13, src: Html, title: "HTML", style: "shadow-orange-500" },
    { id: 9, src: Tailwind, title: "Tailwind CSS", style: "shadow-sky-400" },
    { id: 23, src: CloudIcon, title: "Cloud", style: "shadow-blue-400", isSvg: true },
    { id: 18, src: JestIcon, title: "Jest", style: "shadow-red-400", isSvg: true },
  ];

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

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center py-8 px-12 sm:px-0">
          {techstack.map(({id, src, title, style, isSvg}) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-4 rounded-lg flex flex-col items-center justify-center ${style}`}
            >
              <div className="w-20 h-20 flex items-center justify-center mx-auto">
                {isSvg
                  ? <span className="w-full h-full flex items-center justify-center">{typeof src === 'function' ? src() : src}</span>
                  : <img src={src} alt={title} className="w-full h-full object-contain" />
                }
              </div>
              <p className="mt-4 text-base font-medium">{title}</p>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default Skills