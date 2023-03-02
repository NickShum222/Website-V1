"use client";
import { motion, easeInOut, AnimatePresence, useScroll } from "framer-motion";
import { staggerContainer, dropDown } from "@/utils/motion";
import { useState } from "react";
import { navLinks } from "../constants";
import { styles } from "@/styles";
import { BsLinkedin, BsSpotify, BsGithub, BsInstagram } from "react-icons/bs";

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
  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <motion.nav
      variants={staggerContainer}
      initial="hidden"
      animate="visible"
      className={`fixed z-[40] py-8 ${
        nav ? "" : "backdrop-blur-sm"
      } lg:px-[40px] md:px-16 px-10 w-[100%] flex justify-between items-center  h-[70px]`}
    >
      <a href="www.nickshum.ca">
        <motion.img
          variants={dropDown(0)}
          src="/initials.svg"
          alt="NS"
          className="h-[40px] object-cover z-[99] cursor-pointer"
        />
      </a>
      <ul
        className={`h-full flex-1 z-10 md:flex hidden justify-end items-center`}
      >
        {navLinks.map((nav, index) => (
          <motion.li
            variants={dropDown(index * 0.1 + 0.1)}
            key={nav.id}
            className={`h-full flex justify-center items-center font-poppins font-normal cursor-pointer text-[18px]  
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => {
              setActive(nav.title);
            }}
          >
            {/* ${active === nav.title ? `text-highlight` : "text-semiWhite"} */}
            <a
              className={`${styles.hoverCyan} text-semiWhite
              `}
              href={`#${nav.id}`}
            >
              {nav.title}
            </a>
          </motion.li>
        ))}
      </ul>
      {/* Hamburger Menu */}
      <motion.div
        variants={dropDown(0.4)}
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
      </motion.div>
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
              className={`fixed right-0 bg-[#0c183b]  shadow-3xl  w-[70%] h-[100%] flex flex-col justify-evenly items-center z-[10]`}
              variants={slideIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              key={nav.toString()}
            >
              <ul
                className={`${
                  nav ? "flex flex-col justify-center items-center " : "hidden"
                } `}
              >
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-normal cursor-pointer transition-all duration-150 text-[16px] sm:text-[22px] text-semiWhite ${styles.hoverCyan}  ${index === 0 ? "mt-[40px]" : "mt-[50px]"} `}
                    onClick={() => {
                      setActive(nav.title);
                      toggleNav();
                    }}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col w-full justify-start items-center gap-4">
                <div className="transition-all duration-150 text-[16px] sm:text-[22px]">
                  Let&apos;s Connect!
                </div>

                <div className="flex flex-row w-full justify-center gap-6 items-center">
                  <motion.a
                    v
                    href="https://github.com/NickShum222"
                    target="_blank"
                    className="text-[#8b8b8b] duration-300 hover:text-highlight hover:-translate-y-1"
                  >
                    <BsGithub size={"1.3em"} />
                  </motion.a>
                  <motion.a
                    href="https://www.linkedin.com/in/nick-shum/"
                    target="_blank"
                    className="text-[#8b8b8b] duration-300 hover:text-highlight hover:-translate-y-1"
                  >
                    <BsLinkedin size={"1.3em"} />
                  </motion.a>
                  <motion.a
                    v
                    href="https://www.instagram.com/nick.shum_/"
                    target="_blank"
                    className="text-[#8b8b8b] duration-300 hover:text-highlight hover:-translate-y-1"
                  >
                    <BsInstagram size={"1.3em"} />
                  </motion.a>
                  <motion.a
                    href="https://open.spotify.com/user/1ofn228owlljh59onkm7f8k9q"
                    target="_blank"
                    className="text-[#8b8b8b] duration-300 hover:text-highlight hover:-translate-y-1"
                  >
                    <BsSpotify size={"1.3em"} />
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
