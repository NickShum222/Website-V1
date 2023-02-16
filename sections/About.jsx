"use client";
import { motion } from "framer-motion";
import { staggerContainer, slideRight } from "@/utils/motion";
import { styles } from "@/styles";
import { Nick } from "@/components";
import RenderIfVisible from "react-render-if-visible";
const ESTIMATED_ITEM_HEIGHT = 200;
const About = () => {
  return (
    <section className="sm:px-40 px-24 py-16" id="about">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="w-full flex md:flex-row flex-col justify-between items-center gap-20"
      >
        <motion.img
          variants={slideRight(0.25)}
          src="/profile.jpg"
          alt="profile"
          className="shadow-lg rounded-[30px] h-[100%] lg:max-h-[450px] object-contain  flex flex-1"
        />
        <div className="flex flex-col justify-start">
          <motion.h1 variants={slideRight()} className={styles.heading_2}>
            About
          </motion.h1>
          <motion.div
            variants={slideRight(0.5)}
            className="flex flex-col justify-start max-w-[100%]"
          >
            <p className={`${styles.paragraph}`}>
              Hi there! My name is Nick Shum and I’m a first year computer
              engineering student at the University of Waterloo.
            </p>
            <p className={`${styles.paragraph}`}>
              Currently, I’m a quality assurance analyst at EllisDon, testing
              software to ensure it meets desired levels of quality and
              functions as intended.
            </p>
            <p className={`${styles.paragraph}`}>
              I am very passionate about computer science and am always
              seeking opportunities to learn and grow which is why I constantly
              find myself learning new tools and technologies to hone my
              software development skills. When I’m not programming, I enjoy
              curating spotify playlists, going out with friends, or
              skateboarding when the weather is nice!
            </p>
            <div className="flex flex-row justify-end mt-[-10px]">
            <RenderIfVisible
                defaultHeight={ESTIMATED_ITEM_HEIGHT}
                stayRendered="true"
              >
                <Nick className="h-[80px]" />
              </RenderIfVisible>
            </div>
          </motion.div>
        </div>

        {/* <motion.h1 
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
          <div className="flex flex-col justify-center items-center">
            <motion.img
              variants={slideRight(0.5)}
              src="/profile.jpg"
              alt="profile"
              className="shadow-lg rounded-full h-[300px] w-[300px] flex flex-1"
            />
            <motion.div variants={slideRight(0.75)}>
              <RenderIfVisible
                defaultHeight={ESTIMATED_ITEM_HEIGHT}
                stayRendered="true"
              >
                <Nick className="h-[100px]" />
              </RenderIfVisible>
            </motion.div>
          </div>
        </div> */}
      </motion.div>
    </section>
  );
};

export default About;
