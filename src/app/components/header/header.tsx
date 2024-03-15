"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Hamburger from "./menu/hamburger";
import Sidebar from "./menu/sidebar";
import HeaderLogo from "../../../../public/images/header-logo.svg";
import { menuLinks } from "./menu/menu-links";
import gsap from "gsap";
import { ScrollTrigger, ScrollToPlugin } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Link from "next/link";
import { useMenuStore } from "@/store/menu-store";

const Header = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const headerRef = useRef<HTMLDivElement | null>(null);

  const activeSection = useMenuStore((state) => state.activeSection);
  useGSAP(
    () => {
      console.log(document.body.clientHeight);
      ScrollTrigger.create({
        trigger: headerRef.current,
        start: `bottom ${headerRef?.current?.offsetHeight}px`,
        endTrigger: "#footer",
        pin: true,
        pinSpacing: false,
      });
    },
    { scope: headerRef },
  );

  const scrollToSection = (targetSection: string) => {
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: targetSection, offsetY: 113 },
      ease: "power2",
    });
  };

  return (
    <header
      ref={headerRef}
      className={`absolute max-h-[4.5rem] md:max-h-[7.063rem] h-full bottom-0 w-full ease-in-out bg-white z-10`}
    >
      <div className="container flex items-center justify-between py-2 h-full md:py-7">
        <ul className="hidden md:flex gap-4 lg:gap-5 xl:gap-10 text-[0.813rem] lg:text-base">
          {menuLinks.map((item, index) => (
            <li
              className={`text-red font-area-semibold relative xl:text-xl after:absolute after:-bottom-1 after:left-0 after:h-[0.041rem] after:w-0 after:bg-red after:transition-width after:duration-300 after:ease-in-out after:content-[''] hover:after:w-full ${
                activeSection === item?.id && "after:w-full"
              }`}
              key={index}
            >
              <button
                onClick={() => {
                  scrollToSection(item?.id);
                }}
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        <Hamburger />

        <div>
          <Link href={"#"}>
            <Image
              src={HeaderLogo}
              width={201}
              height={56}
              alt="roten-bleicher"
              className="w-32 lg:w-auto max-w-[201px]"
              onClick={() => {
                scrollToSection("#banner");
              }}
            />
          </Link>
        </div>
      </div>

      <Sidebar />
    </header>
  );
};

export default Header;
