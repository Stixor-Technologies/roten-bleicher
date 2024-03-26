import React from "react";
import Link from "next/link";
import Image from "next/image";
import FooterLogo from "../../../../public/images/footer/footer-logo.svg";
import GraubnerLogo from "../../../../public/images/footer/graubner-logo.svg";
import SchenkLogo from "../../../../public/images/footer/schenk-logo.svg";

const Footer = () => {
  return (
    <footer id="#footer" className="bg-light-purple text-white">
      <div className="container flex flex-col py-14 pb-8 md:pt-[3.313rem] md:pb-[3.875rem] gap-12 sm:gap-16 justify-between text-lg md:text-xl midxl:flex-row">
        {/* left side */}
        <div className="flex flex-col font-area-thin gap-12 sm:flex-row lg:gap-[5.438rem] xl:max-w-[47.5rem]">
          <div className="flex-1 xl:flex-initial xl:w-[20.438rem]">
            <Image
              src={GraubnerLogo}
              width={260}
              height={53}
              alt="graubner-logo"
            />
            <address className="not-italic leading-[1.55] my-2.5 md:my-[1.288rem]">
              Graubner Projektentwicklung <br /> GmbH & Co. KG
              <br /> Schätzendorfer Straße 15 <br />
              21272 Egestorf
            </address>

            <Link
              className="font-area-bold inline-block md:mt-3"
              href={`tel:+49(0)417580210`}
            >
              T +49 (0)4175 80 21 0
            </Link>
          </div>

          <div className="flex-1 xl:flex-initial xl:w-[21.625rem]">
            <Image
              src={SchenkLogo}
              width={404}
              height={31}
              alt="schenk-logo"
              className="sm:h-[54px] object-contain"
            />

            <address className="not-italic leading-[1.55] my-2.5 md:my-[1.288rem]">
              Schenk Fleischhaker <br /> Architekten Partnerschaft mbB <br />
              Stahltwiete 19a
              <br /> 22761 Hamburg
            </address>

            <Link
              className="font-area-bold inline-block md:mt-3"
              href={`tel:+49-40-39804678-0`}
            >
              Tel +49-40-398 046 78-0
            </Link>
          </div>
        </div>

        {/* right side */}
        <div className="flex flex-col midxl:justify-between midxl:items-end font-area-thin gap-[1.288rem] md:gap-10 xl:self-center xl:gap-[7.063rem]">
          <Image src={FooterLogo} width={334} height={94} alt="footer-logo" />

          <div className="text-right xxs:text-left">
            <Link
              href={"/impressum"}
              className="relative hover:text-red transition-all duration-500 ease-in-out"
            >
              Impressum
            </Link>
            <span className="mx-1.5"> | </span>
            <Link
              href={"/datenschutz"}
              className="relative hover:text-red transition-all duration-500 ease-in-out
            "
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
