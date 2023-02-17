"use client";
import { motion } from "framer-motion";
import { staggerContainer, slideUp } from "@/utils/motion";
import { socialLinks } from "@/constants";
import { BsGithub, BsLinkedin, BsInstagram, BsSpotify } from "react-icons/bs";
const Hero = () => {
  const icons = [
    "BsGithub",
    "BsLinkedin",
    "BsInstagram",
    "BsSpotify",
  ];
  return (
    <section
      id="home"
      className="sm:pb-16 pb-12 md:px-36 px-16 min-h-[100vh] flex flex-col justify-center items-center"
    >
      <motion.div
        className="flex flex-col justify-start mx-auto w-full"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className="flex flex-col justify-center items-center relative text-center">
          <motion.h3
            variants={slideUp(0.75)}
            className="text-[#BFBFBF] lg:text-[40px] md:text-[28px] text-[24px] font-normal font-mono ml-[2px] md:pb-5 min-w-[365px]
          "
          >
            Hi, my name is
          </motion.h3>
          <motion.h1
            variants={slideUp(1)}
            className="text-[#F5F5F5] font-poppins lg:leading-[80px] md:leading-[64.4px] leading-[68px] font-bold lg:text-[120px] md:text-[90px] text-[70px] min-w-[365px]"
          >
            Nick Shum
          </motion.h1>
          <motion.h2
            variants={slideUp(1.25)}
            className="text-[#BFBFBF] font-poppins lg:leading-[70px] md:leading-[55px] md:pt-5 lg:text-[70px] md:text-[38px] text-[30px] min-w-[365px]"
          >
            I'm a Software Developer
          </motion.h2>
  
            <motion.h3 variants={slideUp(2)}
            className="text-[#BFBFBF] font-poppins lg:pt-5  lg:text-[30px] md:text-[22px] text-[18px] max-w-[50%] pb-4 min-w-[365px] ">
              First year CE student @ University of Waterloo  and Quality
              Assurance Analyst @ EllisDon
            </motion.h3>
          <div className="flex flex-row justify-center items-center" >

            {/* <motion.a variants={slideUp(2.25)} href="https://github.com/NickShum222" target="_blank" className="text-[#BFBFBF] duration-100 hover:text-blue-800 hover:-translate-y-1">
              <BsGithub size={"2em"} />
            </motion.a>
            <motion.a variants={slideUp(2.5)}href="https://www.linkedin.com/in/nick-shum/"target="_blank" className="text-[#BFBFBF] duration-100 hover:text-blue-800 hover:-translate-y-1">
              <BsLinkedin size={"2em"} />
            </motion.a>
            <motion.a variants={slideUp(2.75)} href="https://www.instagram.com/nick.shum_/" target="_blank" className="text-[#BFBFBF] duration-100 hover:text-blue-800 hover:-translate-y-1">
              <BsInstagram size={"2em"} />
            </motion.a>
            <motion.a variants={slideUp(3)}href="" target="_blank" className="text-[#BFBFBF] duration-100 hover:text-blue-800 hover:-translate-y-1" >
              <BsSpotify size={"2em"} />
            </motion.a> */}

            {/* {socialLinks.map((url, index) => { 
              const Icon = icons[index];
              return (
                <a  href={url} target="_blank" className="text-[#F5F5F5] duration-100 hover:text-blue-800 hover:-translate-y-1">
                  <Icon size={"1.5em"} />
              </a>
            )})} */}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
