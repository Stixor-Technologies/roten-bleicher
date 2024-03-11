import React from "react";
import Image from "next/image";
import PhilosophyLanding from "../../../../public/images/philosophie/philosophy-landing.png";
import Das2 from "../../../../public/images/philosophie/das-2.avif";
import Das3 from "../../../../public/images/philosophie/das-3.avif";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Pagination, Autoplay } from "swiper/modules";

const DasObjekt = () => {
  const sliderImages = [PhilosophyLanding, Das2, Das3];

  return (
    <section className="">
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
          className="mySwiper mb-3 !ml-0 w-full h-[50vh] lg:aspect-video lg:max-h-[90vh] lg:h-full !flex !items-center flex-col lg:flex-row"
        >
          {sliderImages?.map((imageSrc, index) => (
            <SwiperSlide key={index}>
              <div className="relative mx-auto size-full overflow-hidden z-0">
                <Image
                  className="absolute top-0 left-0 h-full w-full rounded-none object-cover z-10"
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

      <div className="xl:w-[85%] mx-auto px-[1rem] sm:px-[2rem] xl:px-0">
        <h3 className="text-xl font-area-bold mb-2 lg:mb-0">Das Objekt</h3>

        <h4 className="text-[clamp(2rem,5vw,5rem)] text-medium-purple">
          Schöner leben im Roten Feld.
        </h4>

        <p className="xl:w-[53vw] lg:flex gap-0 ml-auto lg:gap-8 py-[4.75vw]">
          <span className="text-[clamp(1rem,1vw,1.375rem)]  text-black">
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

          <span className="text-[clamp(1rem,1vw,1.375rem)] text-black">
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
