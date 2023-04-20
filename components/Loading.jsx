'use client';
import React from "react";
import { motion } from "framer-motion";
import { scale } from "@/utils/motion";
const Loading = () => {
  return (
    <motion.div variants={scale(2.2)}         initial="hidden"
    animate="visible" className="w-[100vw] h-[100vh] flex justify-center items-center flex-1 bg-grey">
      <svg
        id="loading"
        width="15%"
        height="15%"
        viewBox="0 0 218 245"
        preserveAspectRatio="xMidYMid meet"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="vector"
          d="M98.6605 242.19C84.1369 240.14 71.3248 232.708 62.2145 221.05C54.9577 211.763 50.6059 200.246 49.917 188.507C49.7654 185.922 49.7697 185.892 50.3843 185.256L51.0046 184.614L62.3351 184.681C72.6249 184.743 73.6359 184.623 74 185C74.2761 185.286 74.5621 186.388 74.7722 188.178C76.0576 199.135 82.0313 208.168 91.4026 213.326C96.0404 215.879 101.088 217.033 106.725 216.831C111.654 216.654 114.845 215.66 118.345 213.212C124.213 209.108 127.843 202.227 128.166 194.597C128.441 188.109 126.857 183.251 122.868 178.34C122.298 177.638 101.218 158.662 76.0223 136.17C26.6665 92.109 29.3373 94.3683 28.1212 95.6273L27.6354 96.1301V136.822C27.6354 166.124 27.562 177.682 27.3732 178.109C27.229 178.437 26.8521 178.827 26.5356 178.977C26.1403 179.163 22.5243 179.248 14.9801 179.248H4.00005L3.42042 178.648L2.84082 178.048V66.0383L3.42042 65.4383L4.00005 64.8382H33.9474L34.6286 65.3855C37.288 67.5217 136.918 156.635 138.937 158.684C143.172 162.98 146.112 167.203 148.536 172.472C151.678 179.299 153.013 185.467 153.021 193.189C153.026 197.79 152.789 200.179 151.928 204.183C147.494 224.808 131.747 239.734 111.708 242.308C108.997 242.656 101.481 242.588 98.6605 242.19Z"
          stroke="white"
          strokeWidth="4"
        />
        <path
          id="vector"
          d="M119.361 2.3432C133.885 4.39334 146.697 11.8248 155.807 23.483C163.064 32.7698 167.416 44.2867 168.104 56.0263C168.256 58.6113 168.252 58.6411 167.637 59.2775L167.017 59.9196L155.686 59.8517C145.397 59.7899 144.386 59.9101 144.021 59.5332C143.745 59.2472 143.459 58.1456 143.249 56.3551C141.964 45.398 135.99 36.3649 126.619 31.2068C121.981 28.6541 116.934 27.4998 111.296 27.702C106.367 27.8789 103.176 28.8727 99.6762 31.321C93.8084 35.4256 90.1782 42.3065 89.8552 49.9362C89.5805 56.4239 91.1641 61.2823 95.1537 66.1932C95.7237 66.8947 116.804 85.8713 141.999 108.364C191.355 152.424 188.684 150.165 189.9 148.906L190.386 148.403V107.712C190.386 78.4096 190.459 66.8515 190.648 66.4237C190.792 66.0961 191.169 65.7058 191.486 65.5566C191.881 65.3701 195.497 65.2852 203.041 65.2852H214.021L214.601 65.8852L215.181 66.4853V178.495L214.601 179.095L214.021 179.695H184.074L183.393 179.148C180.733 177.011 81.1039 87.8982 79.0849 85.8496C74.8495 81.5528 71.9095 77.3302 69.4853 72.0614C66.3439 65.2342 65.0086 59.0659 65.0001 51.3444C64.9951 46.7435 65.2328 44.3541 66.0937 40.3498C70.5277 19.7249 86.274 4.79953 106.313 2.22528C109.025 1.87699 116.541 1.94506 119.361 2.3432Z"
          stroke="white"
          strokeWidth="4"
        />
      </svg>
    </motion.div>
  );
};

export default Loading;
