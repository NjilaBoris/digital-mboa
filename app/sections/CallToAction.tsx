"use client";
import { AnimationPlaybackControls, motion, useAnimate } from "motion/react";
import { useEffect, useRef, useState } from "react";

export default function CallToAction() {
  const [isHovered, setIsHovered] = useState<boolean>();
  const animation = useRef<AnimationPlaybackControls>(null);
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animation.current = animate(
      scope.current,
      { x: "-50%" },
      { duration: 30, ease: "linear", repeat: Infinity }
    );
  }, [animate, scope]);
  useEffect(() => {
    if (animation.current) {
      if (isHovered) {
        animation.current.speed = 0.5;
      } else {
        animation.current.speed = 1;
      }
    }
  }, [isHovered]);
  return (
    <section className="py-24">
      <div className="overflow-x-clip p-4 flex ">
        <motion.div
          ref={scope}
          className="flex group flex-none gap-16 pr-16 text-7xl md:text-8xl font-medium cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {Array.from({ length: 10 }).map((_, i) => (
            <div key={i} className="flex items-center gap-16">
              <span className="text-orange-400 text-7xl">&#10038;</span>
              <span className="text-orange-400">Digital</span>
              <span className="text-[#063642]">Mboa</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
