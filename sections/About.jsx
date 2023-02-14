'use client';
import { motion } from 'framer-motion';
import { staggerContainer, slideRight} from '@/utils/motion';
import { styles } from '@/styles';
import { Nick } from '@/components';
const About = () => {
  return (
    <section className='sm:px-36 px-24 py-16'>
      <motion.div 
      variants={staggerContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{once: true, amount: 0.25 }}
      className='w-full flex flex-col justify-start min-h-[100vh]'>
        <motion.h1 
        variants={slideRight()}
        className={styles.heading_2}>About</motion.h1>
        <div className='flex md:flex-row flex-col justify-center items-start gap-10'>
          <motion.div 
          variants={slideRight(0.25)}
          className='flex flex-col justify-start md:max-w-[50%] max-w-[100%]'>
            <p className='text-white font-poppins'>Hi there! My name is Nick Shum and I’m a first year computer engineering student at the University of Waterloo.</p>
            <p className='text-white font-poppins'>Currently, I’m a quality assurance analyst at EllisDon, testing software to ensure it meets desired levels of quality and functions as intended.</p>
            <p className='text-white font-poppins'>
              I am deeply passionate about computer science and am always seeking opportunities to learn and grow which is why I constantly find myself learning new tools and technologies to hone my software development skills. When I’m not programming, I enjoy curating spotify playlists, going out with friends, or skateboarding when the weather is nice! 
            </p>
          </motion.div>
          <div className='flex flex-col justify-center items-center'>
            <motion.img variants={slideRight(0.5)}
            src='/profile.jpg' alt='profile' className='shadow-lg rounded-full h-[300px] w-[300px] flex flex-1' />
            <motion.div
            variants={slideRight(0.75)}
            >
            <Nick className="h-[100px]"/>
            </motion.div>

          </div>

        </div>
      </motion.div>
    </section>
  )
}

export default About