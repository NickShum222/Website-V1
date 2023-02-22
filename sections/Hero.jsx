"use client";
import { motion } from "framer-motion";
import { staggerContainer, slideUp } from "@/utils/motion";
import { Moon } from "@/components";
import { styles } from "@/styles";
const Hero = () => {

  return (
    <section
      id="home"
      className={`${styles.paddings}`}
    >
      <motion.div
        className="w-full flex lg:flex-row flex-col-reverse  lg:justify-between justify-center relative items-center "
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
      >
        <div className="flex flex-col mt-[-100px] justify-start items-start max-w-[80%] relative z-[2]">
        <motion.h3
            variants={slideUp(0.75)}
            className="text-[#BFBFBF] lg:text-[36px] md:text-[28px] text-[24px] font-normal font-mono md:ml-[6px] ml-[3px] md:pb-5 
          "
          >
            Hi, my name is
          </motion.h3>
          <motion.h1
            variants={slideUp(1)}
            className="text-[#F5F5F5] font-poppins lg:leading-[80px] md:leading-[30.4px] leading-[68px] font-light lg:text-[100px] md:text-[80px] text-[60px] "
          >
            Nick Shum
          </motion.h1>
          <motion.h2
            variants={slideUp(1.25)}
            className="text-[#BFBFBF] font-poppins lg:leading-[70px] md:leading-[55px] md:pt-5 lg:text-[70px] md:text-[38px] text-[30px] "
          >
            Software Developer,
          </motion.h2>
  
            <motion.h3 variants={slideUp(2)}
            className="text-[#BFBFBF] font-poppins lg:pt-5  lg:text-[24px] md:text-[22px] text-[18px] pb-4  lg:max-w-[60%] ">
              First year CE student @ University of Waterloo, and Quality
              Assurance Analyst @ EllisDon
            </motion.h3>
        </div>
        <motion.div className="top-[0] w-[90%] mx-[-30%] mt-[-10%] lg:inline hidden">
          <Moon />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
