"use client";
import { motion } from "framer-motion";
export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-pink-50 to-white flex flex-col items-center justify-center text-center px-6">

      <motion.h1
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
  className="text-7xl md:text-8xl font-bold text-pink-600"
>
        Hi Butterfly 🦋
</motion.h1>

      <p className="mt-8 text-xl text-gray-700">
        I wanted to show you something.
      </p>

      <p className="mt-2 text-gray-500">
        A collection of small things.
      </p>

      <a
  href="#remembered"
  className="mt-12 bg-pink-500 hover:bg-pink-600 text-white px-10 py-5 rounded-full transition shadow-lg inline-block"
>
  Begin 🌷
</a>

    </section>
  );
} 