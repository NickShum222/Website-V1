'use client';
import { motion } from 'framer-motion';
import { staggerContainer, slideIn} from '@/utils/motion';
import { useState } from 'react';
import { ProjectCard } from '@/components';
import { projectCards } from '@/constants';

const Projects = () => {
  const [projects, setProjects] = useState("space");
  return (
    <section id='projects' className='sm:px-16 px-10 py-16 min-h-[100vh]'>
      <div className='flex flex-col w-full mx-auto'>
        <h1 className='text-[#BFBFBF] font-semibold font-poppins lg:text-[45px] md:text-[40px] text-[35px]'>Projects</h1>
        <div className='md:flex-row flex flex-col-reverse justify-between items-center'>
          <div className='flex flex-col gap-5'>
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
      </div>
    </section>
  )
}

export default Projects