import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import java from "../../public/java.png";
import linux from "../../public/linux.png?url";
import javascript from "../../public/javascript.png";
import oracle from "../../public/oracle.png";
import spring from "../../public/spring.png";
import springBoot from "../../public/springBoot.jpg";
import sql from "../../public/sql.png?url";
import s3 from "../../public/s3.png?url";
import ec from "../../public/ec.png?url";

function Skills() {
  const cardItem = [
    {
      id: 1,
      logo: linux,
      name: "Linux",
    },
    {
      id: 2,
      logo: sql,
      name: "SQL",
    },
    {
      id: 3,
      logo: s3,
      name: "Amazon S3",
    },
    {
      id: 4,
      logo: ec,
      name: "EC2",
    },
    // {
    //   id: 5,
    //   logo: oracle,
    //   name: "Oracle",
    // },
    // {
    //   id: 6,
    //   logo: spring,
    //   name: "Spring",
    // },
    // {
    //   id: 7,
    //   logo: springBoot,
    //   name: "Spring Boot",
    // },
  ];
  return (
    <div
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl text-center font-bold mb-5">Skills</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-7 my-3 justify-center">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className="flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;