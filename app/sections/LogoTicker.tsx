"use client";
import quantumLogo from "@/public/images/quantum.svg";
import acmeLogo from "@/public/images/acme-corp.svg";
import echoValleyLogo from "@/public/images/echo-valley.svg";
import pulseLogo from "@/public/images/pulse.svg";
import outsideLogo from "@/public/images/outside.svg";
import apexLogo from "@/public/images/apex.svg";
import celestialLogo from "@/public/images/celestial.svg";
import twiceLogo from "@/public/images/twice.svg";
import Image from "next/image";
import { motion } from "motion/react";
import React from "react";

const logos = [
  { name: "Quantum", image: quantumLogo },
  { name: "Acme Corp", image: acmeLogo },
  { name: "Echo Valley", image: echoValleyLogo },
  { name: "Pulse", image: pulseLogo },
  { name: "Outside", image: outsideLogo },
  { name: "Apex", image: apexLogo },
  { name: "Celestial", image: celestialLogo },
  { name: "Twice", image: twiceLogo },
];

export default function LogoTicker() {
  return (
    <section className="py-10 overflow-x-clip">
      <div className="container">
        <h1 className=" capitalize text-center text-xl font-space-grotesk">
          nos partenaires
        </h1>
        <div
          className="overflow-hidden  flex mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] 
  [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] 
  [mask-repeat:no-repeat] [-webkit-mask-repeat:no-repeat]"
        >
          <motion.div
            animate={{ x: "-50%" }}
            transition={{ duration: 30, ease: "linear", repeat: Infinity }}
            className="flex flex-none gap-20 pr-24 bg-orange-400 py-2"
          >
            {Array.from({ length: 2 }).map((_, i) => (
              <React.Fragment key={i}>
                {logos.map((logo) => (
                  <Image
                    src={logo.image}
                    alt={logo.name}
                    key={logo.name}
                    height={200}
                    width={200}
                  />
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
