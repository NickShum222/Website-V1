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
        className="flex flex-col items-start w-full justify-start "
      >
        <motion.div variants={slideRight(0)} className="flex xl:w-[45%] lg:w-[60%] w-[100%] gap-5 flex-row justify-start items-center">
          <h1
            className={`${styles.heading_2} transition-all duration-75 mb-3 md:mb-4`}
          >
            <span className="text-highlight">#</span>projects
          </h1>
          <div className="h-[1px] w-full border-[1px] border-highlight mb-3 md:mb-4"/>
        </motion.div>

        <motion.div className="grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-5 w-full">
          {projectCards.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
              active={projects}
              setActive={setProjects}
            />
          ))}
        </motion.div>
        {/* <motion.div className="overflow-x-hidden flex flex-row lg:max-w-[500px] w-[80%] lg:mt-0 mt-10 max-w-full">
          <div>
            
          </div>
          {projectPictures.map((project) => (
            <motion.img variants={slideLeft(0.5)} className={`${projects === project.id ? "" : "hidden"}`} src={project.img} alt={project.id} key={project.id} />
          ))}
        </motion.div> */}
      </motion.div>
    </section>
  );
};

export default Projects;
