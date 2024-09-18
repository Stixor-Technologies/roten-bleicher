import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import RB_Architektur from "../../../../public/images/architektur/rb_architektur.jpg";
import RB_Ausstattung from "../../../../public/images/architektur/rb_ausstattung.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import useSectionInView from "@/utils/useSectionInView";
import Marquee from "react-fast-marquee";
import Slide1 from "../../../../public/images/architektur/slider-image-1.jpg";
import Slide2 from "../../../../public/images/architektur/slider-image-2.jpg";
import Gallery from "../gallery/gallery";

const DetailSection = () => {
  gsap.registerPlugin(ScrollTrigger);

  const marqueContainer = useRef<HTMLElement | null>(null);
  const marqueRow = useRef<HTMLUListElement | null>(null);
  const sliderImages = [Slide1, Slide2];

  const { ref } = useSectionInView("#details");

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
    "1-5 Zimmer (nach den 71 Wohnungen)",
    "6960 m² Gesamtfläche",
    "2500 m² Grünfläche",
    "57 PKW-Stellplätze",
    "116 Fahrrad-Stellplätze",
  ];

  return (
    <section id="details" ref={setRefs} className="pb-10 md:pb-[6.72vw] detail">
      {/* slider marque */}

      <div className="bg-red py-7 overflow-hidden md:py-[2.375rem] lg:py-[4.75rem]">
        <Marquee speed={windowSize >= 768 ? 110 : 90} autoFill loop={0}>
          <ul ref={marqueRow} className="flex relative whitespace-nowrap">
            {marqueData?.map((marqueItem) => (
              // <li
              //   key={marqueItem}
              //   className="marque-item flex w-[12.5rem] sm:w-[15.625rem] md:w-[21.875rem] lg:w-[25rem] xl:w-[63.5rem] relative text-center text-base md:text-[2.61vw] px-2 md:px-[0.938rem] cursor-pointer transition duration-300 ease-in-out"
              // >
              //   <div className="border flex-1 border-light-purple px-4  py-[1rem] sm:py-[1.46rem] lg:py-[2rem] xl:py-[3.06rem] md:px-8 text-light-purple ">
              //     {marqueItem}
              //   </div>
              // </li>

              <li
                key={marqueItem}
                className="marque-item flex  relative text-center text-base md:text-[2.61vw] px-2 md:px-[0.938rem] cursor-pointer transition duration-300 ease-in-out"
              >
                <div className="border flex-1 border-light-purple px-4  py-[1rem] sm:py-[1.46rem] lg:py-[2rem] xl:py-[3.06rem] md:px-8 text-light-purple ">
                  {marqueItem}
                </div>
              </li>
            ))}
          </ul>
        </Marquee>
      </div>

      <div className="container md:mt-[7.813rem]">
        <div className="lg:pl-[4.8vw] flex flex-col lg:flex-row gap-12 md:gap-0">
          <div className="flex lg:w-[47.4%] relative">
            <Image
              src={RB_Architektur}
              width={733}
              height={733}
              alt=""
              className="w-full object-cover lg:max-w-[45.8125rem] self-start"
            />
          </div>

          <div className="text-black flex-1 md:pt-[6.64vw] lg:pt-0 lg:pl-[10vw] 3xl:pl-[14.33vw]">
            <h3 className="text-xl font-area-bold mb-2 text-medium-purple lg:mb-1">
              Die Details
            </h3>

            <h3 className="font-area-extrabold md:text-[1.375rem] md:mt-[4.64vw] mb-2.5  md:mb-[0.938rem]">
              Passend zur historischen Umgebung: Die Architektur.
            </h3>
            <p className="text-[clamp(1rem,1.2vw,1.375rem)] 2xl:leading-[1.969rem]">
              Im Roten Feld findet sich viel schöne Architektur aus den Jahren
              von 1870 bis 1914, die dem Viertel seinen historischen Charakter
              gibt. Das würdigt der Rotenbleicher unter anderem mit seiner
              Fas-sade und einem ausgewählten Gestaltungsre-pertoire aus
              horizontalen Gesimsbändern, zu-rückgesetzten Faschen sowie
              geschmackvoll eingesetzter Klinkerkunst.
            </p>

            <p className="text-[clamp(1rem,1.2vw,1.375rem)] 2xl:leading-[1.969rem] mt-4 lg:mt-8">
              Entworfen vom Hamburger Architekturbüro Schenk Fleischhaker, das
              es versteht, gestalte-rische Qualität mit Ökologie und
              Nachhaltigkeit zu verbinden. Das extensiv begrünte Dach mit viel
              Platz für Photovoltaik und der regionale Klinker der Fassade, der
              seit 1888 von einem lokalen Familienunternehmen produziert wird,
              sind nur zwei Beispiele dafür.
            </p>
          </div>
        </div>
      </div>

      <div className="my-16 lg:my-[7.625rem]">
        <Gallery galleryImages={sliderImages} fromDetail />
      </div>

      <div className="container">
        <div className="lg:pl-[5.16vw] flex flex-col lg:flex-row gap-12 md:gap-0 ">
          <div className="flex lg:w-[47.57%] relative lg:order-1">
            <Image
              src={RB_Ausstattung}
              width={733}
              height={733}
              alt=""
              className="w-full object-cover lg:max-w-[45.8125rem] aspect-[733/733] self-start"
            />
          </div>

          <div className="text-black flex-1 lg:pr-[10vw] 3xl:pr-[14.33vw] md:pt-[6.2vw] lg:pt-0 md:order-0">
            <h3 className="font-area-extrabold md:text-[1.438rem] mb-3 md:mb-5">
              Und eine Ausstattung, die nicht nur schön, sondern auch
              intelligent ist.
            </h3>

            <p className="text-[clamp(1rem,1.2vw,1.375rem)] 2xl:leading-[1.969rem]">
              Natürlich muss eine Ausstattung schön und kom-fortabel sein. Hier
              aber will sie aber mehr. Nämlich auch intelligent und nachhaltig
              sein. Dafür entspricht der ganze Bau KfW55 und ist an das
              Fernwärmenetz von Lüneburg angeschlos-sen, das schon heute mehr
              regenerative Ener-gien einsetzt als üblich - und bis 2030 frei von
              CO2-Emissionen sein will.
            </p>

            <p className="text-[clamp(1rem,1.2vw,1.375rem)] 2xl:leading-[1.969rem] my-4 lg:my-8">
              Ähnlich nachhaltig, intelligent und sogar sparsam ist die
              Warmwasserbereitung mittels eines Wärmetauschers in der Wohnung.
              Das erspart Energieverluste im Haus und sorgt auch dafür, dass
              Legionellen und andere gesundheitsschä-dliche Bakterien keine
              Chance haben. Weil das Wasser in der Leitung immer die richtige
              Tem-peratur hat, damit sie gar nicht erst entstehen.
            </p>

            <p className="text-[clamp(1rem,1.2vw,1.375rem)] 2xl:leading-[1.969rem]">
              Hier lebt es sich also gesund und stets komfor-tabel: Mit Aufzügen
              in jedem Treppenhaus, Son-nenmarkisen nach Osten und Westen,
              Eichen-holzparkett in den Wohnräumen, sorgsam aus-gewählten
              Armaturen und Objekten und vielem mehr. Natürlich nicht von
              irgendwelchen Her-stellern, sondern ausschließlich von bekannten
              und bewährten Marken.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailSection;
