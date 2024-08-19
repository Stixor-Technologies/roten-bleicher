import React from "react";
import Link from "next/link";
import Image from "next/image";
import GraubnerLogo from "../../../../public/images/footer/graubner-logo.svg";
import SchenkLogo from "../../../../public/images/footer/schenk-logo-1.svg";
import NeubauteamLogo from "../../../../public/images/footer/neubauteam.svg";
import GrundwertLogo from "../../../../public/images/footer/grundwert.svg";
import LinesGroup from "../../../../public/images/footer/lines-group.svg";

const Footer = () => {
  return (
    <footer id="#footer" className="bg-light-purple text-white">
      <div className="container py-14 pb-8 md:pt-[3.313rem] md:pb-[3.875rem] midxl:pr-0 3xl:pl-[8.75rem] 3xl:pr-[4.1875rem]">
        {/* top section */}
        <div className="flex flex-col  gap-12 sm:gap-16 justify-between text-lg md:text-xl midxl:flex-row">
          {/* left side */}

          <div className=" self-start flex-col midxl:justify-between midxl:items-end font-area-thin gap-[1.288rem] md:gap-10 xl:gap-[7.063rem]">
            <h4 className="text-red text-[1.4375rem] font-area-extrabold">
              Beratung & Verkauf
            </h4>

            <Link
              href="anfragen@roten-bleicher.de"
              className="mt-[.4275rem] inline-block font-area-thin text-3xl 2xl:text-[2.8125rem] 2xl:leading-[4.0625rem]"
            >
              anfragen@roten-bleicher.de
            </Link>
          </div>

          {/* right side */}
          <div className="flex flex-col font-area-thin gap-12 sm:flex-row justify-between lg:gap-[3.438rem] xl:max-w-[46.1875rem] 2xl:gap-[4.6875rem]">
            <div className="flex-1 lg:flex-initial lg:w-[19rem] 2xl:w-[20.438rem]">
              <Image
                src={NeubauteamLogo}
                width={313}
                height={60}
                alt="neubauteam-logo"
                className="-ml-7"
              />
              <address className="not-italic my-2.5 md:my-[1.288rem] sm:h-[7.3125rem]">
                NEUBAUTEAM CVJ Kapital & <br /> Immobilienberatungs-GmbH
                <br /> Alte Rabenstraße 22 <br />
                20148 Hamburg
              </address>

              <Link
                className="font-area-thin block"
                href={`tel:+49(0)417580210`}
              >
                T +49 (0)4175 80 21 0
              </Link>

              <Link
                className="font-area-thin block"
                href={`https://neubauteam.de/`}
                target="_blank"
              >
                www.neubauteam.de
              </Link>
            </div>

            <div className="flex-1 lg:flex-initial lg:w-[19rem] 2xl:w-[20.438rem]">
              <Image
                src={GrundwertLogo}
                width={286}
                height={55}
                alt="grundwer-logo"
                className="-ml-3"
              />

              <address className="not-italic leading-[1.55] my-2.5 md:my-[1.288rem] sm:h-[7.3125rem]">
                DIE GRUNDWERT GmbH <br /> Friedensallee 120 <br />
                22763 Hamburg
              </address>

              <Link
                className="font-area-thin block"
                href={`tel:+49 (0)40 23 96 83 13`}
              >
                T +49 (0)40 23 96 83 13
              </Link>
              <Link
                className="font-area-thin block"
                href={`https://www.grundwert.hamburg/`}
                target="_blank"
              >
                www.grundwert.hamburg
              </Link>
            </div>
          </div>
        </div>

        {/* bottom section */}
        <div className="flex flex-col  gap-12 sm:gap-16 justify-between text-lg md:text-xl midxl:flex-row mt-[3.75rem]">
          <div className="flex items-start gap-[1.3675rem] order-1 midxl:order-[0]">
            <Image
              src={LinesGroup}
              width={62}
              height={80}
              alt="graubner-logo"
            />
            <div className="flex flex-col gap-[.4375rem] -mt-2 font-area-thin">
              <Link
                href={"/impressum"}
                className="relative hover:text-red transition-all duration-500 ease-in-out"
              >
                Impressum
              </Link>
              <Link
                href={"/datenschutz"}
                className="relative hover:text-red transition-all duration-500 ease-in-out
            "
              >
                Datenschutz
                <p></p>
              </Link>

              <p>&copy; Roten Bleicher, {new Date().getFullYear()}</p>
            </div>
          </div>

          <div className="flex flex-col font-area-thin gap-12 sm:flex-row justify-between lg:gap-[3.438rem] xl:max-w-[46.1875rem] 2xl:gap-[4.6875rem]">
            <div className="flex-1 lg:flex-initial lg:w-[19rem] 2xl:w-[20.438rem]">
              <Image
                src={GraubnerLogo}
                width={260}
                height={53}
                alt="graubner-logo"
              />

              <Link
                className="font-area-thin inline-block mt-2 sm:mt-[1.4756rem]"
                href={`https://www.graubner-immobilien.de`}
                target="_blank"
              >
                www.graubner-immobilien.de
              </Link>
            </div>
            <div className="flex-1 lg:flex-initial lg:w-[19rem] 2xl:w-[20.438rem]">
              <Image
                src={SchenkLogo}
                width={300}
                height={27}
                alt="schenk-logo"
                className="sm:h-[3.375rem] object-contain object-left"
              />

              <Link
                className="font-area-thin inline-block mt-2 sm:mt-[1.4756rem]"
                href={`https://www.schenk-fleischhaker.de`}
                target="_blank"
              >
                www.schenk-fleischhaker.de
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
