"use client";
import { motion } from "framer-motion";
import { staggerContainer, slideUp } from "@/utils/motion";
import { Moon } from "@/components";
import { styles } from "@/styles";
import { ThemeProvider, Button } from "@material-tailwind/react";
const Hero = () => {
  return (
    <section
      id="home"
      className={`xl:px-[170px] lg:px-[110px] md:pl-36 xl:pt-0 lg:pt-20 pl-6 xl:pr-[200px] lg:pr-[120px] md:pr-36 pr-6 mt-[-5%] pb-18 flex flex-col items-center justify-center z-[5] `}
    >
      <motion.div
        className="w-full flex lg:flex-row flex-col-reverse  lg:justify-between justify-around items-center min-h-[80vh] "
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col mt-[-100px] lg:justify-start lg:items-start md:justify-center md:items-center justify-start items-start lg:max-w-[80%] relative z-[2]">
          <motion.h1
            variants={slideUp(0.6)}
            className="text-white font-normal font-poppins lg:leading-[80px] md:leading-[60px] leading-[50px] lg:text-[95px] md:text-[78px] text-[60px] "
          >
            Nick Shum
          </motion.h1>
          <motion.h2
            variants={slideUp(0.8)}
            className="text-[#A6A6A6]  lg:text-[45px] md:text-[40px] text-[30px] pb-2 lg:leading-[55px] md:leading-[50px] leading-[40px]"
          >
            Software Developer
          </motion.h2>
          <motion.div variants={slideUp(1)} className="flex flex-row items-center justify-center gap-5 ml-1 ">
            <Button className="rounded-none normal-case py-3 px-8 text-[14px] md:text-[16px] lg:text-[18px]  text-highlight transition-all hover:bg-highlight/10 active:bg-highlight/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-highlight border-[1px]"  ><a href="/resume">Resume</a></Button>
            <Button className="rounded-none normal-case py-3 px-8 font-normal font-mono text-[14px] md:text-[16px] lg:text-[18px]   text-highlight transition-all hover:bg-highlight/10 active:bg-highlight/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none  " data-ripple-light="true" ><a href="#contact">Contact</a></Button>
          </motion.div>
        </div>
        <motion.div className="top-[0] sm:w-[90%] w-[120%] mx-[-30%] sm:mt-[-5%] inline">
          <Moon />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
