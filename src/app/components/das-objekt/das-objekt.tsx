import React from "react";
import Image from "next/image";
import PhilosophyLanding from "../../../../public/images/philosophie/philosophy-landing.png";
import Das2 from "../../../../public/images/philosophie/das-2.avif";
import Das3 from "../../../../public/images/philosophie/das-3.avif";

import Slide1 from "../../../../public/images/das-objekt/das_slide1.jpg";
import Slide2 from "../../../../public/images/das-objekt/das_slide2.jpg";
import Slide3 from "../../../../public/images/das-objekt/das_slide3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";
import useSectionInView from "@/utils/useSectionInView";

const DasObjekt = () => {
  const sliderImages = [Slide1, Slide2, Slide3];
  const { ref } = useSectionInView("#das-objekt");

  return (
    <section ref={ref} id="das-objekt" className="">
      <div className="flex items-center gap-10 mb-[5.22vw]">
        <Swiper
          pagination={{
            clickable: true,
          }}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Pagination, Autoplay]}
          breakpoints={{
            0: {
              direction: "horizontal",
            },
            1024: {
              direction: "vertical",
            },
          }}
          className="mySwiper w-full h-[50vh] lg:aspect-video lg:max-h-[891px] lg:h-full !flex !items-center flex-col lg:flex-row"
        >
          {sliderImages?.map((imageSrc, index) => (
            <SwiperSlide key={index}>
              <div
                className={`relative mx-auto size-full overflow-hidden z-0 ${
                  index === sliderImages.length - 1 && "bg-light-purple"
                }`}
              >
                <Image
                  className={`absolute top-0 left-0 h-full w-full rounded-none z-10 ${
                    index === sliderImages.length - 1
                      ? "object-contain"
                      : "object-cover"
                  } `}
                  src={imageSrc}
                  width={1536}
                  height={900}
                  alt=""
                  priority
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="container xl:max-w-full xl:px-0">
        <div className="xl:container">
          <h3 className="text-xl font-area-bold mb-2 text-medium-purple lg:mb-1">
            Das Objekt
          </h3>

          <h4 className="text-[clamp(2rem,5vw,5rem)] leading-[1.1]">
            Echte Nachbarschaft <br /> und hohe Lebensqualität.
          </h4>
        </div>

        {/*  */}

        <p className="lg:w-[70vw] xl:w-[56.67vw] lg:flex gap-0 ml-auto lg:gap-7 xl:gap-4 pt-5 pb-10 md:pt-[4.75vw] md:pb-[13.8vw] lg:mr-[140px]">
          <span className="inline-block mb-5 lg:mb-0 flex-1 text-[clamp(1rem,1.2vw,1.375rem)] text-black 2xl:leading-[2.159rem]">
            Das Gebäudeensemble besteht aus einem linearen Baukörper, der sich
            entlang der Willy-Brandt-Straße positioniert sowie einem
            freiste-henden Punkthaus auf der lärmabge-wandten Seite am
            Rotenbleicher Weg. Der Riegel bildet im Norden ein Hochpunkt aus und
            stuft sich zum Rotenbleicher Weg in Richtung Süden ab. Durch die
            Aufnahmen von Winkeln, Fluchten und Paral-lelen bilden beide Gebäude
            ein Ensemble und formieren – abgeschirmt von der Willy-Brandt-Straße
            – einen Freiraum, der den Anwohnern als Aufenthaltsfläche dient und
            ausreichend Spiel-raum für durchgrünte Außenräume und Kinder-
          </span>

          <span className="inline-block flex-1 text-[clamp(1rem,1.2vw,1.375rem)] text-black 2xl:leading-[2.159rem]">
            spielflächen bietet. Es entstehen insgesamt 71 Wohnungen mit 1 bis 5
            Zimmern; 30% sind miet-preisgebunden. Mauris id ante lectus. Nunc
            non lectus vel massa auctor dapibus. Sed convallis viverra lorem.
            Nam nec nisl tellus. Fusce conse-quat nisi vitae nunc pellentesque,
            ut congue tur-pis euis-mod. Sed tincidunt consequat dui non ut sit
            amet nisi sit amet dolor dictum vestibulum. Cras egestas commodo
            nunc, eu dignissim tellus molestie sed. In non ante quis mi viverra
            sceler-isque. Suspendisse vel leo viverra, vestibulum dolor
            volutpat, suscipit metus. Fusce consequat nisi vitae nunc pellente.
          </span>
        </p>
      </div>
    </section>
  );
};

export default DasObjekt;
