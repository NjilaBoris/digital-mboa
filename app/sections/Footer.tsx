import Image from "next/image";
import logoImage from "@/public/dm.png";
import Link from "next/link";
import { Phone } from "lucide-react";
import { div } from "motion/react-client";

const footerLinks = [
  { label: "Contactez-Nous", href: "/contactez-nous" },
  { href: "#", label: "Facebook" },
  { href: "#", label: "Tic Tok" },
];

export default function Footer() {
  return (
    <section className="py-3 px-5">
      <div className="container">
        <div className="flex flex-col rounded-2xl bg-orange-400/10 font-semibold text-[#063642] md:flex-row md:justify-between items-center gap-6">
          <div>
            <Image src={logoImage} alt="Layers logo" width={60} height={60} />
          </div>
          <div>
            <nav className="flex gap-6 items-center font-space-grotesk">
              <>
                {footerLinks.map((link) => (
                  <Link href={link.href} key={link.label} className=" text-sm">
                    {link.label}
                  </Link>
                ))}
                <div className="hidden md:flex items-center gap-2 rounded-full  p-2 px-3 bg-neutral-400/10">
                  <div className="bg-orange-400 p-2 rounded-full">
                    <Phone className="size-5 text-white" />
                  </div>
                  <p>+237 6 94 61 62 93</p>
                </div>
              </>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
