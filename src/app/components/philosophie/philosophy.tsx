import React, { useRef } from "react";
import PhilosophyLanding from "../../../../public/images/philosophie/philosophy-landing.jpg";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import useSectionInView from "@/utils/useSectionInView";

const Philosophy = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);

  const { ref } = useSectionInView("#unsere-philosophie");

  const fadedText = useRef<HTMLParagraphElement | null>(null);
  const fadedTextContainer = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    const text = new SplitText(fadedText.current, { type: "words" });
    gsap.from(text.words, {
      stagger: 0.9,
      ease: "back-out",
      duration: 0.2,
      color: "#EAEAEA",
      scrollTrigger: {
        trigger: fadedTextContainer.current,
        start: "top 70%",
        end: "bottom 50%",
        scrub: 1,
      },
    });
  });

  return (
    <section
      ref={ref}
      id="unsere-philosophie"
      className="container pb-20 md:pb-[8.3vw]"
    >
      <div className="flex relative">
        <Image
          src={PhilosophyLanding}
          width={900}
          height={200}
          alt="philosophy-landing"
          className="w-full mb-[8.5vw]"
        />
      </div>

      <div ref={fadedTextContainer} className="max-w-[85.25rem] mx-auto">
        <h3 className="font-area-bold mb-3 md:mb-[1.438rem] md:text-xl text-medium-purple">
          Philosophie
        </h3>

        <h4 className="text-[clamp(2rem,5vw,5rem)] xl:leading-[6rem]">
          Auf die entspannte <br /> Lüneburger Art.
        </h4>

        <p
          ref={fadedText}
          className="text-[clamp(1rem,3.2vw,2.813rem)] text-black 2xl:leading-[3.79rem mt-5 md:mt-[3.3vw]"
        >
          <span className="block">
            Nicht so aufgeregt wie im nah gelegenen Hamburg, aber dafür viel
            entspannter. Der Roten Bleicher lebt die zurückgelehnte Lüneburger
            Art mit jeder seiner 71 barrierearmen oder barrierefreien Wohnungen.
            Nah genug an der Innenstadt, um alle Möglichkeiten der 1000jährigen
            Hansestadt zu genießen und weit genug entfernt, um sich davon zu
            erholen.
          </span>

          <span className="block">
            Im Roten Bleicher darf das Leben ruhig etwas lässiger, unaufgeregter
            und gechillter sein. Weil genau das die schönste Grundlage ist, um
            es in allen Zügen zu genießen.
          </span>
        </p>
      </div>
    </section>
  );
};

export default Philosophy;
