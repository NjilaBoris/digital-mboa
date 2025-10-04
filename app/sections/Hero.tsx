"use client";
import Button from "@/components/Button";

import designExample1Image from "@/public/ex1.avif";
import designExample2Image from "@/public/60002.jpg";

import { motion } from "motion/react";

import Image from "next/image";
import Pointer from "@/components/Pointer";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="py-24 overflow-x-clip">
      <div className="container relative">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="absolute left-10 top-4 hidden lg:block"
        >
          <Image
            src={designExample1Image}
            alt="design Example1"
            height={200}
            width={200}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="absolute right-20 top-60 hidden lg:block"
        >
          <Image
            src={designExample2Image}
            alt="design Example2"
            height={200}
            width={200}
          />
        </motion.div>
        <motion.div
          animate={{
            x: ["0%", "-200%", "400%", "600%", "0%"],
            y: ["0%", "-800%", "-400%", "-300%", "0%"],
          }}
          transition={{
            duration: 12,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute left-56 top-96 hidden lg:block"
        >
          <Pointer
            name="Mboa"
            className="text-[#063642] border-[#063642] border"
          />
        </motion.div>
        <motion.div
          animate={{
            x: ["0%", "-200%", "400%", "600%", "0%"],
            y: ["0%", "700%", "800%", "500%", "0%"],
          }}
          transition={{
            duration: 8,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="absolute right-80 -top-4 hidden lg:block"
        >
          <Pointer name="Digital" color="orange" className="text-orange-400" />
        </motion.div>

        <h1 className="text-6xl px-5 md:p-0 lg:text-[4.4rem] font-space-grotesk lg:leading-[59px] lg:max-w-2xl lg:mx-auto md:text-7xl font-medium text-center mt-6">
          Osez franchir de nouveaux horizons numériques avec Digital Mboa.
        </h1>

        <div className="flex border items-cente gap-4 justify-center border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
          <Link href="/nos-services" className="cursor-pointer">
            <Button
              type="submit"
              variant="primary"
              // size="sm"
              className="whitespace-nowrap !h-10 text-white cursor-pointer"
            >
              Nos Services
            </Button>
          </Link>
          <Link href="/realisations" className="cursor-pointer">
            <Button
              type="submit"
              variant="secondary"
              // size="sm"
              className="whitespace-nowrap hover:bg-orange-300 hover:text-white transition-all duration-200 !h-10 text-orange-400 cursor-pointer"
            >
              Nos Réalisations
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
