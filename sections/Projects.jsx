"use client";
import { motion } from "framer-motion";
import { staggerContainer, slideLeft, slideRight } from "@/utils/motion";
import { useState } from "react";
import { ProjectCard } from "@/components";
import { projectCards, projectPictures } from "@/constants";
import { styles } from "@/styles";

const Projects = () => {

  
  const [projects, setProjects] = useState("website");
  return (
    <section id="projects" className={`${styles.paddings}`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="flex flex-col lg:justify-start lg:items-start justify-center items-center "
      >
        <motion.h1 
          variants={slideRight(0)}
        className={`${styles.heading_2} pb-0 md:pb-4`}>Projects</motion.h1>
        <div className="flex lg:flex-row flex-col lg:justify-between justify-center items-center lg:gap-0 gap-8">
        <motion.div className="flex flex-col gap-5 lg:max-w-[50%] w-full">
          {projectCards.map((project, index) => (
            <ProjectCard
              key={project.id} {...project}
              index={index}
              active={projects}
              setActive={setProjects}
            />
          ))}
        </motion.div>
        <motion.div className="overflow-x-hidden flex flex-row lg:max-w-[500px] w-[80%] lg:mt-0 mt-10 max-w-full">
          <div>
            
          </div>
          {/* {projectPictures.map((project) => (
            <motion.img variants={slideLeft(0.5)} className={`${projects === project.id ? "" : "hidden"}`} src={project.img} alt={project.id} key={project.id} />
          ))} */}
        </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
