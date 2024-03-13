import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger, SplitText } from "gsap/all";
import MarqueGroup from "../../../../public/images/die-lage/marque/marque-group.svg";
import MarqueGroup2 from "../../../../public/images/die-lage/marque/marque-group-2.svg";

import SliderLeft1 from "../../../../public/images/die-lage/slider-left/slider-left-1.png";
import SliderLeft2 from "../../../../public/images/die-lage/slider-left/slider-left-2.png";
import SliderLeft3 from "../../../../public/images/die-lage/slider-left/slider-left-3.png";
import SliderLeft4 from "../../../../public/images/die-lage/slider-left/slider-left-4.png";

import SliderRight1 from "../../../../public/images/die-lage/slider-right/slider-right-1.png";
import SliderRight2 from "../../../../public/images/die-lage/slider-right/slider-right-2.png";
import SliderRight3 from "../../../../public/images/die-lage/slider-right/slider-right-3.png";
import SliderRight4 from "../../../../public/images/die-lage/slider-right/slider-right-4.png";

import GroupLines from "../../../../public/images/die-lage/line-group.svg";
import Map from "../../../../public//images/die-lage/map.png";

import { horizontalLoop } from "@/utils/horizontal-loop";

const DieLage = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  const marqueContainer = useRef<HTMLElement | null>(null);
  const marqueRow = useRef<HTMLUListElement | null>(null);
  const fadedText = useRef<HTMLParagraphElement | null>(null);
  const fadedTextContainer = useRef<HTMLDivElement | null>(null);

  const marqueData = [MarqueGroup, MarqueGroup2];

  const sliderLeftData = [SliderLeft1, SliderLeft2, SliderLeft3, SliderLeft4];
  const sliderRightData = [
    SliderRight1,
    SliderRight2,
    SliderRight3,
    SliderRight4,
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
            console.log(prev, currentSlide);
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
        },
      });
    },

    { scope: marqueContainer },
  );

  return (
    <section id="die-lage" ref={marqueContainer} className="">
      {/* slider marque */}
      <div className=" bg-light-purple">
        <ul
          ref={marqueRow}
          className="flex relative overflow-hidden whitespace-nowrap pt-20 pb-10 md:pb-[3.696rem] md:pt-[19vw]"
        >
          {marqueData?.map((marqueItem, index) => (
            <li
              key={index}
              className="image-marque-item flex-[0_0_170%] md:flex-[0_0_120%] relative text-center px-2 md:px-4"
            >
              <Image
                src={marqueItem}
                width={700}
                height={200}
                alt=""
                className={`w-full max-h-[3.715rem]`}
              />
            </li>
          ))}
        </ul>
      </div>

      {/* sliders */}
      <div className="flex bg-light-purple section-galleries mb-[14.65vw]">
        {/* slider-left */}

        <div className="w-full aspect-square max-h-[86.3vh] md:px-0 relative section-gallery">
          {sliderLeftData?.map((image, index) => (
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

        {/* slider-right */}
        <div className="w-full aspect-square max-h-[86.3vh] md:px-0 relative section-gallery">
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
        <div className="xl:w-[83.3%] mx-auto">
          <div ref={fadedTextContainer} className="mb-[8vw]">
            <h3 className="font-area-bold mb-6 md:text-xl">Die Lage</h3>

            <p
              ref={fadedText}
              className="text-[clamp(1rem,3.2vw,2.813rem)] text-black"
            >
              Nam nec magna quis nibh mollis euismod eget et lectus. Quisque
              volutpat est non arcu pellentesque, ut bibendum magna consequat.
              Aenean non finibus quam, ac aliquam tor-tor. Donec ac turpis
              commodo, interdum neque vitae, dic-tum sapien. Curabitur sagittis
              metus nec orci iaculis max-imus. Mauris leo magna, lobortis sed
              tempus nec, sus-cipit eget velit. Suspendisse eget dictum eros,
              nec iaculis augue. Vestibulum nec tempus ante. Integer semper
              cursus orci, id dignissim nisl tincidunt sit amet. Orci varius
              natoque.
            </p>
          </div>

          <Image
            src={Map}
            width={900}
            height={300}
            alt="map"
            className="w-full mb-16 md:mb-[12.5vw]"
          />
        </div>
      </div>
    </section>
  );
};

export default DieLage;
