'use client';
import {motion} from 'framer-motion';
import {slideIn} from '../utils/motion';
import { FiGithub} from 'react-icons/fi';
import { BsGlobe } from 'react-icons/bs';

const ProjectCard = ({id, title, description, tools, git, url, index, active, setActive}) => {
  return (
    <motion.div
    variants={slideIn(index * 0.25)}
    onClick={() => setActive(id)}
    className= {`${active === id ? 'flex-[4]':'flex-[2]'} flex flex-col justify-center items-center bg-[#1E1E1E] rounded-lg cursor-pointer min-w-[40%] h-[200px]`}
    >
      {active === id ? (
        <div className='min-w-[1000px] flex flex-row justify-between items-center'>
          <h3 className='text-[30px] text-white font-mono font-normal py-6 px-9'>{title}</h3>
          <div className='flex flex-row justify-end items-center gap-3'>
            <a href={git} target="_blank">
              <FiGithub className='text-[#F5F5F5]'/>
            </a>
            <a href={url} target="_blank">
              <BsGlobe className='text-[#F5F5F5] '/>
            </a>
          </div>
        </div>
      ): (
        <div></div>
      )}
    </motion.div>
  )
}

export default ProjectCard