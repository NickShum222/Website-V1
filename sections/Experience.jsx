"use client";
import { motion } from "framer-motion";
import { staggerContainer, slideRight } from "@/utils/motion";
import { styles } from "@/styles";
import { experienceCards } from "@/constants";
import { ExperienceCard } from "@/components";
import { Button } from "@material-tailwind/react";

const Experience = () => {
  return (
    <section className={`${styles.paddings} snap-start`} id="experiences">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="w-full flex flex-col items-start justify-start"
      >
        <motion.div
          variants={slideRight(0)}
          className="flex w-[100%] gap-5 flex-row justify-start items-center"
        >
          <h1
            className={`${styles.heading_2} transition-all duration-75 mb-2 md:mb-4`}
          >
            <span className="text-highlight">#</span>experience
          </h1>
          <div className="h-[1px] w-full border-[1px] border-highlight mb-2 md:mb-4" />
        </motion.div>
        <div className="flex w-full flex-col justify-end items-end">
        <div className="flex flex-col justify-start items-start xl:w-[50%] w-full ">
            {experienceCards.map((experience, index) => (
              <ExperienceCard
                key={experience.id}
                {...experience}
                index={index}
              />
            ))}
            <div>
            <Button className="md:mt-5 mt-3 rounded-none normal-case py-3 px-8 text-[14px] md:text-[16px] lg:text-[18px]   text-highlight transition-all hover:bg-highlight/10 active:bg-highlight/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-highlight border-[1px]"  ><a href="">Resume</a></Button>
            </div>

        </div>
        </div>
        

        {/* <motion.div  className="">
          <motion.div className="relative">
            {experienceCards.map((experience, index) => (
              <motion.div  className="absolute w-[100%] h-[100%] overflow-hidden">
                <ExperienceCard key={experience.id} {...experience}  />
              </motion.div>
            ))}
          </motion.div>
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default Experience;
