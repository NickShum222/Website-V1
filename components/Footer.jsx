'use client';
import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '@/styles';

const Footer = () => {
  return (
    <section className={`xl:px-[170px] lg:px-[110px] md:px-36 px-6`}>
      <div className='w-full border-t-[1px] py-4 border-[#BFBFBF] flex flex-col justify-center items-center'>
      {/* <div className='flex flex-col justify-start items-start'>
        <h1 className='text-[#BFBFBF] font-poppins font-normal text-[20px]'>Nick Shum</h1>
        <p>nickshum222@gmail.com</p>
      </div>
      <div className='flex flex-row justify-around items-center'>
      
      </div> */}
      <a href="https://github.com/NickShum222/Website-Portfolio" target="_blank" rel="noreferrer" className='font-mono hover:text-highlight transition-all duration-150 text-[12px] sm:text-[14px] text-[#9c9c9c]'>Designed & Built by Nick Shum</a>
      <p className='font-mono text-[12px] sm:text-[14px] transition-all text-[#9c9c9c]'>
      © Copyright 2023.
      </p>
      </div>
    </section>
  )
}

export default Footer