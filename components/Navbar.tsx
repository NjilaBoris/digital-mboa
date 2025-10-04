"use client";
import React from "react";
import { useState } from "react";
import logoImage from "@/public/dm.png";
import { Menu, Phone, X } from "lucide-react";

import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface NavLinkProps {
  label: string;
  href: string;
}
const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "Nos Services", href: "/nos-services" },
  { label: "Réalisation", href: "/realisations" },
  { label: "A propos", href: "/a-propos" },
  { label: "Contactez-Nous", href: "/contactez-nous" },
];
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const pathName = usePathname();
  return (
    <>
      <section className="py-4 md:py-8 w-full fixed top-0 z-50 font-space-grotesk">
        <div className="mx-auto container max-w-5xl">
          <div className="border-neutral-400/40 border rounded-[27px] md:rounded-full  backdrop-blur">
            <div className="grid grid-cols-2 lg:grid-cols-3   items-center px-4 md:pr-2  p-2">
              <div>
                <Image
                  src={logoImage}
                  alt="layer-logo"
                  width={50}
                  height={50}
                  className="h-9 w-auto md:h-auto rounded-full"
                />
              </div>
              <div className="lg:flex hidden items-center justify-center">
                <nav className="flex gap-6 font-medium shrink-0">
                  {navLinks.map((link: NavLinkProps) => (
                    <Link
                      href={link.href}
                      key={link.label}
                      className={
                        pathName === link.href
                          ? "text-orange-400"
                          : "text-neutral-600"
                      }
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
              <div className="flex justify-end gap-4">
                <div onClick={() => setIsOpen((open) => !open)}>
                  {isOpen ? (
                    <X className="md:hidden" />
                  ) : (
                    <Menu className="md:hidden" />
                  )}
                </div>

                <div className="hidden md:flex items-center gap-2 rounded-full  p-2 px-3 bg-neutral-400/10">
                  <div className="bg-orange-400 p-2 rounded-full">
                    <Phone className="size-5 text-white" />
                  </div>
                  <p>+237 6 94 61 62 93</p>
                </div>
              </div>
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className=" overflow-hidden "
                >
                  <div className="flex flex-col items-center gap-4 py-4">
                    {navLinks.map((link) => (
                      <Link
                        href={link.href}
                        key={link.label}
                        className={
                          pathName === link.href
                            ? "text-orange-400"
                            : "text-neutral-600"
                        }
                      >
                        {link.label}
                      </Link>
                    ))}
                    <div className="hidden md:flex items-center gap-2 rounded-full  p-2 px-3 bg-neutral-400/10">
                      <div className="bg-orange-400 p-2 rounded-full">
                        <Phone className="size-5 text-white" />
                      </div>
                      <p>+33 1 23 45 67 89</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
      <div className="pb-[25px] md:pb-[60px] lg:pb-[55px]" />
    </>
  );
};

export default Navbar;
