"use client";
import { motion } from "framer-motion";
import { staggerContainer, slideUp } from "@/utils/motion";
import { Moon } from "@/components";
import { styles } from "@/styles";
const Hero = () => {

  return (
    <section
      id="home"
      className={`xl:px-[200px] lg:px-[120px] md:px-36 px-6 mt-[-5%] pb-18 flex flex-col items-center justify-center z-[5] `}
    >
      <motion.div
        className="w-full flex lg:flex-row flex-col-reverse lg:justify-between justify-center items-center min-h-[80vh] "
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="flex flex-col mt-[-100px] justify-start items-start lg:max-w-[80%] relative z-[2]">
        <motion.h3
            variants={slideUp(0.25)}
            className="text-[#BFBFBF] lg:text-[30px] md:text-[24px] text-[20px] font-normal font-mono md:ml-[6px] ml-[3px] md:pb-2 "
          >
            Hi, my name is
          </motion.h3>
          <motion.h1
            variants={slideUp(0.5)}
            className="text-[#F5F5F5] font-poppins lg:leading-[90px] md:leading-[70.4px] leading-[68px] font-light lg:text-[100px] md:text-[80px] text-[66px] "
          >
            Nick Shum
          </motion.h1>
          <motion.h2
            variants={slideUp(0.75)}
            className="text-[#BFBFBF] md:ml-[5px] ml-[3px] font-poppins lg:leading-[50px] leading-[37px] lg:pt-4 pt-2 lg:text-[50px] md:text-[34px] text-[30px] pb-2 "
          >
            I'm a Software Developer
          </motion.h2>
  
        </div>
        <motion.div className="top-[0] w-[90%] mx-[-30%] mt-[-5%] lg:inline hidden">
          <Moon />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
