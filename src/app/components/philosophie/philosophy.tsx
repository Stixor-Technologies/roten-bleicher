import React, { useRef } from "react";
import PhilosophyLanding from "../../../../public/images/philosophie/philosophy-landing.png";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

const Philosophy = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  const fadedText = useRef<HTMLParagraphElement | null>(null);
  const fadedTextContainer = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    let text = new SplitText(fadedText.current, { type: "chars" });
    let chars = text.chars;

    gsap.from(chars, {
      stagger: 0.05,
      ease: "back-out",
      duration: 0.5,
      color: "#EAEAEA",
      scrollTrigger: {
        trigger: fadedTextContainer.current,
        start: "top 80%",
        end: "bottom 40%",
        scrub: 1,
        // pin: true,
      },
    });
  });

  return (
    <section className="container py-[9.23vw]">
      <div className="flex relative">
        <Image
          src={PhilosophyLanding}
          width={900}
          height={200}
          alt="philosophy-landing"
          className="w-full mb-[13.3vw]"
        />
      </div>

      <div ref={fadedTextContainer} className="xl:w-[83.3%] mx-auto">
        <h3 className="font-area-bold mb-6 md:text-xl">Philosophie</h3>

        <p
          ref={fadedText}
          className="text-[clamp(1rem,3.2vw,2.813rem)] text-black"
        >
          Nahe der Innenstadt, unweit des Kurparks, gute Einkaufs-möglich-keiten
          – der Lüneburger Stadtteil Rotes Feld gehört zu den attrak-tivsten
          Wohngegenden der 1000-jährigen Han-sestadt. Hier ent-steht in den
          nächsten Jahren ein Neubau mit 71 Wohnungen, des-sen moderne
          Architektur sich sen-sibel in die Umgebung einfügt. Auch, weil der
          Klinker seiner Fassade sorgsam ausgesucht ist und feinsinnig mit den
          zahl-reichen denkmalgeschützten Gründer-zeitbauten des Quar-tiers an
          der Ilmenau harmoniert.
        </p>
      </div>
    </section>
  );
};

export default Philosophy;
