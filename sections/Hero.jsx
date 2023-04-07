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
      className={`xl:pl-[280px] lg:pl-[120px] md:pl-36 lg:pt-20 pl-6 xl:pr-[200px] lg:pr-[120px] md:pr-36 pr-6 mt-[-5%] pb-18 flex flex-col items-center justify-center z-[5] `}
    >
      <motion.div
        className="w-full flex lg:flex-row flex-col-reverse  lg:justify-between justify-around items-center min-h-[80vh] "
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="flex flex-col mt-[-100px] lg:justify-start lg:items-start md:justify-center md:items-center justify-start items-start lg:max-w-[80%] relative z-[2]">
          <motion.h3
            variants={slideUp(1)}
            className="text-semiwhite lg:text-[26px] md:text-[22px] text-[18px] font-normal font-mono md:ml-[6px] ml-[3px] md:pb-2 "
          >
            Hi, my name is
          </motion.h3>
          <motion.h1
            variants={slideUp(1.25)}
            className="text-white font-normal font-poppins lg:leading-[90px] md:leading-[70.4px] leading-[68px]  lg:text-[100px] md:text-[80px] text-[62px] "
          >
            Nick Shum
          </motion.h1>
          <motion.h2
            variants={slideUp(1.5)}
            className="text-semiwhite md:ml-[5px] ml-[3px] font-poppins lg:leading-[50px] leading-[37px] lg:pt-4 pt-2 lg:text-[50px] md:text-[34px] text-[30px] pb-2 "
          >
            I'm a Software Developer
          </motion.h2>
          <motion.div variants={slideUp(1.75)} className="flex flex-row items-center justify-center gap-5 mt-3 ml-1 md:ml-2 ">
            <Button className="mr-3 rounded-lg bg-highlight py-3 px-10 font-poppins text-[12px] md:text-[14px] text-white shadow-md font-semibold shadow-highlight/20 transition-all hover:shadow-lg hover:shadow-highlight/40 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none" ><a href="#contact">Contact</a></Button>
            <Button className="rounded-lg py-3 px-10 font-sans text-[12px] md:text-[14px] font-bold uppercase text-highlight transition-all hover:bg-highlight/10 active:bg-highlight/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-highlight border-[1px]" data-ripple-light="true" >Resume</Button>
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
