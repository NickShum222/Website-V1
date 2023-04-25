"use client";
import {
  motion,
  easeInOut,
  AnimatePresence,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { staggerContainer, dropDown, slideDown } from "@/utils/motion";
import { useState, useEffect } from "react";
import { navLinks } from "../constants";
import { styles } from "@/styles";
import { BsLinkedin, BsSpotify, BsGithub, BsInstagram } from "react-icons/bs";
import { HiMail } from "react-icons/hi";
import { CgDarkMode } from "react-icons/cg";

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
  const [hidden, setHidden] = useState(false);

  const toggleNav = () => {
    setNav(!nav);
  };
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const update = () => {
      if (scrollYProgress.current < scrollYProgress.prev) {
        setHidden(false);
        console.log("visible");
      } else if (scrollYProgress.current > 0.1) {
        setHidden(true);
        console.log("hidden");
      }
    };
    scrollYProgress.onChange(update);
    return () => scrollYProgress.clearListeners();
  }, [scrollYProgress]);


  return (
    <motion.div variants={slideDown(0)}  animate={hidden && !nav ? "hidden" : "visible"} className="w-full z-[70] fixed">
      <motion.nav
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className={`fixed z-[40] py-8  ${
          nav ? "" : "backdrop-blur-sm"
        } lg:px-[40px] md:px-16 px-6 w-full flex justify-between items-center z-[70] h-[70px]`}
      >
        <a href="#home">
          <motion.img
            variants={dropDown(0)}
            src="/initials.svg"
            alt="NS"
            className="h-[40px] object-cover z-[99] cursor-pointer"
          />
        </a>
        <div className="flex flex-row items-center justify-center">
          <ul
            className={`h-full flex-1 z-10 md:flex hidden justify-end items-center`}
          >
            {navLinks.map((nav, index) => (
              <motion.li
                variants={dropDown(index * 0.1 + 0.1)}
                key={nav.id}
                className={`h-full flex justify-center items-center font-poppins font-normal cursor-pointer text-[18px]  
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
                // onClick={() => {
                //   setActive(nav.title);
                // }}
              >
                {/* ${active === nav.title ? `text-highlight` : "text-semiwhite"} */}
                <a
                  className={`group transition-all duration-200 ease-out font-mono text-semiwhite
              `}
                  href={`#${nav.id}`}
                >
                  <span className="text-highlight group-hover:text-semiwhite">
                    #
                  </span>
                  <span className="font-mono group-hover:text-highlight">
                    {nav.id}
                  </span>
                </a>
              </motion.li>
            ))}
          </ul>
          {/* <motion.button variants={dropDown(0.6)} className="ml-5">
          <CgDarkMode size={"1.6em"} />
        </motion.button> */}
          {/* Hamburger Menu */}
          <motion.div
            variants={dropDown(0.4)}
            className="md:hidden flex flex-col cursor-pointer z-[99]"
            onClick={toggleNav}
          >
            <div
              className={`transform duration-300 w-[25px] h-[3px] bg-white rounded-none ease-in-out my-[2px] mx-1 ${
                nav ? "translate-y-[7px] origin rotate-45 transition " : ""
              }`}
            ></div>
            <div
              className={`transform duration-300 w-[25px] h-[3px] bg-white rounded-none ease-in-out my-[2px] mx-1 ${
                nav ? "translate-x-[100%] opacity-0" : ""
              }`}
            ></div>
            <div
              className={`transform duration-300 w-[25px] h-[3px] bg-white rounded-none ease-in-out my-[2px] mx-1 ${
                nav ? "translate-y-[-7px] origin -rotate-45 transition" : ""
              }`}
            ></div>
          </motion.div>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {nav && (
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
                className={`fixed right-0 bg-[#141414]  shadow-3xl  w-[80%] h-[100%] flex flex-col justify-evenly items-center z-[10]`}
                variants={slideIn}
                initial="hidden"
                animate="visible"
                exit="hidden"
                key={nav.toString()}
              >
                <ul
                  className={`${
                    nav
                      ? "flex flex-col justify-center items-center "
                      : "hidden"
                  } `}
                >
                  {navLinks.map((nav, index) => (
                    <li
                      key={nav.id}
                      className={` font-normal cursor-pointer transition-all duration-150 text-[16px] sm:text-[22px] text-semiwhite ${
                        styles.hoverCyan
                      }  ${index === 0 ? "mt-[25px]" : "mt-[35px]"} `}
                      onClick={() => {
                        //setActive(nav.title);
                        toggleNav();
                      }}
                    >
                      <a
                        className={`group text-[22px] transition-all duration-200 ease-out font-mono text-semiwhite
              `}
                        href={`#${nav.id}`}
                      >
                        <span className="text-highlight group-hover:text-semiwhite">
                          #
                        </span>
                        <span className="font-mono group-hover:text-highlight">
                          {nav.id}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col w-full justify-start items-center gap-4">
                  <div className="transition-all duration-150 sm:text-[22px] text-semiwhite text-[20px]">
                    Let&apos;s Connect!
                  </div>

                  <div className="flex flex-row w-full justify-center gap-6 items-center">
                    <motion.a
                      v
                      href="https://github.com/NickShum222"
                      target="_blank"
                      className="text-[#8b8b8b] duration-300 hover:text-highlight hover:-translate-y-1"
                    >
                      <BsGithub size={"1.6em"} />
                    </motion.a>
                    <motion.a
                      href="https://www.linkedin.com/in/nick-shum/"
                      target="_blank"
                      className="text-[#8b8b8b] duration-300 hover:text-highlight hover:-translate-y-1"
                    >
                      <BsLinkedin size={"1.6em"} />
                    </motion.a>
                    <motion.a
                      href="mailto:n4shum@uwaterloo.ca"
                      target="_blank"
                      className="text-[#8b8b8b] duration-300 hover:text-highlight hover:-translate-y-1"
                    >
                      <HiMail size={"1.9em"} />
                    </motion.a>
                    <motion.a
                      v
                      href="https://www.instagram.com/nick.shum_/"
                      target="_blank"
                      className="text-[#8b8b8b] duration-300 hover:text-highlight hover:-translate-y-1"
                    >
                      <BsInstagram size={"1.6em"} />
                    </motion.a>
                    <motion.a
                      href="https://open.spotify.com/user/1ofn228owlljh59onkm7f8k9q"
                      target="_blank"
                      className="text-[#8b8b8b] duration-300 hover:text-highlight hover:-translate-y-1"
                    >
                      <BsSpotify size={"1.6em"} />
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
      <motion.div
        className="fixed w-full hidden md:block origin-top-left h-[2px] top-[70px] z-50 left-0 right-0 bg-highlight"
        style={{ scaleX }}
      />
    </motion.div>
  );
};

export default Navbar;
