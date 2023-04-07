"use client";
import { motion } from "framer-motion";
import { slideRight } from "../utils/motion";
import { FiGithub } from "react-icons/fi";
import { BsGlobe } from "react-icons/bs";
import { useState } from "react";

const ProjectCard = ({ id, title, description, tools, git, url, index }) => {
  const [active, setActive] = useState(false);
  const handleActive = () => {
    setActive(!active);
  };
  return (
    <div
      className="overflow-hidden flex flex-col items-between cursor-pointer justify-between border-[1px] border-white w-[30%] h-[300px]"
      onClick={() => {
        handleActive();
      }}
    >
      <div
        className={`${
          active ? `h-[0px] opacity-0` : "h-[235px]"
        } transition-all duration-150`}
      >
        im asdfajlksdjfklajslkdfjlasjdflkajsdlkfjalksdfjlaksdjfklajsdflkaj
      </div>
      <div
        className={`flex flex-row justify-between items-center ${
          active ? "border-b-[1px]" : "border-t-[1px]"
        }`}
      >
        <div className=" py-4 pl-4 text-[20px]">{title}</div>
        <div className="flex flex-row gap-2 pr-4">
          <motion.a
            href={git}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.1,
              color: "#6a86ff",
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            className="text-[#BFBFBF]  "
          >
            <FiGithub size={"1.4em"} />
          </motion.a>
          <motion.a
            href={url}
            target="_blank"
            rel="noreferrer"
            whileHover={{
              scale: 1.1,
              color: "#6a86ff",
              transition: { duration: 0.2 },
            }}
            whileTap={{ scale: 0.9 }}
            className="text-[#BFBFBF] "
          >
            <BsGlobe size={"1.4em"} />
          </motion.a>
        </div>
      </div>
      <div
        className={`${
          active ? `h-[235px]` : "h-0"
        } transition-all duration-150`}
      >
        <div className="flex flex-col h-full justify-between items-between">
          <div className="px-4 pt-4">{description}</div>
          <ul className="flex flex-row px-4 justify-start items-center sm:gap-x-7 gap-x-3 gap-y-2 pb-5 flex-wrap">
            {tools.map((tool, index) => (
              <li
                key={index}
                className="text-[#B0B0B0] transition-all"
              >
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    // <IconContext.Provider value={{ color: "#BFBFBF", size: "1.5em" }}>
    // <motion.div
    //   variants={slideRight(index * 0.25 + 0.25)}
    //   onClick={() => {
    //     setActive(id);
    //   }}
    //   className={`relative
    //   w-full flex flex-col sm:px-10 px-4 justify-center items-center   cursor-pointer
    //   border-[1px] border-[#BFBFBF]`}
    // >
    //   <div
    //     className={`w-[100%] flex flex-row justify-between items-center ${
    //       active === id ? "border-b-[1px] " : ""
    //     }`}
    //   >
    //     <h3
    //       className={`md:text-[25px] transition-all duration-150 text-[18px] py-4 md:py-6 text-[#BFBFBF] font-mono font-normal  `}
    //     >
    //       {title}
    //     </h3>
    //     <div className="flex flex-row justify-end items-center gap-3 py-4 md:py-6  ">
    //       <motion.a
    //         href={git}
    //         target="_blank"
    //         rel="noreferrer"
    //         whileHover={{
    //           scale: 1.1,
    //           color: "#6a86ff",
    //           transition: { duration: 0.2 },
    //         }}
    //         whileTap={{ scale: 0.9 }}
    //         className="text-[#F5F5F5]  "
    //       >
    //         <FiGithub size={"1.5em"} />
    //       </motion.a>
    //       <motion.a
    //         href={url}
    //         target="_blank"
    //         rel="noreferrer"
    //         whileHover={{
    //           scale: 1.1,
    //           color: "#6a86ff",
    //           transition: { duration: 0.2 },
    //         }}
    //         whileTap={{ scale: 0.9 }}
    //         className="text-[#F5F5F5] "
    //       >
    //         <BsGlobe size={"1.5em"} />
    //       </motion.a>
    //     </div>
    //   </div>

    //   <div
    //     className={`overflow-hidden  transition-all duration-300 flex flex-col items-start justify-between ${
    //       active === id
    //         ? "md:h-[175px] lg:h-[250px] sm:h-[250px] h-[200px]"
    //         : "h-0"
    //     } `}
    //   >
    //     <p className="text-[#BFBFBF]  font-normal  transition-all duration-150 font-mono md:text-[16px] text-[14px] md:leading-6 leading-5  py-2 ">
    //       {description}
    //     </p>

    //     <ul className="flex flex-row justify-start items-center sm:gap-x-7 gap-x-3 gap-y-2 pb-5 flex-wrap">
    //       {tools.map((tool, index) => (
    //         <li
    //           key={index}
    //           className="text-[#B0B0B0] transition-all duration-150 font-mono md:text-[16px] text-[14px]"
    //         >
    //           {tool}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>

    // </motion.div>
    // </IconContext.Provider>
  );
};

export default ProjectCard;
