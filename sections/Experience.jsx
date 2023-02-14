'use client';
import { motion } from 'framer-motion';
import { staggerContainer} from '@/utils/motion';
import { styles } from '@/styles';
import { experienceCards } from '@/constants';
import { ExperienceCard } from '@/components';

const Experience = () => {
  return (
    <section className='lg:px-36 px-24 py-16 min-h-[100vh]'>
      <motion.div 
      variants={staggerContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{once: false, amount: 0.25 }}
      className='flex flex-col w-full mx-auto'>
        <h1 className={styles.heading_2}>Experience</h1>
        <div className='flex flex-row items-center gap-5 '>
          {experienceCards.map((experience, index) => (
            <ExperienceCard key={experience.id}{...experience}
            index={index}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Experience