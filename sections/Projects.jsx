'use client';
import { motion } from 'framer-motion';
import { staggerContainer} from '@/utils/motion';
import { useState } from 'react';
import { ProjectCard } from '@/components';
import { projectCards } from '@/constants';
import { styles } from '@/styles';

const Projects = () => {
  const [projects, setProjects] = useState("space");
  return (
    <section id='projects' className='sm:px-36 px-24 py-16 '>
      <motion.div variants={staggerContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{once: false, amount: 0.25 }}
      className='flex flex-col w-full mx-auto'>
        <h1 className={styles.heading_2}>Projects</h1>
        <div className='lg:flex-row flex flex-col-reverse justify-between items-start'>
          <div className='w-full flex flex-col gap-5'>
            {projectCards.map((project, index) => (
              <ProjectCard key={project.id}{...project}
              index={index}
              active={projects}
              setActive={setProjects}
              />
            ))}
          </div>
          <div>feature project</div>
        </div>
      </motion.div>
    </section>
  )
}

export default Projects