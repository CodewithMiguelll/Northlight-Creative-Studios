"use client";
import { useState } from "react";
import { Quicksand } from "next/font/google";
import { motion, AnimatePresence } from "framer-motion";

const quicksandBold = Quicksand({
  variable: "--font-quicksand-bold",
  subsets: ["latin"],
  weight: "700",
});

export default function ContactPage() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/mnngdevo", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-b from-[#faf8ff] via-[#f4f1fa] to-[#ebe6f7]">
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col gap-4 bg-white/80 backdrop-blur-md border border-[#eae7ff] p-8 rounded-2xl shadow-md w-full max-w-md"
      >
        <h1 className="text-3xl font-semibold text-[#121212] mb-2 text-center">
          Let’s Connect
        </h1>
        <p className="text-gray-600 mb-4 text-center">
          Got a project in mind? Tell us what you’re dreaming of — we’ll bring
          it to light.
        </p>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7e57c2] transition-all"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7e57c2] transition-all"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows={5}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#7e57c2] transition-all"
        />

        <motion.button
          type="submit"
          disabled={status === "loading"}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-[#7e57c2] text-white font-medium py-3 px-6 rounded-lg transition-all hover:bg-[#6b46b2] disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Send Message"}
        </motion.button>

        <AnimatePresence mode="wait">
          {status === "success" && (
            <motion.p
              key="success"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 text-green-600 text-center"
            >
              ✅ Thanks! Your message has been sent.
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              key="error"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-4 text-red-600 text-center"
            >
              ❌ Oops! Something went wrong. Please try again.
            </motion.p>
          )}
        </AnimatePresence>
      </motion.form>
    </div>
  );
}
