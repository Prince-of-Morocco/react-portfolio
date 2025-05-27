import React from 'react';
import java from "../../public/java.png";
import python from "../../public/python.webp";
import uipath from "../../public/Ui_Path.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import django from "../../public/django.jpg";

function Portfolio() {
    const cardItem = [
        {
          id: 1,
          logo: uipath,
          name: "Ui Path",
          description: "Table Extraction Project.",
          link: "https://github.com/Prince-of-Morocco/Table-Extraction-Uipath",
        },
        // {
        //   id: 2,
        //   logo: express,
        //   name: "Express",
        //   description: "A minimal and flexible Node.js web application framework.",
        //   link: "https://youtube.com/",
        // },
        // {
        //   id: 3,
        //   logo: reactjs,
        //   name: "ReactJS",
        //   description: "A JavaScript library for building user interfaces.",
        // },
        // {
        //   id: 4,
        //   logo: nodejs,
        //   name: "NodeJS",
        //   description: "A JavaScript runtime built on Chrome's V8 JavaScript engine.",
        // },
        {
          id: 5,
          logo: django,
          name: "django",
          description: "Weapon Detection Project using YOLOv8 Algorithm.",
          link: "https://github.com/Prince-of-Morocco",
        },
        // {
        //   id: 6,
        //   logo: java,
        //   name: "Java",
        //   description: "A versatile and widely-used programming language.",
        // },
      ];

  return (
    <div name='Portfolio'className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
        <div className="text-center mb-10">
            <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
            <span className="underline font-semibold">Featured Projects</span>
        </div>
        <div className="flex justify-center gap-8 flex-wrap">
            {
                cardItem.map(({id, logo, name, description, link}) => (
                    <div className="flex flex-col items-center md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-110 duration-300" key={id}>
                        <img src={logo} className="w-[120px] h-[120px] mb-4 rounded-full border-[2px]" alt={`${name} logo`} />
                        <div className="text-center mb-2">
                            <div className="font-bold text-xl">{name}</div>
                            <p className="text-gray-700">{description}</p>
                        </div>
                        <a href={link} target="_blank" rel="noopener noreferrer">
                        <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">Source Code</button>
                        </a>
                    </div>
                ))
            }
        </div>
    </div>
  );
}

export default Portfolio;
