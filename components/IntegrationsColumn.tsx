"use client";

import clsx from "clsx";
import Image from "next/image";
import React, { Fragment } from "react";
import { motion } from "motion/react";
import { IntegrationsType } from "@/app/sections/Integrations";

const IntegrationsColumn = (props: {
  integrations: IntegrationsType;
  className?: string;
  reverse?: boolean;
}) => {
  const { integrations, className, reverse } = props;
  return (
    <motion.div
      initial={{ y: reverse ? "-50%" : 0 }}
      animate={{ y: reverse ? 0 : "-50%" }}
      transition={{
        duration: 15,
        repeat: Infinity,
        ease: "linear",
      }}
      className={clsx("flex flex-col gap-4 pb-4", className)}
    >
      {Array.from({ length: 2 }).map((_, i) => (
        <Fragment key={i}>
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="bg-neutral-300/30 rounded-3xl p-6"
            >
              <div className="flex justify-center">
                <Image
                  src={integration.icon}
                  alt={integration.name}
                  className="size-18"
                />
              </div>
              <h3 className="text-3xl text-center mt-6 ">{integration.name}</h3>
              <p className="text-center  mt-2">{integration.description}</p>
            </div>
          ))}
        </Fragment>
      ))}
    </motion.div>
  );
};

export default IntegrationsColumn;
