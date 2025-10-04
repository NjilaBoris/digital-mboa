import { WhyChooseUs } from "@/constants";
import { Icon } from "lucide-react";

export default function Introduction() {
  return (
    <section className="py-5 lg:py-15">
      <div className="container">
        <h1 className="text-xl font-space-grotesk md:text-6xl capitalize lg:text-[2.5rem] text-center font-medium mt-10">
          pourquoi choisir <span className="text-orange-400">Digital</span>{" "}
          <span className="text-[#063642]">Mboa</span>?
        </h1>
        <div className=" rounded-lg p-10 mt-10 grid gap-8 md:grid-cols-3">
          {WhyChooseUs.map((item, index) => (
            <div
              key={index}
              className="flex p-6 text-center flex-col justify-center border border-neutral-300 rounded-2xl  gap-3.5 items-center"
            >
              <div className="bg-[#063642] w-fit  text-orange-400 p-5 rounded-full">
                {item.icon}
              </div>
              <div>
                <h3 className="font-light text-[1.2rem] font-space-grotesk">
                  {item.title}
                </h3>
                <p className="text-[0.8rem] font-extralight text-neutral-900/90 font-space-grotesk">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
