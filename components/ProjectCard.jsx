"use client";
import { motion } from "framer-motion";
import { slideRight } from "../utils/motion";
import { FiGithub } from "react-icons/fi";
import { BsGlobe } from "react-icons/bs";
import { IconContext } from "react-icons";

const ProjectCard = ({
  id,
  title,
  description,
  tools,
  git,
  url,
  index,
  active,
  setActive,
}) => {
  return (
    // <IconContext.Provider value={{ color: "#BFBFBF", size: "1.5em" }}>
      <motion.div
        variants={slideRight(index * 0.25)}
        onClick={() => {
          setActive(id);
        }}
        className={`${active === id ? "flex-[4]" : "flex-[2]"}  relative 
        lg:w-[50%]  w-[100%] flex flex-col px-8 justify-center items-center bg-[#1E1E1E] rounded-lg cursor-pointer min-w-[400px] `}
      >
        <div
          className={`w-[100%] flex flex-row justify-between items-center ${
            active === id ? "border-b-[1px] " : ""
          }`}
        >
          <h3 className={`text-[25px] py-6 text-white font-mono font-normal  `}>
            {title}
          </h3>
          <div className="flex flex-row justify-end items-center gap-3 py-6  ">
            <a href={git} target="_blank" className="text-[#F5F5F5] duration-100 hover:text-blue-800 hover:-translate-y-1 ">
              <FiGithub size={"1.5em"} />
            </a>
            <a href={url} target="_blank" className="text-[#F5F5F5] duration-100 hover:text-blue-800 hover:-translate-y-1">
              <BsGlobe size={"1.5em"} />
            </a>
          </div>
        </div>

        <div
          className={`overflow-hidden  transition-all duration-300  flex flex-col justify-between ${
            active === id ? "h-[250px]" : "h-0"
          } `}
        >
          <div className="flex flex-col justify-center items-center">
            <p className=" text-[#BFBFBF] w-[100%] font-normal font-mono text-[16px] leading-6 pt-2 ">
              {description}
            </p>
          </div>
          <ul className=" flex flex-row justify-start items-center gap-7 pb-5 ">
            {tools.map((tool) => (
              <li className="text-[#B0B0B0] font-mono">{tool}</li>
            ))}
          </ul>
        </div>

        {/* {active === id ? (
          <div className="">
            <div className="border-b-[1px] mx-8 flex flex-row justify-between items-center">
              <h3 className="text-[25px]  text-white font-mono font-normal pt-6 pb-2">
                {title}
              </h3>
              <div className="flex flex-row justify-end items-center gap-3 pt-6 pb-2">
                <a href={git} target="_blank">
                  <FiGithub className="text-[#F5F5F5] " />
                </a>
                <a href={url} target="_blank">
                  <BsGlobe className="text-[#F5F5F5] " />
                </a>
              </div>
            </div>

            <p className=" text-[#BFBFBF] mx-8 font-normal font-mono text-[16px] leading-6 pt-2 ">
              {description}
            </p>
            <ul className="mx-8 flex flex-row justify-start gap-7">
              {tools.map((tool) => (
                <li className="text-white text-mono">{tool}</li>
              ))}
            </ul>
          </div>
        ) : (
          <div className="w-full flex flex-row justify-between items-center">
            <h3 className="text-[25px]  text-white font-mono font-normal py-6 mx-8">
              {title}
            </h3>
            <div className="flex flex-row justify-end items-center gap-3 py-6 mx-8 ">
              <a href={git} target="_blank">
                <FiGithub className="text-[#F5F5F5] " />
              </a>
              <a href={url} target="_blank">
                <BsGlobe className="text-[#F5F5F5] " />
              </a>
            </div>
          </div>
        )} */}
      </motion.div>
    // </IconContext.Provider>
  );
};

export default ProjectCard;
