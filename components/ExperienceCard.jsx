"use client";
import { motion } from "framer-motion";
import { staggerContainer, slideLeft, roll } from "@/utils/motion";

const ExperienceCard = ({
  id,
  title,
  position,
  description,
  date,
  img,
  index,
}) => {
  return (
    <motion.div
      variants={slideLeft(index * 0.2)}
      className={`w-full border-b-[1px] border-[#d9d9d9] flex flex-col justify-center items-center ${
        index === 0 ? "md:-mt-6 xl:pb-5 pb-3" : "xl:py-5 py-3"
      }  `}
    >
      <div className="w-full flex flex-row justify-between items-center md:pb-3 sm:pb-2 pb-1">
        <div className="flex flex-col justify-start items-start">
          <p className="transition-all duration-100 text-white lg:text-[30px] md:text-[26px] text-[23px] md:leading-[26px] leading-[24px] lg:leading-[30px]">
            {position}
          </p>
          <p className="transition-all duration-100 text-semiwhite lg:text-[20px] md:text-[18px] text-[18px] italic">
            {title}
          </p>
        </div>
        <div className="transition-all duration-100 text-[#BFBFBF] lg:text-[19px] md:text-[21px] text-[17px]">
          {date}
        </div>
      </div>
      <div className="transition-all duration-100 text-[#9c9c9c] lg:text-[17px] md:text-[15px] text-[14px]">
        {description}
      </div>
      {/* <div  className="flex flex-col md:w-[425px] w-[300px] shadow-2xl bg-primary  relative rounded-lg pr-8 py-4">
        <p className="text-[#BFBFBF]  italic lg:text-[18px] text-right">
          {date}
        </p>
        <h3 className="text-white md:text-[20px] font-semibold font-poppins md:leading-[38px] text-right">
          {description}
        </h3>
        <p className="text-white md:text-[20px] font-poppins text-right">
          {title}
        </p>

        <div className='absolute rounded-full '>
        <img src={img} alt={title} className=" object-cover h-[40px] rounded-full" />
      </div>
      <div>
        
      </div>
      <div className='flex flex-col justify-start item-start pr-5'>
          <p className='text-[#BFBFBF] italic lg:text-[24px] pt-4'>{date}</p>
          <h3 className='text-white lg:text-[30px] font-mono'>{title}</h3>
          <p>{description}</p>
      </div>
      </div>
      <div className="absolute z-20 md:left-[-50px] left-[-35px] top-[16px]  md:top-[12px]">
        <img
          src={img}
          alt={title}
          className="object-cover md:h-[100px] h-[70px] rounded-full"
        />
      </div> */}
    </motion.div>
  );
};

export default ExperienceCard;
