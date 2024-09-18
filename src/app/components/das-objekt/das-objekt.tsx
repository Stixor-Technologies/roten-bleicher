import React from "react";

import Slide1 from "../../../../public/images/das-objekt/das_slide1.jpg";
import Slide2 from "../../../../public/images/das-objekt/das_slide2.jpg";
import Slide3 from "../../../../public/images/das-objekt/das_slide3.jpg";

import useSectionInView from "@/utils/useSectionInView";
import Gallery from "../gallery/gallery";

const DasObjekt = () => {
  const sliderImages = [Slide1, Slide2, Slide3];
  const { ref } = useSectionInView("#das-objekt");

  return (
    <section ref={ref} id="das-objekt" className="">
      <div className="flex items-center gap-10 mb-[5.22vw]">
        <Gallery galleryImages={sliderImages} />
      </div>

      <div className="container xl:max-w-full xl:px-0">
        <div className="xl:container">
          <h3 className="text-xl font-area-bold mb-2 text-medium-purple lg:mb-1">
            Das Objekt
          </h3>

          <h4 className="text-[clamp(2rem,5vw,5rem)] xl:leading-[6rem]">
            Echte Nachbarschaft <br /> und hohe Lebensqualität.
          </h4>
        </div>

        <p className="lg:w-[70vw] 2xl:w-[56.68vw] lg:flex gap-0 ml-auto lg:gap-7 xl:gap-4 pt-5 pb-10 md:pt-[5.3vw] md:pb-[13.8vw] lg:mr-[8.75rem]">
          <span className="mb-5 lg:mb-0 flex-1 text-[clamp(1rem,1.2vw,1.375rem)] text-black 2xl:leading-[2.159rem]">
            <span className="">
              Immobilien gibt es viele, aber eine Immobilie unmittelbarer Nähe
              der Altstadt, des Kurparks und des idyllischen Flüsschens Ilmenau
              ist selten. Hier fügt sich der Neubau mit seinen zwei Gebäuden
              ebenso sensibel wie feinsinnig in die zahlreichen
              Gründerzeitbauten des Quartiers ein und versteht es, mit ihnen und
              ihrer glanzvollen Architektur zu harmonieren.
            </span>

            <span className="mt-9 lg:inline-block">
              Es ist eine schöne Symbiose aus städtischem Wohnen und Natur, die
              im Rotenbleicher Weg stattfindet. Denn durch die Aufnahmen von
              Winkeln, Fluchten und Parallelen formieren die
            </span>
          </span>

          <span className="flex-1 text-[clamp(1rem,1.2vw,1.375rem)] text-black 2xl:leading-[2.159rem]">
            <span className="">
              beiden Gebäude ein zentrales xx qm2 großes, grünes Refugium mit
              hoher Erholungsqualität, schattenspendenden Bäumen, Grünflächen,
              Sonnen- und Spielplätzen.
            </span>
            <span className="mt-4 lg:mt-9 inline-block">
              Eingerahmt von 71 1- bis 5-Zimmer-Wohnungen für Singles, Paare und
              Familien. Mit sonnigen Terrassen oder Balkonen für schöne Blicke
              ins Grüne oder über die ganze Stadt. Unter der Erde findet sich
              eine Tiefgarage mit 57 PKW-Stellplätzen und 160 für Fahrräder,
              inklusive Ladestationen. Um Lüneburg und Umgebung - mal so, mal so
              - zu erkunden.
            </span>
          </span>
        </p>
      </div>
    </section>
  );
};

export default DasObjekt;
