"use client";
import React, { useCallback, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";

import GroupLines from "../../../../public/images/die-lage/line-group.svg";
import Map from "../../../../public//images/die-lage/map.png";

import { horizontalLoop } from "@/utils/horizontal-loop";
import useSectionInView from "@/utils/useSectionInView";

const DieLage = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  const marqueContainer = useRef<HTMLElement | null>(null);
  const marqueRow = useRef<HTMLUListElement | null>(null);
  const fadedText = useRef<HTMLParagraphElement | null>(null);
  const fadedTextContainer = useRef<HTMLDivElement | null>(null);
  const { ref } = useSectionInView("#die-lage");

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

  useGSAP(
    () => {
      // animation for slider  marque
      const scrollingText: HTMLLIElement[] =
        gsap.utils.toArray(".image-marque-item");

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
            // gsap
            //   .timeline({
            //     // call the next slider to play
            //     delay: 2.5,
            //     onComplete: () => {
            //       if (this.next) {
            //         // Check if this.next is not null
            //         this.next.play();
            //       }
            //     },
            //   })
            tl = gsap
              .timeline({
                // call the next slider to play
                delay: 2.5,
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

      // sliders[0].play();

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
        <ul
          ref={marqueRow}
          className="flex relative overflow-hidden whitespace-nowrap py-8 md:pb-[3.696rem] md:pt-[14.424vw]"
        >
          {marqueData?.map((marqueItem, index) => (
            <li
              key={index}
              className="image-marque-item flex-[0_0_250%] md:flex-[0_0_120%] relative text-center px-2 md:px-4"
            >
              <Image
                src={marqueItem}
                width={700}
                height={200}
                alt=""
                className={`w-full max-h-[3.715rem]`}
                priority
              />
            </li>
          ))}
        </ul>
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
        <div className="lg:w-[83.17%] mx-auto">
          <div ref={fadedTextContainer} className="mb-5 md:mb-[8vw]">
            <h3 className="font-area-bold mb-3 md:mb-[1.438rem] text-medium-purple md:text-xl">
              Die Lage
            </h3>

            <p
              ref={fadedText}
              className="text-[clamp(1rem,3.2vw,2.813rem)] text-black 2x:leading-[4.1rem]"
            >
              Lüneburg ist schön. Im Roten Feld ist es am schönsten. Ein
              Stadtteil wie das Rote Feld ist selten. Nicht nur in Lüne-burg,
              sondern auch in Deutschland. Im Westen lockt der Kur-park als
              grüne Oase und direkt daneben die Altstadt mit ihrer
              Backsteingotik, den zahlreichen Giebelhäusern, dem Stint-markt und
              dem berühmten antiken Kran, das beliebteste Fotomotiv im
              historischen Hafen.
            </p>
          </div>

          <Image
            src={Map}
            width={900}
            height={300}
            alt="map"
            className="w-full mb-16 md:mb-[12.5vw]"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default DieLage;
