"use client";
import { motion, LazyMotion, easeInOut, domAnimation, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { navLinks } from "../constants";

const slideIn = {
  hidden: {
    x: "100vw",
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: easeInOut,
      
    },
  },
};
const Navbar = () => {
  const [active, setActive] = useState("Home");

  const [nav, setNav] = useState(false);
  const toggleNav = () => {setNav(!nav);};

  return (
    <div className=" fixed z-[10] bg-primary py-8 sm:px-16 px-10 w-[100%] flex justify-between items-center shadow-xl h-[36px]">
      <img
        src="/initials.svg"
        alt="NS"
        className="h-[40px] object-cover z-[99] cursor-pointer"
      />
      <ul className={`h-full flex-1 z-10 md:flex hidden justify-end items-center`}>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`h-full flex justify-center items-center font-poppins font-normal cursor-pointer text-[18px]  ${
              active === nav.title ? "text-secondary" : "text-semiWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={
              () => {setActive(nav.title); 
                    
              }}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div
        className="md:hidden flex flex-col cursor-pointer z-[99]"
        onClick={toggleNav}
      >
        <div
          className={`transform duration-300 w-[25px] h-[3px] bg-white rounded-full ease-in-out my-[2px] mx-1 ${
            nav ? "translate-y-[7px] origin rotate-45 transition " : ""
          }`}
        ></div>
        <div
          className={`transform duration-300 w-[25px] h-[3px] bg-white rounded-full ease-in-out my-[2px] mx-1 ${
            nav ? "translate-x-[100%] opacity-0" : ""
          }`}
        ></div>
        <div
          className={`transform duration-300 w-[25px] h-[3px] bg-white rounded-full ease-in-out my-[2px] mx-1 ${
            nav ? "translate-y-[-7px] origin -rotate-45 transition" : ""
          }`}
        ></div>
      </div>
      <AnimatePresence>
        {nav &&(
         <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
        className={`z-[10] ${
          nav ? "fixed left-0 top-0 w-full h-screen " : "hidden"
        } md:hidden backdrop-blur-sm`}
        onClick={toggleNav}
      >

            <motion.div
              className={`fixed right-0  bg-secondary  shadow-3xl  w-[60%] h-[100%] flex flex-col z-[10]`}  
              variants={slideIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              key={nav.toString()}
            >
              <ul
                className={`${nav ? "flex flex-col justify-center items-center h-[70%]":"hidden"} `}
              >
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] sm:text-[22px] ${
                      active === nav.title ? "text-secondary" : "text-semiWhite"
                    }  ${index === 0 ? "mt-[40px]" : "mt-[50px]"} `}
                    onClick={
                      () => {setActive(nav.title); 
                            toggleNav();}}
                        >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </motion.div>
            </motion.div>
          )}
          </AnimatePresence>
    </div>
  );
};

export default Navbar;
