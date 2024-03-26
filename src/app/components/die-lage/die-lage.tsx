"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

import GroupLines from "../../../../public/images/die-lage/line-group.svg";
import Map from "../../../../public//images/die-lage/map.png";

import { horizontalLoop } from "@/utils/horizontal-loop";
import useSectionInView from "@/utils/useSectionInView";
import Marquee from "react-fast-marquee";

const DieLage = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  const marqueContainer = useRef<HTMLElement | null>(null);
  const marqueRow = useRef<HTMLUListElement | null>(null);
  const fadedText = useRef<HTMLParagraphElement | null>(null);
  const fadedTextContainer = useRef<HTMLDivElement | null>(null);
  const { ref } = useSectionInView("#die-lage");

  const [windowSize, setWindowSize] = useState<number>(0);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize(window.innerWidth);
    };
    handleWindowResize();
    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const setRefs = useCallback(
    (node: any) => {
      marqueContainer.current = node;
      ref(node);
    },
    [ref],
  );

  const marqueData = [
    "/images/die-lage/marque/marque-group.svg",
    "/images/die-lage/marque/marque-group-2.svg",
  ];

  const sliderLeftData = [
    "/images/die-lage/slider-left/slider-left-1.png",
    "/images/die-lage/slider-left/slider-left-2.png",
    "/images/die-lage/slider-left/slider-left-3.png",
    "/images/die-lage/slider-left/slider-left-4.png",
  ];
  const sliderRightData = [
    "/images/die-lage/slider-right/slider-right-1.png",
    "/images/die-lage/slider-right/slider-right-2.png",
    "/images/die-lage/slider-right/slider-right-3.png",
    "/images/die-lage/slider-right/slider-right-4.png",
  ];

  const steps = [
    "SALZTHERME LÜNEBURG",
    "STÄDTISCHES KLINIKUM",
    "LEUPHANA UNIVERSITÄT",
    "AUEBRUCHSHEIDE",
    "OLYMPIC FITNESS LÜNEBURG",
    "LÜNEBURG BAHNHOF",
    "ALTER KRAN",
    "RATHAUS LÜNEBURG",
    "LÜNEBURG ALTSTADT",
    "SÜLZWIESE",
    "DEUTSCHES SALZMUSEUM",
  ];

  useGSAP(
    () => {
      //animation sliders
      const createSlider = (element: HTMLElement, delay: number) => {
        const slides = Array.from(element.querySelectorAll("div"));
        gsap.set(slides[0], { width: "100%" });
        const slideWrap = gsap.utils.wrap(slides);
        let currentIndex = 0;
        let currentSlide = slides[0];

        interface Slider {
          next: Slider | null;
          play(): void;
          pause(): void;
        }
        let tl = gsap.timeline();

        const slider: Slider = {
          next: null,
          play: function () {
            // cycle through slide targets
            const prev = currentSlide;
            currentSlide = slideWrap(++currentIndex);

            tl = gsap
              .timeline({
                // call the next slider to play
                delay: 1.5,
                // onCom
                onComplete: () => {
                  if (this.next) {
                    // Check if this.next is not null
                    this.next.play();
                  }
                },
              })

              .to(
                prev,
                {
                  width: 0,
                  ease: "power4.inOut",
                  clearProps: "all",
                },
                1,
              )
              .set(currentSlide, { left: "auto", right: 0 }, 0)
              .to(currentSlide, { width: "100%" }, 1)
              .set(currentSlide, { left: 0, right: "auto" });
          },

          pause: function () {
            tl.pause();
          },
        };

        return slider;
      };

      const sliders = gsap.utils
        .toArray(".section-gallery")
        // @ts-ignore
        .map((el, i) => createSlider(el, "+=0"));

      const sliderWrap = gsap.utils.wrap(sliders);
      sliders.forEach((slider, i) => {
        slider.next = sliderWrap(i + 1);
      });

      ScrollTrigger.create({
        trigger: marqueContainer.current,
        start: "top 60%", // Adjust this value as needed
        onEnter: () => {
          sliders[0].play();
        },
        onLeave: () => {
          sliders[0].pause();
        },

        onEnterBack: () => {
          sliders[0].play();
        },

        onLeaveBack: () => {
          sliders[0].pause();
        },
      });

      const text = new SplitText(fadedText.current, { type: "words" });

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
    },

    { scope: marqueContainer },
  );

  return (
    <section id="die-lage" ref={setRefs} className="-mt-2">
      {/* slider marque */}
      <div className=" bg-light-purple">
        <Marquee speed={windowSize >= 768 ? 110 : 90} autoFill loop={0}>
          {marqueData.map((imageUrl, index) => (
            <div
              key={index}
              className="flex flex-row py-8 md:pb-[3.696rem] md:pt-[14.424vw]"
            >
              <Image
                src={imageUrl}
                alt=""
                width={700}
                height={200}
                className="w-full max-h-[2rem] sm:max-h-[2.2rem] md:max-h-[3.715rem] mx-7 cursor-pointer transition duration-300 ease-in-out"
                priority
              />
            </div>
          ))}
        </Marquee>
      </div>

      {/* sliders */}
      <div className="flex bg-light-purple section-galleries mb-[9.8vw]">
        {/* slider-left */}
        <div className="w-full aspect-square max-h-[77.34vh] md:px-0 relative section-gallery">
          {sliderLeftData?.map((image, index) => {
            return (
              <div
                key={index}
                className={`slide h-full absolute left-0 flex w-0`}
              >
                <Image
                  src={`${image}`}
                  fill
                  alt={`banner-slider-image-${index}`}
                  className="w-full object-cover"
                  priority
                />
              </div>
            );
          })}

          <Image
            src={GroupLines}
            width={153}
            height={20}
            alt=""
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-12 md:w-auto md:max-w-[153px]"
          />
        </div>

        {/* slider-right */}
        <div className="w-full aspect-square max-h-[77.34vh] md:px-0 relative section-gallery">
          {sliderRightData?.map((image, index) => (
            <div
              key={index}
              className={`slide h-full absolute left-0 flex w-0`}
            >
              <Image
                src={image}
                fill
                alt={`banner-slider-image-${index}`}
                className="w-full object-cover"
                priority
              />
            </div>
          ))}

          <Image
            src={GroupLines}
            width={153}
            height={20}
            alt=""
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-12 md:w-auto md:max-w-[153px]"
          />
        </div>
      </div>

      <div className="container">
        <div className="max-w-[85.25rem] mx-auto">
          <div ref={fadedTextContainer} className="mb-5 md:mb-[8vw]">
            <h3 className="font-area-bold mb-3 md:mb-[1.438rem] text-medium-purple md:text-xl">
              Die Lage
            </h3>

            <p
              ref={fadedText}
              className="text-[clamp(1rem,3.2vw,2.813rem)] text-black 2xl:leading-[3.79rem]"
            >
              Lüneburg ist schön. Im Roten Feld ist es am schönsten. Ein
              Stadtteil wie das Rote Feld ist selten. Nicht nur in Lüne burg,
              sondern auch in Deutschland. Im Westen lockt der Kur park als
              grüne Oase und direkt daneben die Altstadt mit ihrer
              Backsteingotik, den zahlreichen Giebelhäusern, dem Stint markt und
              dem berühmten antiken Kran, das beliebteste Fotomotiv im
              historischen Hafen.
            </p>
          </div>
        </div>

        <div className="flex flex-col xl:flex-row max-w-[93.875rem] ml-auto w-full gap-16 2xl:gap-[8.03vw] mb-[17.92vw]">
          <Image
            src={Map}
            width={812}
            height={1148}
            alt="map"
            priority
            className="w-full h-auto xl:max-h-[71.75rem]"
          />

          <div className="flex flex-col justify-between">
            <div>
              <p className="text-[clamp(1rem,1.2vw,1.375rem)] 2xl:leading-[1.969rem]">
                Begleitet von viel Natur, in Form des Kurparks und des
                romantischen Flüsschens Ilmenau, die dem Roten Feld seinen
                idyllischen Charme ver-leihen und viele Möglichkeiten bieten –
                zur Erhol-ung und für abwechslungsreiche Spaziergänge. Auch an
                den vielen gepflegten Altbauten vorbei, wie der
                Wilhelm-Raabe-Schule, eine der besten Schulen der Stadt.
              </p>

              <p className="text-[clamp(1rem,1.2vw,1.375rem)] 2xl:leading-[1.969rem] mt-4 lg:mt-8">
                Im Süden sorgt die Universität für viel quirliges Leben und
                direkt daneben das Villenviertel Willschenbruch für eine
                beruhigend-großbür-gerliche Atmosphäre. Und das Beste: Knappe
                150 Meter vom Rotenbleicher, finden sich Supermär-kte, Ärzte und
                alle Möglichkeiten. Hier ist nicht nur die Innenstadt vor der
                Haustür, sondern auch alles für den täglichen Bedarf.
              </p>
            </div>

            <ol className=" list-none font-area-semibold text-base space-y-2 mt-14">
              {steps.map((item, index) => (
                <li className="space-x-4">
                  <span className=" text-medium-purple text-[1.438rem] font-area-extrabold">
                    {index + 1}
                  </span>
                  <span className=" font-area-semibold">{item}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DieLage;
