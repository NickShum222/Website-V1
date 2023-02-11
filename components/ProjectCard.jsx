'use client';
import {motion} from 'framer-motion';
import {slideIn} from '../utils/motion';

const ProjectCard = ({id, title, description, tools, git, url, index, active, setActive}) => {
  return (
    <motion.div
    variants={slideIn(index * 0.25)}
    onClick={() => setActive(id)}
    className= {`${active === id ? 'flex-[4]':'flex-[2]'} flex flex-col justify-center items-center bg-[#1E1E1E] rounded-md cursor-pointer min-w-[40%] h-[200px]`}
    >
      {active === id ? (
        <div className='flex flex-row justify-between items-center'>
          <h3>{title}</h3>
          <div></div>
        </div>
      ): (
        <div></div>
      )}
    </motion.div>
  )
}

export default ProjectCard