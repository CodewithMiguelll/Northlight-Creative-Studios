"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Pacifico } from "next/font/google";
import Header from "@/components/header";

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-[#fdfbff] via-[#f8f7fa] to-[#ede9f7] text-[#121212]">
      <main className="flex flex-1 flex-col items-center justify-center text-center px-4">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`${pacifico.className} text-4xl md:text-6xl font-bold text-[#7e57c2] mb-4`}
        >
          404 — Lost, but not forgotten
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg text-[#444] max-w-2xl mb-8 leading-relaxed"
        >
          Like The Shepherd who leaves the ninety-nine to find the one, we
          believe no idea should stay lost. Let’s guide you back to where you
          belong.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="flex gap-4 flex-wrap justify-center"
        >
          <Link href="/">
            <button className="transition-all bg-purple-600 px-5 py-2.5 rounded-md font-medium text-white hover:-translate-y-1 hover:bg-[#7e57c2]">
              Return Home
            </button>
          </Link>
          <Link href="/contact">
            <button className="transition-all px-5 py-2.5 rounded-md font-medium text-[#2196f3] border-2 border-[#2196f3] md:hover:bg-[#2196f3] md:hover:text-white md:hover:-translate-y-1">
              Reach Out
            </button>
          </Link>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="text-center py-4 text-sm text-[#666]">
        © {new Date().getFullYear()} NorthLight Creative Studios — Guiding Ideas
        Home
      </footer>
    </div>
  );
}
