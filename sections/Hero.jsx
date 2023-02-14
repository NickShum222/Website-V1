'use client';
import { motion } from 'framer-motion';
import { staggerContainer, slideUp} from '@/utils/motion';

const Hero = () => {
  return (
    <section id='home' className='sm:pb-16 pb-12 md:px-36 px-16 min-h-[100vh] flex flex-col justify-center items-center'>
      <motion.div className='flex flex-col mx-auto w-full'
      variants={staggerContainer}
      initial='hidden'
      whileInView='visible'
      viewport={{once: true, amount: 0.25 }}>
        <div className='flex flex-col justify-start relative'>
          <motion.h3 variants={slideUp(0.75)}
          className='text-[#BFBFBF] lg:text-[20px] md:text-[18px] text-[15px]font-normal font-mono ml-[2px] pb-6
          '>Hi, my name is</motion.h3>
          <motion.h1 variants={slideUp(1)}
          className='text-[#F5F5F5] lg:leading-[80px] leading-[64.4px] font-semibold lg:text-[80px] md:text-[70px] text-[60px]'>Nick Shum</motion.h1>
          <motion.h2 variants={slideUp(1.25)}
          className="text-[#BFBFBF] lg:leading-[70px] md:leading-[55px] leading-[40.4px] lg:text-[45px] md:text-[40px] text-[30px] ">Software Developer</motion.h2>
        </div>
      </motion.div>
      
    </section>
  )
}

export default Hero