"use client";
import { motion, LazyMotion, easeInOut, domAnimation, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { navLinks } from "../constants";
import { styles } from "@/styles";

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
    <nav className={`fixed z-[40] py-8 ${nav ? "" : "backdrop-blur-sm"} lg:px-[40px] md:px-16 px-10 w-[100%] flex justify-between items-center  h-[70px]`}>
      <img
        src="/initials.svg"
        alt="NS"
        className="h-[40px] object-cover z-[99] cursor-pointer"
      />
      <ul className={`h-full flex-1 z-10 md:flex hidden justify-end items-center`}>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`h-full flex justify-center items-center font-poppins font-normal cursor-pointer text-[18px]  
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={
              () => {setActive(nav.title);  }}
          >
            <a className={`${styles.hoverGradient}
             ${
              active === nav.title ? `text-[#08fdd8]` : "text-semiWhite"}`} href={`#${nav.id}`}>{nav.title}</a>
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
        } md:hidden backdrop-blur-sm z-[50]`}
        onClick={toggleNav}
      >

            <motion.div
              className={`fixed right-0  bg-[#0c183b]  shadow-3xl  w-[70%] h-[100%] flex flex-col z-[10]`}  
              variants={slideIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              key={nav.toString()}
            >
              <ul
                className={`${nav ? "flex flex-col justify-center items-center h-full":"hidden"} `}
              >
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer text-[16px] sm:text-[22px] ${
                      active === nav.title ? "text-tertiary" : "text-[semiWhite]"
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
    </nav>
  );
};

export default Navbar;
