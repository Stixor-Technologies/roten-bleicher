import React from "react";
import Link from "next/link";
import Image from "next/image";
import FooterLogo from "../../../../public/images/footer-logo.png";
import GraubnerLogo from "../../../../public/images/graubner-logo.svg";
import SchenkLogo from "../../../../public/images/schenk-logo.svg";

const Footer = () => {
  return (
    <footer className="bg-light-purple text-white">
      <div className="container flex flex-col py-12 gap-20 justify-between text-lg md:text-xl xl:flex-row">
        {/* left side */}
        <div className="flex flex-col font-area-thin gap-12 sm:flex-row lg:gap-20">
          <div className="flex-1">
            <Image
              src={GraubnerLogo}
              width={260}
              height={200}
              alt="graubner-logo"
            />
            <address className="not-italic leading-[1.55] my-4">
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

          <div className="flex-1">
            <Image
              src={SchenkLogo}
              width={330}
              height={200}
              alt="schenk-logo"
              className="sm:h-[54px]"
            />

            <address className="not-italic leading-[1.55] my-4">
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
        <div className="flex flex-col gap-8 xl:justify-between xl:items-end">
          <Image src={FooterLogo} width={330} height={200} alt="footer-logo" />

          <div>
            <Link
              href={"#"}
              target="_blank"
              className="relative after:absolute after:-bottom-1 after:left-0 after:h-[0.1rem] after:w-0 after:bg-red after:transition-width after:duration-300 after:ease-in-out after:content-[''] hover:after:w-full"
            >
              Impressum
            </Link>
            <span> | </span>
            <Link
              href={"#"}
              target="_blank"
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
