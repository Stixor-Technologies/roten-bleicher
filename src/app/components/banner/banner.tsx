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
      styles: "max-w-[44rem] w-full",
    },

    {
      imgSrc: Einheimisch,
      styles: "max-w-[58rem] w-full",
    },
  ];

  const overLappingPanel = useRef<HTMLElement | null>(null);
  const sliderContainer = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
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
        console.log(sectionToIndex);
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
            className: "slide h-full w-full absolute opacity-1 flex opacity-0",
            // className:
            //   "slide max-w-[650px] w-full h-[210px] absolute opacity-1 flex opacity-0",
            // duration: 1,
          })
          .to(
            slideTo,
            {
              opacity: 1,
              autoAlpha: 1,
              ease: "power4.inOut",
              className: "active slide h-full w-full absolute opacity-0 flex",
              // className:
              //   "active slide max-w-[650px] w-full h-[210px] absolute opacity-0 flex",
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
            className: "slide h-full w-full absolute opacity-1 flex opacity-0",
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
  });

  return (
    <>
      <section
        ref={overLappingPanel}
        className="panel h-screen bg-smoke-red relative flex items-center justify-center overflow-hidden"
      >
        <div className="flex flex-col px-[1rem] sm:px-[2rem] md:px-0">
          <Image
            src={BannerLogo}
            width={200}
            height={200}
            alt="banner-logo"
            className="w-full max-w-[45rem]"
            priority
          />
          <h2 className="text-white text-lg sm:text-4xl uppercase text-center font-gibson-medium mt-8 tracking-widest sm:mt-14">
            ZUHAUSE IM ROTEN FELD <span className="font-area">-</span> LÜNEBURG
          </h2>
        </div>
      </section>

      <section className="relative">
        <div
          ref={sliderContainer}
          className="h-screen bg-light-purple relative top-0 left-0 w-full flex items-center justify-center px-[1rem] sm:px-[2rem] z-20"
        >
          <div className="w-full h-[210px] flex items-center justify-center md:px-0 relative">
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
    </>
  );
};

export default Banner;
