"use client";
import Head from 'next/head';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Test = () => {
  const [showTextAnimation, setShowTextAnimation] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowTextAnimation(true);
    }, 1000); 

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className="mt-10 md:mt-20 flex flex-col gap-3 text-center p-4 md:p-8">
      <Head>
        <link
          rel="preload"
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap"
          as="style"
        />
        <style>{`
          body {
            font-family: 'Dancing Script', cursive;
          }
        `}</style>
      </Head>

      <p className="text-center text-lg md:text-2xl">We take Privacy seriously</p>
      <p className="font-bold text-xl md:text-3xl">Before you get started</p>
      <p className="text-sm md:text-xl font-normal">
        &quot;We Won't share your answers with anyone.
        <br /> (and won't tell you which friends said what about you).&quot;
      </p>
      <div className="flex flex-row gap-2 items-center justify-center">
        <p className="text-xs md:text-sm">Made with Love...</p>
        <AnimatePresence>
          {showTextAnimation && (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              style={{
                fontFamily: "'Cedarville Cursive', cursive",
                fontWeight: 400,
                fontStyle: "normal",
                fontSize: "1rem", 
              }}
            >
              Team Ahead
            </motion.span>
          )}
        </AnimatePresence>
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { y: "10%" },
          visible: {
            y: 0,
            transition: { ease: "easeInOut", duration: 1, delayChildren: 0.7 },
          },
        }}
        className="mt-4 md:mt-8"
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: { scale: 0.5, opacity: 0 },
            visible: {
              opacity: 1,
              scale: [0, 0.25, 0.5, 0.8, 1.01, 1],
              transition: { ease: "easeInOut", duration: 1 },
            },
          }}
          style={{
            width: "100%",
            overflow: "hidden",
          }}
        >
          <button className="rounded-3xl p-3 md:p-4 px-6 text-white bg-black text-sm md:text-lg">
            Start Test
          </button>
        </motion.div>
        <div className="text-xs md:text-sm mt-2">Take only 5 minutes</div>
      </motion.div>
    </section>
  );
};

export default Test;
