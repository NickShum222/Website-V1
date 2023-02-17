"use client";
import { motion } from "framer-motion";
import { staggerContainer, slideLeft } from "@/utils/motion";

const ExperienceCard = ({
  id,
  title,
  description,
  date,
  img,
  index,
}) => {
  return (
    <motion.div 
    variants={slideLeft((index * 0.25)+0.25)}
    className="relative w-full flex flex-1">
      <div className="flex flex-col w-[425px]  shadow-2xl relative rounded-lg pr-8 py-4">
        <p className="text-[#737882] italic lg:text-[18px] text-right">
          {date}
        </p>
        <h3 className="text-white lg:text-[20px] font-[700] font-poppins leading-[38px] text-right">
          {description}
        </h3>
        <p className="text-white lg:text-[20px] font-poppins text-right">
          {title}
        </p>

        {/* <div className='absolute rounded-full '>
        <img src={img} alt={title} className=" object-cover h-[40px] rounded-full" />
      </div>
      <div>
        
      </div>
      <div className='flex flex-col justify-start item-start pr-5'>
          <p className='text-[#BFBFBF] italic lg:text-[24px] pt-4'>{date}</p>
          <h3 className='text-white lg:text-[30px] font-mono'>{title}</h3>
          <p>{description}</p>
      </div> */}
      </div>
      <div className="absolute z-20 left-[-50px] top-[12px]">
        <img
          src={img}
          alt={title}
          className="object-cover h-[100px] rounded-full"
        />
      </div>
    </motion.div>
  );
};

export default ExperienceCard;
