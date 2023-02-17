"use client";
import { motion } from "framer-motion";
import { staggerContainer, slideRight } from "@/utils/motion";
import { styles } from "@/styles";
import { experienceCards, projectCards } from "@/constants";
import { ExperienceCard } from "@/components";
import { Swipeable } from "react-swipeable";

const Experience = () => {
  return (
    <section className={styles.paddings} id="experiences">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        className="w-full flex lg:flex-row-reverse  flex-col-reverse lg:justify-between justify-center items-center"
      >
        
        <div className="flex flex-col justify-between items-center gap-7 ">
          {experienceCards.map((experience,index) => (
            <ExperienceCard key={experience.id} {...experience} 
            index={index}
            />
          ))}
        </div>
        <motion.h1 variants={slideRight(0)}
         className={`${styles.heading_2} pb-0 md:pb-4`}>Experience</motion.h1>

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
