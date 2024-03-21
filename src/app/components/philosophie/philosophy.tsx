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
    let text = new SplitText(fadedText.current, { type: "words" });
    gsap.from(text.words, {
      stagger: 0.9,
      ease: "back-out",
      duration: 0.2,
      color: "#EAEAEA",
      scrollTrigger: {
        trigger: fadedTextContainer.current,
        start: "top 80%",
        end: "bottom 40%",
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

      <div ref={fadedTextContainer} className="lg:w-[83.17%] mx-auto">
        <h3 className="font-area-bold mb-3 md:mb-[1.438rem] md:text-xl text-medium-purple">
          Philosophie
        </h3>

        <p
          ref={fadedText}
          className="text-[clamp(1rem,3.2vw,2.813rem)] text-black 2xl:leading-[4.209rem]"
        >
          Nicht so aufgeregt wie im nah gelegenen Hamburg, aber dafür viel
          entspannter. Der Roten-bleicher lebt die zurück-gelehnte Lüneburger
          Art mit jeder seiner 71 barrierearmen oder barrierefreien Wohnungen.
          Nah genug an der Innen-stadt, um alle Möglichkeiten der 1000jährigen
          Hansestadt zu genießen und weit genug entfernt, um sich davon zu
          erholen. Im Rotenbleicher darf das Leben ruhig etwas lässiger,
          unauf-geregter und gechillter sein. Weil genau das die schönste
          Grundlage ist, um es in allen Zügen zu genießen.
        </p>
      </div>
    </section>
  );
};

export default Philosophy;
