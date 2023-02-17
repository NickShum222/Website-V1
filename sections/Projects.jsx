"use client";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";
import { useState } from "react";
import { ProjectCard } from "@/components";
import { projectCards } from "@/constants";
import { styles } from "@/styles";

const Projects = () => {
  const [projects, setProjects] = useState("space");
  return (
    <section id="projects" className={styles.paddings}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="flex lg:flex-row flex-col justify-between items-center "
      >
        <h1 className={`${styles.heading_2} pb-0 md:pb-4`}>Projects</h1>

        <div className="flex flex-col gap-5 max-w-[60%] min-w-[500px]">
          {projectCards.map((project, index) => (
            <ProjectCard
              key={project.id}
              {...project}
              index={index}
              active={projects}
              setActive={setProjects}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Projects;
