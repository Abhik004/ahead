"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";
import { vacancies } from "./data"; // Importing vacancies from data.tsx

const OpenVacancies = () => {
  return (
    <section className="mt-20 py-8 px-24 h-96">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { x: "-30%", y: "50%", opacity: 0 },
          visible: {
            x: 0,
            y: 0,
            opacity: 1,
            transition: { ease: "easeInOut", duration: 1.5 },
          },
        }}
        style={{
          width: "100%", // Adjust the width as needed
          overflow: "hidden", // Hide overflowing text while sliding
        }}
      >
        <h1 className="text-5xl font-bold">Open Vacancies</h1>
      </motion.div>
      <div className="mt-12 grid grid-cols-3 gap-8">
        {vacancies.map((vacancy, index) => (
          <HoverCard key={index} vacancy={vacancy} />
        ))}
      </div>
    </section>
  );
};

interface VacancyProps {
  vacancy: {
    jobTitle: string;
    position: string;
    location: string;
    pay: string;
  };
}

const HoverCard: React.FC<VacancyProps> = ({ vacancy }) => {
  const [isButtonVisible, setButtonVisible] = useState(false);

  return (
    <motion.div
      initial={{ height: 170 }}
      whileHover={{ height: 250 }}
      onHoverStart={() => setButtonVisible(true)}
      onHoverEnd={() => setButtonVisible(false)}
      transition={{ ease: "easeInOut", duration: 0.3 }}
      className="bg-[#fefbec] rounded-xl hover:bg-[#fff0d6] hover:cursor-pointer relative"
    >
      <div className="rounded-xl p-6 px-12">
        <h2 className="text-1.5xl font-bold whitespace-nowrap overflow-hidden overflow-ellipsis">{vacancy.jobTitle}</h2>
        <ul className="mt-4 text-base font-semibold list-disc pl-4">
          <li>{vacancy.position}</li>
          <li>{vacancy.location}</li>
          <li>{vacancy.pay}</li>
        </ul>
        {isButtonVisible && (
          <motion.button
            initial="hidden"
            whileInView="visible"
            transition={{ ease: "easeInOut", duration: 0.5, delay: 0.1 }}
            variants={{
              visible: { opacity: 1, scale: 1 },
              hidden: { opacity: 0, scale: 0.7 },
            }}
            className="absolute left-12 bottom-8 cursor-pointer text-white bg-black rounded-full px-6 py-3 text-lg"
          >
            Submit Details
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default OpenVacancies;
