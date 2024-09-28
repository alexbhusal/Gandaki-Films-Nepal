"use client";

import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn } from "../utils/motion";
import { useRouter } from "next/router";

const ExploreCard = ({ id, imgUrl, url, about, title, index, active, handleClick }) => {
  const router = useRouter();

  return (
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className={`relative ${
        active === id ? "lg:flex-[3.5] flex-[10]" : "lg:flex-[0.5] flex-[2]"
      }  items-center justify-center min-w-[170px] h-[700px] transition-[flex] duration-[0.7s] ease-out flex cursor-pointer`}
      onClick={() => handleClick(id)}
    >
      <img
        src={imgUrl}
        alt="planet-04"
        className="absolute w-full h-full object-cover rounded-[24px]"
      />
      {active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg:origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 flex justify-start w-full flex-col bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <div
            className={`${styles.flexCenter} w-[100px] h-[50px] rounded-[24px] glassmorphism mb-[16px]`}
          >
            <p onClick={() => router.push(url)} className="text-white font-bold">Book Now</p>


          </div>
          <p className="font-normal text-[16px] leading-[20.16px] text-white uppercase">
            {about}
          </p>
          <h2 className="mt-[24px] font-semibold sm:text-[32px] text-[24px] text-white">
            {title}
          </h2>
        </div>
      )}
    </motion.div>
  );
};

export default ExploreCard;
