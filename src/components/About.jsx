import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit pt-20 pb-10 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl leading-relaxed mt-10">
          Welcome! I'm <span className="text-yellow-500">Mihir Sharma</ span>, a passionate and focused individual who thrives in a fast paced environment.
          Along with solid foundations in ds & algo, I specializes in web development. My unwavering passion for developing things from scratch, 
          drives me to stay ahead of emerging trends and deliver outstanding results through creativity, strategic thinking, and attention to detail.
        </p>

        <br />

        <p className="text-xl leading-relaxed mb-10">
          My unwavering passion for developing things from scratch, drives me to stay ahead of emerging trends and deliver outstanding results through 
          creativity, strategic thinking, and attention to detail. <br />
          Thank you for visiting! Let's connect & discuss what's ahead.
        </p>
      </div>
    </div>
  );
};

export default About;
