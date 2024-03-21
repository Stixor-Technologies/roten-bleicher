import React, { useCallback, useRef } from "react";
import Image from "next/image";
import RB_Architektur from "../../../../public/images/architektur/rb_architektur.jpg";
import RB_Ausstattung from "../../../../public/images/architektur/rb_ausstattung.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { horizontalLoop } from "@/utils/horizontal-loop";
import useSectionInView from "@/utils/useSectionInView";

const DetailSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  const marqueContainer = useRef<HTMLElement | null>(null);
  const marqueRow = useRef<HTMLUListElement | null>(null);

  const { ref } = useSectionInView("#details");

  const setRefs = useCallback(
    (node: any) => {
      marqueContainer.current = node;
      ref(node);
    },
    [ref],
  );

  const marqueData = [
    "71  Wohnungen",
    "XX Stellplätze",
    "6.960 m2 Fläche",
    "XX m2 Garten",
  ];

  useGSAP(
    () => {
      const scrollingText: HTMLLIElement[] = gsap.utils.toArray(".marque-item");

      const tl = horizontalLoop(scrollingText, {
        repeat: -1,
      });
      tl.pause();

      ScrollTrigger.create({
        trigger: marqueRow.current,
        start: "top bottom",
        endTrigger: marqueContainer.current,

        onEnter: () => {
          tl.play();
        },
        onLeave: () => {
          tl.pause();
        },
        onEnterBack: () => {
          tl.play();
        },

        onLeaveBack: () => {
          tl.pause();
        },
      });
    },
    { scope: marqueContainer },
  );

  return (
    <section id="details" ref={setRefs} className="pb-10 md:pb-[9.02vw] detail">
      {/* slider marque */}

      <div className="bg-red py-7 overflow-hidden md:py-[2.375rem] lg:py-[4.75rem]">
        <ul ref={marqueRow} className="flex relative whitespace-nowrap">
          {marqueData?.map((marqueItem) => (
            <li
              key={marqueItem}
              className="marque-item flex-[0_0_33%] relative text-center text-base md:text-[2.61vw] px-2 md:px-[0.938rem]"
            >
              <div className="border border-light-purple px-4  py-[1rem] sm:py-[1.46rem] lg:py-[2rem] xl:py-[3.06rem] md:px-8 text-light-purple ">
                {marqueItem}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col md:flex-row gap-12 md:gap-0">
        <div className="flex md:w-[56.77%] relative">
          <Image
            src={RB_Architektur}
            width={900}
            height={200}
            alt=""
            className="w-full"
          />
        </div>

        <div className="text-black flex-1 px-[1rem] md:px-7 lg:px-9 xl:px-[8.1vw] md:pt-[10.42vw]">
          <h3 className="font-area-extrabold md:text-[1.438rem] mb-3 md:mb-5">
            Architektur
          </h3>
          <p className="text-[clamp(1rem,1.2vw,1.375rem)] 2xl:leading-[1.969rem]">
            Im Roten Feld findet sich viel schöne Architektur aus den Jahren von
            1870 bis 1914, die dem Viertel seinen historischen Charakter gibt.
            Das würdigt der Rotenbleicher unter anderem mit seiner Fas- sade und
            einem ausgewählten Gestaltungsre- pertoire aus horizontalen
            Gesimsbändern, zu- rückgesetzten Faschen sowie geschmackvoll
            eingesetzter Klinkerkunst.
          </p>

          <p className="text-[clamp(1rem,1.2vw,1.375rem)] 2xl:leading-[1.969rem] mt-7">
            Entworfen vom Hamburger Architekturbüro Schenk Fleischhaker, das es
            versteht, gestalte- rische Qualität mit Ökologie und Nachhaltigkeit
            zu verbinden. Das extensiv begrünte Dach mit viel Platz für
            Photovoltaik und der regionale Klinker der Fassade, der seit 1888
            von einem lokalen Familienunternehmen produziert wird, sind nur zwei
            Beispiele dafür.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 md:gap-0 mt-16 md:mt-[6.25rem]">
        <div className="flex md:w-[56.77%] relative md:order-1">
          <Image
            src={RB_Ausstattung}
            width={900}
            height={200}
            alt=""
            className="w-full"
          />
        </div>

        <div className="text-black flex-1 px-[1rem] md:px-7 lg:pl-[4rem] xl:pl-[8.68rem] lg:px-9 xl:pr-[8.1vw] md:pt-[10.42vw] md:order-0">
          <h3 className="font-area-extrabold md:text-[1.438rem] mb-3 md:mb-5">
            Ausstattung
          </h3>
          <p className="text-[clamp(1rem,1.2vw,1.375rem)] 2xl:leading-[1.978rem]">
            Mauris molestie sed ex ut sagittis. Aliquam nulla mauris, mattis eu
            elementum vitae, cursus et ipsum. Morbi a aliquet lacus. Vivamus
            tincidunt felis quis arcu finibus, nec consequat metus interdum.
            Pellentesque quis mauris egestas, ullamcorper metus in, porttitor
            nulla. Donec ornare, urna non lobortis ultricies, nunc quam sagittis
            est, lacinia imperdiet ipsum magna eu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
