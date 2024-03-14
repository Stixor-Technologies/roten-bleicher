import React, { useCallback, useRef } from "react";
import Image from "next/image";
import PhilosophyLanding from "../../../../public/images/philosophie/c-philosophy-landing.png";
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
            // <li
            //   key={marqueItem}
            //   className="marque-item flex-[0_0_33%] relative text-center text-base md:text-[2.61vw] px-2 md:px-[0.938rem]"
            // >

            <li
              key={marqueItem}
              className="marque-item flex-[0_0_33%] relative text-center text-base md:text-[2.61vw] px-2 md:px-[0.938rem]"
            >
              {/* marque-item flex-[0_0_33%] relative text-center text-[2.61vw] px-2 md:px-[0.938rem] */}
              <div className="border border-light-purple py-2 px-4 md:py-[3.06rem] md:px-8 text-light-purple ">
                {marqueItem}
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col md:flex-row gap-12 md:gap-0">
        <div className="flex md:w-[56.77%] relative">
          <Image
            src={PhilosophyLanding}
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
            Duis molestie placerat tellus vel convallis. Quisque et mi dictum,
            condimentum magna vitae, vulputate nisi. Mauris id ante lectus. Nunc
            non lectus vel massa auctor dapibus. Sed convallis viverra lorem.
            Nam nec nisl tellus. Fusce consequat nisi.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-12 md:gap-0 mt-16 md:mt-[6.25rem]">
        <div className="flex md:w-[56.77%] relative md:order-1">
          <Image
            src={PhilosophyLanding}
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
