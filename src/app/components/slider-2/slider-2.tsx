import React, { useCallback, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import GroupLines from "../../../../public/images/die-lage/line-group.svg";
import useSectionInView from "@/utils/useSectionInView";

const Slider2 = () => {
  gsap.registerPlugin(ScrollTrigger);
  const marqueContainer = useRef<HTMLElement | null>(null);
  const { ref } = useSectionInView("#slider-2");

  const setRefs = useCallback(
    (node: any) => {
      marqueContainer.current = node;
      ref(node);
    },
    [ref],
  );

  const sliderLeftData = [
    "/images/slider-2/slider-left/slider-left-1.jpg",
    "/images/slider-2/slider-left/slider-left-2.jpg",
    "/images/slider-2/slider-left/slider-left-3.jpg",
  ];
  const sliderRightData = [
    "/images/slider-2/slider-right/slider-right-1.jpg",
    "/images/slider-2/slider-right/slider-right-2.jpg",
    "/images/slider-2/slider-right/slider-right-3.jpg",
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
        start: "top 60%",
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
    },

    { scope: marqueContainer },
  );
  return (
    <section ref={setRefs} id="slider-2" className="-mt-2">
      <div className="flex section-galleries">
        {/* slider-left */}
        <div className="w-full aspect-square max-h-[76.2vh] md:px-0 relative section-gallery">
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
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-12 md:w-auto md:max-w-[9.5625rem]"
          />
        </div>

        {/* slider-right */}
        <div className="w-full aspect-square max-h-[76.2vh] md:px-0 relative section-gallery">
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
            className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-12 md:w-auto md:max-w-[9.5625rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default Slider2;
