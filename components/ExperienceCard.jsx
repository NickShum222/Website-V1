"use client";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils/motion";

const ExperienceCard = ({ id, title, description, date, img, index }) => {
  return (
    <div>
      <div className="flex flex-col bg-secondary rounded-lg">
        
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
    </div>
  );
};

export default ExperienceCard;
