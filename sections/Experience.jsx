"use client";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { styles } from "@/styles";
import { experienceCards } from "@/constants";
import { ExperienceCard } from "@/components";
import { useState, useRef, useEffect } from "react";
import { Swipeable } from "react-swipeable";


const Experience = () => {
  const [position, setPosition] = useState(0);
  return (


    <section className={styles.paddings} id="experiences">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
        className="flex flex-col sm:px-36"
      >
        <div className="flex flex-col justify-center items-center">
        <h1 className={`${styles.heading_2}`}>Experience</h1>
        </div>
        <motion.div  className="w-[100vw] h-[100vh] overflow-hidden p-0 m-0 flex justify-center items-center">
          <motion.div className="relative">
            {experienceCards.map((experience, index) => (
              <motion.div key={experience.id} className="absolute w-[100%] h-[100%] overflow-hidden"
              initial={{scale: 0, rotation: -180}}
              animate={{rotate: 0, scale: 1,
                left: `${(index - position)* 60 -30}vw`,
                scale: index === position ? 1 : 0.8,
              }}
              transition={{type: "spring", stiffness: 260, damping: 20,}}>
                <ExperienceCard {...experience} key={index} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Experience;
