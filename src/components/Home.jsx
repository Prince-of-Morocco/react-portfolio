import React from 'react';
import dev from "../../public/dev.png?url";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

import { SiExpress } from "react-icons/si";
import { SiUipath } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa6";

import { ReactTyped } from "react-typed";
function Home() {
  return (
    <>
    <div name='Home' className= "max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 ">
        <div className='flex flex-col md:flex-row'>
        <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className='text-xl'>Welcome to my feed</span>
           <div className="flex space-x-1 text-2xl md:text-4xl">
           <h1>Hello, I'm a</h1>
           {/*<span className='text-red-700 font-bold'> Developer </span>*/}
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
            I'm Bharath, a Master's student in Computer Applications at Anurag University, Hyderabad. With a strong foundation in computer science, I am passionate about software development, web technologies, and problem-solving. I constantly seek to enhance my skills and stay updated with the latest trends in technology. Explore my portfolio to learn more about my work and projects. I'm open to collaboration and new opportunities!


            </p>

            <br />
             {/* social media icons */}
             <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
             <div className='spaace-y-2'>
                <h1 className='font-bold '>Available On</h1>
                <ul className='flex space-x-5'>
                    <li>
                        <a href="https://www.linkedin.com/in/bharath-raj-36br/" target="_blank">
                        <FaLinkedin className="text-2xl cursor-pointer" />
                        </a>
                    </li>

                    <li>
                        <a href="https://github.com/Prince-of-Morocco" target="_blank">
                        <FaGithub className="text-2xl cursor-pointer" />
                        </a>
                    </li>

                    {/* <li> 
                        <a href="https://www.telegram.org/" target="_blank">
                        <FaTelegram className="text-2xl cursor-pointer" />
                        </a>
                    </li> */}
                </ul>
             </div>
             <div className='space-y-2'>
             <h1 className='font-bold'>Currently Working On</h1>
                <div className='flex space-x-5'>
                <SiUipath className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <SiExpress className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaReact className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                  <FaNodeJs className="text-2xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px] cursor-pointer" />
                </div>
             </div>
             </div>
        </div>
        <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
        <img src={dev}className="rounded-full md:w-[450px] md:h-[450px]" alt="" />
        </div>
        </div>
    </div>
    <hr/>
    </>
  )
}

export default Home

