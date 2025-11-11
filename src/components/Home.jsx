import React from 'react'; 
import dev from "../../public/dev.png?url";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div name='Home' className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
        <div className='flex flex-col md:flex-row'>

          {/* Left Section */}
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className='text-xl'>Welcome to my feed</span>

            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-blue-700 font-bold"
                strings={["Linux Enthusiast", "Cloud Beginner (AWS)", "SQL Explorer", "Python Learner"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>

            <br />
            <p className="text-sm md:text-md text-justify">
                Hi there 👋, I’m Bharath, a recent MCA graduate who enjoys bringing ideas to life through code, design, and innovation.
                I’m passionate about AI, web development, and cloud technologies, and I’m always exploring ways to make technology more intuitive and meaningful.
                Always learning, always curious — I’m open to collaborations, challenges, and growth opportunities in the tech space.
            </p>

            <br />

            {/* Social Media + Currently Working */}
            <div className="flex flex-col md:flex-row items-center md:items-start justify-center md:justify-between space-y-8 md:space-y-0 text-center md:text-left w-full">

              {/* Available On Section */}
              <div className='space-y-2 w-full md:w-auto'>
                <h1 className='font-bold text-md mb-2'>Available On</h1>
                <ul className='flex justify-center md:justify-start space-x-5'>
                  <li>
                    <a href="https://www.linkedin.com/in/bharath-raj-36br/" target="_blank" rel="noreferrer">
                      <FaLinkedin className="text-xl cursor-pointer hover:text-blue-600 duration-200" />
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/Prince-of-Morocco" target="_blank" rel="noreferrer">
                      <FaGithub className="text-xl cursor-pointer hover:text-gray-800 duration-200" />
                    </a>
                  </li>
                </ul>
              </div>

              {/* Currently Working On Section */}
              <div className='space-y-2 w-full md:w-auto'>
                <h1 className='font-bold text-md mb-2'>Currently Working On</h1>
                <div className='flex flex-wrap justify-center md:justify-start gap-3'>
                  <span className='px-3 py-1.5 bg-gray-100 rounded-full shadow-sm text-xs md:text-sm font-medium hover:scale-105 duration-200'>
                    Gen AI
                  </span>
                  <span className='px-3 py-1.5 bg-gray-100 rounded-full shadow-sm text-xs md:text-sm font-medium hover:scale-105 duration-200'>
                    SDLC
                  </span>
                  <span className='px-3 py-1.5 bg-gray-100 rounded-full shadow-sm text-xs md:text-sm font-medium hover:scale-105 duration-200'>
                    Automation Testing
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Right Image Section */}
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img src={dev} className="rounded-full md:w-[450px] md:h-[450px]" alt="Developer" />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
