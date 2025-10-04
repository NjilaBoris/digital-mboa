"use client";

import clsx from "clsx";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

const faqs = [
  {
    question: "Comment puis-je démarrer un projet avec vous ?",
    answer:
      "C’est simple ! Cliquez sur le bouton « Commencer maintenant », remplissez le formulaire de contact ou envoyez-nous un message via WhatsApp. Un membre de notre équipe vous contactera rapidement pour discuter de votre projet.",
  },
  {
    question: "Pourquoi choisir Mboa Digital ?",
    answer:
      "Parce que nous allions créativité, expertise et vision locale. Nous comprenons les réalités du marché africain et proposons des solutions sur mesure, adaptées à vos besoins et à votre budget.",
  },
  {
    question: "How do you handle version control?",
    answer:
      "Every change in Layers is automatically saved and versioned. You can review history, restore previous versions, and create named versions for important milestones.",
  },
  {
    question: "À qui s’adressent vos services ?",
    answer:
      "Nos services s’adressent aux entrepreneurs, PME, startups, associations et grandes entreprises africaines souhaitant renforcer leur présence en ligne et optimiser leur performance digitale.",
  },
  {
    question: "Qu’est-ce que Mboa Digital ?",
    answer:
      "Mboa Digital est une agence spécialisée dans la transformation digitale des entreprises africaines. Nous proposons des solutions innovantes et adaptées aux besoins spécifiques de nos clients.",
  },
];

export default function Faqs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <section className="py-24 px-5">
      <div className="container">
        <h2 className="text-6xl font-medium mt-6 text-center max-w-xl mx-auto">
          Des questions ? Nous avons{" "}
          <span className="text-orange-400">réponses</span>
        </h2>
        <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
          {faqs.map((faq, faqindex) => (
            <div
              key={faq.question}
              className="bg-neutral-300/20 rounded-2xl border border-white/10 p-6"
              onClick={() => setSelectedIndex(faqindex)}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-medium">{faq.question}</h3>
                <Plus
                  className={clsx(
                    "text-orange-400 shrink-0 transition-transform duration-300",
                    selectedIndex === faqindex && "rotate-45"
                  )}
                />
              </div>
              <AnimatePresence initial={false}>
                {selectedIndex === faqindex && (
                  <motion.div
                    initial={{ height: 0, marginTop: 0, opacity: 0 }}
                    animate={{ height: "auto", marginTop: 24, opacity: 1 }}
                    exit={{ height: 0, marginTop: 0, opacity: 0 }}
                    className={clsx(" overflow-clip")}
                  >
                    <p className="">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
