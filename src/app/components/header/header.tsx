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

const Header = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

  const headerRef = useRef<HTMLDivElement | null>(null);

  useGSAP(() => {
    ScrollTrigger.create({
      trigger: headerRef.current,
      start: `bottom ${headerRef?.current?.offsetHeight}px`,
      end: "max",
      pin: true,
      pinSpacing: false,
    });
  });

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
      className={`absolute max-h-[5.5rem] md:max-h-[7.063rem] h-full bottom-0 w-full ease-in-out bg-white z-10`}
    >
      <div className="container flex items-center justify-between py-2 h-full md:py-7">
        <ul className="hidden md:flex gap-4 lg:gap-5 xl:gap-10 text-[0.813rem] lg:text-base">
          {menuLinks.map((item, index) => (
            <li className="text-red font-area-semibold xl:text-xl" key={index}>
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
            />
          </Link>
        </div>
      </div>

      <Sidebar />
    </header>
  );
};

export default Header;
