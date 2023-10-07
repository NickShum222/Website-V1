"use client";
import { Button } from "@material-tailwind/react";
const page = () => {
  return (
    <>
        <div className="bg-grey h-[100vh] w-full flex flex-col justify-center items-center lg:py-[50px] py-[20px]">
      <a href="/">
        <Button
          className="rounded-none normal-case lg:py-3 lg:px-8 py-2 md:px-6 px-4  mb-5 text-[14px] md:text-[16px] lg:text-[18px]  text-highlight transition-all hover:bg-highlight/10 active:bg-highlight/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-highlight border-[1px]"
          data-ripple-light="true"
        >
          Back
        </Button>
      </a>
      <video controls autoPlay muted loop className="md:w-[80%] w-[95%] ">
        <source src="/SpotiTrackDemo.mp4" />
      </video>
    </div>
    </>
  );
};

export default page;
