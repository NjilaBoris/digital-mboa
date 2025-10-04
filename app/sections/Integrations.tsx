import figmaIcon from "@/public/images/figma-logo.svg";
import AdobeIcon from "@/public/adobe-premiere-svgrepo-com.svg";
import photoshopIcon from "@/public/photoshop-svgrepo-com.svg";
import msExcelIcon from "@/public/ms-excel-svgrepo-com.svg";
import framerIcon from "@/public/images/framer-logo.svg";
import githubIcon from "@/public/images/github-logo.svg";

import IntegrationsColumn from "@/components/IntegrationsColumn";

const integrations = [
  {
    name: "Figma",
    icon: figmaIcon,
    description: "Figma est un outil de conception d'interface collaborative.",
  },
  {
    name: "Adobe Premiere Pro",
    icon: AdobeIcon,
    description:
      "Adobe Premiere Pro est un logiciel de montage vidéo professionnel.",
  },
  {
    name: "Photoshop",
    icon: photoshopIcon,
    description: "Photoshop est un logiciel de retouche photo.",
  },
  {
    name: "Ms Excel",
    icon: msExcelIcon,
    description: "Ms Excel est un tableur développé par Microsoft.",
  },
  {
    name: "Framer",
    icon: framerIcon,
    description:
      "Framer est un outil de prototypage de sites Web professionnel.",
  },
  {
    name: "GitHub",
    icon: githubIcon,
    description:
      "GitHub est la principale plateforme de collaboration sur le code.",
  },
];
export type IntegrationsType = typeof integrations;

export default function Integrations() {
  return (
    <section className="py-24 px-5 overflow-clip">
      <div className="container">
        <div className="grid lg:grid-cols-2 items-center lg:gap-16">
          <div>
            <p className=" mt-4 text-[2rem] font-semibold text-neutral-600 text-center font-space-grotesk capitalize">
              l'innovation digitale au service de votre succès
            </p>
          </div>
          <div>
            <div
              className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-clip grid md:grid-cols-2 md:gap-4 [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_10%,rgba(0,0,0,1)_90%,rgba(0,0,0,0)_100%)]
            [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_10%,rgba(0,0,0,1)_90%,rgba(0,0,0,0)_100%)]
            [-webkit-mask-repeat:no-repeat] [mask-repeat:no-repeat]
            [-webkit-mask-size:100%_100%] [mask-size:100%_100%]"
            >
              <IntegrationsColumn integrations={integrations} />
              <IntegrationsColumn
                integrations={integrations.slice().reverse()}
                className="md:flex hidden lg:mt-8"
                reverse
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
