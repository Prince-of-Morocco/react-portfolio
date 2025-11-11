import React from 'react'

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5 text-center">About</h1>
        <p className="text-justify leading-relaxed">
        </p> 
        <br />

        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <span className="block text-justify leading-relaxed">
          MCA, Anurag University, 2023 - 2025 <br />
          BSc Computer Science & Cognitive Systems, Loyola Academy, 2020 - 2023 <br />
          12th, Bhavan's Sri Aurobindo Junior College, 2018 <br />
          SSC, Pallavi Progressive High School, 2018 <br />
        </span>

        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Skills & Expertise
        </h1>
        <span className="block text-justify leading-relaxed">
          Proficient in: Java, Linux, Amazon EC2
        </span>

        <br />
        <br />

        <h1 className="text-green-600 font-semibold text-xl"> 
          Mission Statement
        </h1>
        <p className="text-justify leading-relaxed">
          My mission is to leverage my skills and creativity to deliver
          innovative solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  )
}

export default About
