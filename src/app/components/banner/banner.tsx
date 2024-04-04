"use client";
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Image from "next/image";
import BannerLogo from "../../../../public/images/banner/banner-logo.svg";
import Erkenbar from "../../../../public/images/banner/erkennbar.svg";
import Effizient from "../../../../public/images/banner/effizient.svg";
import Einheimisch from "../../../../public/images/banner/einheimisch.svg";
import Header from "../header/header";

const Banner = () => {
  gsap.registerPlugin(ScrollTrigger);

  const b2Images = [
    {
      imgSrc: Erkenbar,
      styles: "max-w-[55rem] w-full",
    },

    {
      imgSrc: Effizient,
      styles: "max-w-[26rem] sm:max-w-[32rem] md:max-w-[44rem] w-full",
    },

    {
      imgSrc: Einheimisch,
      styles: "max-w-[120rem] md:max-w-[58rem] w-full",
    },
  ];

  const bannerContainer = useRef<HTMLElement | null>(null);
  const overLappingPanel = useRef<HTMLElement | null>(null);
  const sliderContainer = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      ScrollTrigger.create({
        trigger: overLappingPanel.current,
        start: "top top",
        end: "+=100%",
        pin: true,
        pinSpacing: false,
        scrub: 1,
      });

      // auto play slider
      const slides: HTMLDivElement[] = gsap.utils.toArray(".slide");
      let moveSlideTL = gsap.timeline();

      const slideTransition = () => {
        if (!moveSlideTL.isActive()) {
          const slideFrom = document.querySelector(
            ".slide.active",
          ) as HTMLDivElement;
          const sectionToIndex = slides.indexOf(slideFrom);
          if (sectionToIndex !== slides.length - 1) {
            const slideTo = slides[sectionToIndex + 1];
            moveToSlide(slideFrom, slideTo);
          } else {
            const slideTo = slides[0];
            moveToSlide(slideFrom, slideTo);
          }
        }
      };

      const moveToSlide = (
        slideFrom: HTMLDivElement,
        slideTo: HTMLDivElement,
      ) => {
        if (slides.indexOf(slideFrom) < slides.indexOf(slideTo)) {
          moveSlideTL = gsap
            .timeline({
              onStartParams: [slideTo, slideFrom],
            })
            .to(slideFrom, {
              opacity: 0,
              autoAlpha: 0,
              ease: "power4.inOut",
              clearProps: "all",
              className: "slide h-full w-full absolute flex opacity-0",
            })
            .to(
              slideTo,
              {
                opacity: 1,
                autoAlpha: 1,
                ease: "power4.inOut",
                className: "active slide h-full w-full absolute opacity-0 flex",
                duration: 1,
              },
              0,
            );
        } else {
          moveSlideTL = gsap
            .timeline({
              onStartParams: [slideTo, slideFrom],
            })
            .to(slideFrom, {
              opacity: 0,
              autoAlpha: 0,
              ease: "power4.inOut",
              clearProps: "all",
              className:
                "slide h-full w-full absolute opacity-1 flex opacity-0",
              duration: 1,
            })
            .to(
              slideTo,

              {
                opacity: 1,
                autoAlpha: 1,
                ease: "power4.inOut",
                className: "active slide h-full w-full absolute opacity-0 flex",
                duration: 1,
              },
              0,
            );
        }
      };

      let sliderTimeLine = gsap.timeline();

      sliderTimeLine.to(
        {},
        { onRepeat: slideTransition, repeat: -1, duration: 1.5 },
      );

      ScrollTrigger.create({
        trigger: sliderContainer.current,
        start: "top 40%",
        end: "+=100%",
        pin: false,
        pinSpacing: false,
        animation: sliderTimeLine,
        onLeaveBack: () => {
          sliderTimeLine.pause();
        },
        onLeave: () => {
          sliderTimeLine.pause();
        },
        onEnterBack: () => {
          sliderTimeLine.play();
        },
      });
    },
    { scope: bannerContainer },
  );

  return (
    <section ref={bannerContainer} id="banner" className="mb-20 md:mb-[9.23vw]">
      <section
        ref={overLappingPanel}
        className="panel h-screen bg-smoke-red relative flex items-center justify-center overflow-hidden"
      >
        <div className="flex flex-col items-end px-[1rem] sm:px-[2rem] lg:px-0">
          <Image
            src={BannerLogo}
            width={200}
            height={200}
            alt="banner-logo"
            className="w-full max-w-[45rem]"
            priority
          />
          <h2 className="text-white text-lg sm:text-3xl md:text-4xl uppercase text-right font-gibson-medium mt-8 tracking-widest sm:mt-14">
            Im schönsten Lüneburg, im Roten Feld
          </h2>
        </div>
      </section>

      <section className="relative">
        <div
          ref={sliderContainer}
          className="h-screen bg-light-purple relative top-0 left-0 w-full flex items-center justify-center px-[1rem] sm:px-[2rem] z-20"
        >
          <div className="w-full h-[80px] lg:[210px] flex items-center justify-center md:px-0 relative">
            {b2Images.map((image, index) => (
              <div className={`${image.styles} h-full absolute`}>
                <div
                  key={index}
                  className={`slide w-full h-full flex ${
                    index === 0 && "active"
                  } ${index !== 0 && "opacity-0"}`}
                >
                  <Image
                    src={image.imgSrc}
                    fill
                    alt={`banner-slider-image-${index}`}
                    className={`w-full ${image.styles}`}
                    priority
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <Header />
      </section>
    </section>
  );
};

export default Banner;
