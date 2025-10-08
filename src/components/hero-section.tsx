"use client";


import { motion } from "motion/react";
import { Phone, ArrowRight, Send } from "lucide-react";
import Link from "next/link";

export default function HeroSectionOne() {
  return (
    <div className="relative mx-auto my-10 flex max-w-7xl flex-col items-center justify-center">
      <div className="px-4 py-10 md:py-20">
        <h1 className="relative z-10 mx-auto max-w-4xl text-center text-2xl font-bold text-slate-700 md:text-4xl lg:text-7xl dark:text-slate-300">
          {"Let's bring your next idea to life."
            .split(" ")
            .map((word, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{
                  duration: 0.3,
                  delay: index * 0.1,
                  ease: "easeInOut",
                }}
                className="mr-3 inline-block"
              >
                {word}
              </motion.span>
            ))}
        </h1>
        <motion.p
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 0.8,
          }}
          className="relative z-10 mx-auto max-w-xl py-4 text-center text-lg font-normal text-neutral-600 dark:text-neutral-400"
        >
          At Northlight Creative Studios, we help entrereneurs, brands, and
          creators find their voice, craft their vision, and shine like the
          North Star that guides them.
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          transition={{
            duration: 0.3,
            delay: 1,
          }}
          className="relative z-10 mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
            <Link href="/projects">
              <button className="w-60 flex items-center justify-center gap-2 transform rounded-lg bg-[#7e57c2] px-6 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-purple-700">
                <span>See Our Work</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </Link>

            <Link href="/contact">
              <button className="w-60 flex items-center justify-center gap-2 transform rounded-lg bg-[#2196f3] px-6 py-3 font-medium text-[#f5f5f5] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-600">
                <span>Start Your Project</span>
                <Send className="h-5 w-5" />{" "}
              </button>
            </Link>
          </div>
        </motion.div>
        {/* <motion.div
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.3,
            delay: 1.2,
          }}
          className="relative z-10 mt-20 rounded-3xl border border-neutral-200 bg-neutral-100 p-4 shadow-md dark:border-neutral-800 dark:bg-neutral-900"
        >
        </motion.div> */}
      </div>
    </div>
  );
}
