"use client";
import { motion } from "framer-motion";
import React from "react";
import Image from "next/image";

const Work = () => {
  return (
    <div className="px-4 md:px-8 my-12 md:my-32">
      <section className="mt-12 md:mt-16 rounded-2xl bg-violet-100 p-6 md:p-12">
        <div className="flex flex-col md:flex-row justify-between items-center text-4xl md:text-5xl font-bold">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1, x: 0, y: 0 },
              hidden: { opacity: 0, scale: 0.5, x: "-50%" },
            }}
          >
            <span className="">Work with us</span>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            variants={{
              visible: { opacity: 1, scale: 1, x: 0, y: 0 },
              hidden: { opacity: 0, scale: 0.5, x: "50%" },
            }}
          >
            <span className="text-violet-800">ahead</span>
          </motion.div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row gap-8 overflow-hidden">
          <div className="max-w-full md:max-w-[30rem]">
            <div className="rounded-2xl bg-white pt-6 md:pt-8 shadow-lg">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                variants={{
                  visible: { opacity: 1, scale: 1, rotate: 0 },
                  hidden: { opacity: 0, scale: 0.5, rotate: -45 },
                }}
                className="pl-4 inline-block"
              >
                <Image width={60} height={60} alt="" src="/ghost.png" />
              </motion.div>
              <div className="flex flex-col gap-3 p-4 md:p-6">
                <h2 className="text-lg md:text-xl font-bold">About</h2>
                <p className="text-sm md:text-base font-normal">
                  At ahead, our goal is to make self-improvement fun and lasting. We know there&apos;s a way to make it work. That&apos;s what ahead is all about!
                </p>
              </div>

              <div className="flex flex-col gap-2 pt-4 md:pt-8 p-4 md:p-6 rounded-2xl bg-orange-50">
                <h2 className="text-lg md:text-xl font-bold">Product</h2>
                <p className="text-sm md:text-base font-normal">
                  Sure, you could spend ages reading books or sitting in seminars on how to become a better spouse, parent, or manager - like we did.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:max-h-[75vh] md:overflow-y-auto pr-4 md:pr-6 custom-scrollbar">
            <div className="p-4 bg-white rounded-2xl space-y-3 md:space-y-6">
              <h2 className="text-lg md:text-xl font-bold">
                Power through, even when the going gets tough.
              </h2>
              <p className="text-sm md:text-base font-normal">
                We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.
              </p>
            </div>
            <div className="p-4 bg-white rounded-2xl space-y-3 md:space-y-6">
              <h2 className="text-lg md:text-xl font-bold">
                Learn more about who you are and where you want to go.
              </h2>
              <p className="text-sm md:text-base font-normal">
                We ask the right questions to help you better understand why you do things the way you do.
              </p>
            </div>
            <div className="p-4 bg-white rounded-2xl space-y-3 md:space-y-6">
              <h2 className="text-lg md:text-xl font-bold">
                Play and grow together with others on the same journey.
              </h2>
              <p className="text-sm md:text-base font-normal">
                Ahead feels like a game, not like a chore. See yourself grow every day towards achieving your goals!
              </p>
            </div>
            <div className="p-4 bg-white rounded-2xl space-y-3 md:space-y-6">
              <h2 className="text-lg md:text-xl font-bold">
                Master how to make it happen in real life.
              </h2>
              <p className="text-sm md:text-base font-normal">
                We support you towards ninja-level skills with sleek tools such as dry runs quizzes and flashcards.
              </p>
            </div>
            <div className="p-4 bg-white rounded-2xl space-y-3 md:space-y-6">
              <h2 className="text-lg md:text-xl font-bold">
                Learn about practical skills that you can actually use in real life.
              </h2>
              <p className="text-sm md:text-base font-normal">
                We teach you smart psychological techniques and habit-forming strategies that are easy to apply.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;
