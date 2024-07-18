"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Box from "./Box"; 
import RedGhost from "@/public/red-ghost.png"; 

const SoundsFamiliar = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef<HTMLDivElement>(null); 
  const boxContainerRef = useRef<HTMLDivElement>(null); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isIntersecting && boxContainerRef.current) {
      boxContainerRef.current.scrollBy({
        top: 0,
        left: 500,
        behavior: "smooth",
      });
    }
  }, [isIntersecting]);

  return (
    <section className="overflow-x-hidden mt-16 md:mt-48 mb-16 md:mb-32 p-4 px-6 md:px-20" ref={ref}>
      <div className="flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="inline-block text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 1.9, type: "spring", bounce: "0.1" }}
          variants={{
            visible: { opacity: 1, scale: 1, y: 0, x: 0 },
            hidden: { opacity: 0, scale: 0, x: "-50%" },
          }}
        >
          <h1 className="text-4xl md:text-6xl font-bold px-4 mb-5">Does this sound familiar...</h1>
        </motion.div>
        <motion.div
          className="mt-8 md:mt-0"
          viewport={{ once: true }}
          transition={{ duration: 2.1, ease: "easeInOut", type: "spring", delay: 0.3 }}
          initial="hidden"
          whileInView="visible"
          variants={{
            visible: {
              opacity: 1,
              scale: 1,
              x: [0, -100, -300, -450, -450],
              y: [35, 20, 10, 0, -10],
              rotate: [-60, -45, -35, -35, -35, -35, -15],
            },
            hidden: { opacity: 0, scale: 0 },
          }}
        >
          <Image width={70} height={70} alt="" src={RedGhost} />
        </motion.div>
      </div>
      <div className="p-4 md:p-10 flex space-x-4 md:space-x-8 items-center overflow-x-auto no-scrollbar h-[250px] md:h-[350px]" ref={boxContainerRef}>
        <Box />
      </div>
    </section>
  );
};

export default SoundsFamiliar;
