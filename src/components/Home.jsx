import React from 'react';
import { MdOutlineKeyboardArrowRight} from "react-icons/md";
import heroImage  from "../assets/heroImage.png";
import {Link} from "react-scroll";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  return (
    <div 
    name="home" 
    className="h-fit pt-20 w-full bg-gradient-to-b
    from-black via-black to-gray-800">

      <div 
      className="max-w-screen-lg mx-auto flex flex-col
       items-center justify-center h-full px-4 md:flex-row">

        <div className="flex flex-col justify-center h-full">
          <h2 
          className="text-5xl leading-snug sm:text-7xl mt-8 font-bold  text-white">
            Namaste! I am <br /><span className="text-yellow-500">Mihir Sharma</span>
          </h2>
          <p 
          className= "text-gray-400 leading-relaxed py-4 max-w-md">
            A web development enthusiast with a knack for problem solving, a programming geek & a teacher. <br />
          </p>

        <div className="inline-flex"> 
         <div>
            <Link 
            to="projects" 
            smooth duration={500} 
            className="group text-white w-fit
            px-6 py-3 my-3 flex items-center rounded-md 
            bg-gradient-to-r from-cyan-500 to-blue-500
            cursor-pointer">
              Portfolio
              <span className="group-hover:rotate-90 duration-200">
              <MdOutlineKeyboardArrowRight size={25} 
               className="ml-1" />
              </span>
            </Link>
          </div>

         <div className="mx-3">
          <a href="https://drive.google.com/file/d/12Ni7J8jHKa47IGKBV0xjO3Qc7EV6Laxz/view?usp=share_link" 
            className="group text-white w-fit
            px-6 py-3 my-3 flex items-center rounded-md 
            bg-gradient-to-r from-yellow-300 to-yellow-700
            cursor-pointer"
            target= '_blank'
            rel="noreferrer">
            Resume <span className='mx-1'><BsFillPersonLinesFill size={20}/></span>
          </a>
          </div>
        </div>
         
       </div>

        <div>
          <img 
          src={heroImage} 
          alt="my profile" 
          className="rounded-2xl m-20 mx-auto w-2/3 h-fit" />
        </div>

      </div>
    </div>
  )
}

export default Home
