"use client";

import { motion } from "framer-motion";

import { AiOutlineInstagram, AiOutlineLinkedin } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { SlSocialSpotify } from "react-icons/sl";
import {staggerContainer, slideUp } from "@/utils/motion";

const Sidebar = () => {
  return (
    <motion.div variants={staggerContainer}
          initial="hidden"
      animate="visible"
     className="hidden md:h-[100vh] lg:px-[40px] px-16  md:fixed md:flex md:flex-col md:justify-end md:items-center md:gap-5">
      <motion.a
        variants={slideUp(2.5)}
        href="https://github.com/NickShum222"
        target="_blank"
        className="text-[#8b8b8b] transition-transform duration-300 hover:text-highlight hover:-translate-y-1"
      >
        <FiGithub size={"1.4em"} />
      </motion.a>
      <motion.a
        variants={slideUp(2.7)}
        href="https://www.linkedin.com/in/nick-shum/"
        target="_blank"
        className="text-[#8b8b8b] transition-transform duration-300 hover:text-highlight hover:-translate-y-1"
      >
        <AiOutlineLinkedin size={"1.4em"} />
      </motion.a>
      <motion.a
        variants={slideUp(2.9)}
        href="https://www.instagram.com/nick.shum_/"
        target="_blank"
        className="text-[#8b8b8b] transition-transform duration-300 hover:text-highlight hover:-translate-y-1"
      >
        <AiOutlineInstagram size={"1.4em"} />
      </motion.a>
      <motion.a
        variants={slideUp(3.1)}
        href="https://open.spotify.com/user/1ofn228owlljh59onkm7f8k9q"
        target="_blank"
        className="text-[#8b8b8b] transition-transform duration-300 hover:text-highlight hover:-translate-y-1"
      >
        <SlSocialSpotify size={"1.4em"} />
      </motion.a>

      <motion.div variants={slideUp(2.5)} className="h-[100px] bg-[#8b8b8b] w-[2px]">

      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
