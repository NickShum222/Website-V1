"use client";
import { motion } from "framer-motion";
import { staggerContainer, slideLeft } from "@/utils/motion";
import { useState } from "react";
import { ProjectCard } from "@/components";
import { projectCards } from "@/constants";
import { styles } from "@/styles";

const Projects = () => {
  const [projects, setProjects] = useState("space");
  return (
    <section id="projects" className={`${styles.paddings} snap-start `}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.6 }}
        className="flex lg:flex-row-reverse flex-col lg:justify-between justify center items-center "
      >
        <motion.h1 
          variants={slideLeft(0)}
        className={`${styles.heading_2} pb-0 md:pb-4`}>Projects</motion.h1>

        <motion.div className="flex flex-col gap-5 lg:max-w-[50%] w-full">
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
      </motion.div>
    </section>
  );
};

export default Projects;
