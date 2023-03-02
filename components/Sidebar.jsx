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
        variants={slideUp(3.5)}
        href="https://github.com/NickShum222"
        target="_blank"
        whileHover={{
          scale: 1.1,
          color: "#4ECDC4",
          transition: { duration: 0.2 },
          
        }}
        whileTap={{ scale: 0.9 }}
        className="text-[#8b8b8b]"
      >
        <FiGithub size={"1.4em"} />
      </motion.a>
      <motion.a
        variants={slideUp(3.7)}
        href="https://www.linkedin.com/in/nick-shum/"
        target="_blank"
        whileHover={{
          scale: 1.1,
          color: "#4ECDC4",
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
        className="text-[#8b8b8b] "
      >
        <AiOutlineLinkedin size={"1.4em"} />
      </motion.a>
      <motion.a
        variants={slideUp(3.9)}
        href="https://www.instagram.com/nick.shum_/"
        target="_blank"
        whileHover={{
          scale: 1.1,
          color: "#4ECDC4",
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
        className="text-[#8b8b8b] "
      >
        <AiOutlineInstagram size={"1.4em"} />
      </motion.a>
      <motion.a
        variants={slideUp(4.1)}
        href="https://open.spotify.com/user/1ofn228owlljh59onkm7f8k9q"
        target="_blank"
        whileHover={{
          scale: 1.1,
          color: "#4ECDC4",
          transition: { duration: 0.2 },
        }}
        whileTap={{ scale: 0.9 }}
        className="text-[#8b8b8b] "
      >
        <SlSocialSpotify size={"1.4em"} />
      </motion.a>

      <motion.div variants={slideUp(4.5)} className="h-[100px] bg-[#8b8b8b] w-[2px]">

      </motion.div>
    </motion.div>
  );
};

export default Sidebar;
