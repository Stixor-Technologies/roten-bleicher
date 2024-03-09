"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Hamburger from "./menu/hamburger";
import Sidebar from "./menu/sidebar";
import HeaderLogo from "../../../../public/images/header-logo.svg";
import { menuLinks } from "./menu/menu-links";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Link from "next/link";

const Header = () => {
  gsap.registerPlugin(ScrollTrigger);

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

  return (
    <header
      ref={headerRef}
      className={`absolute max-h-[78px] bottom-0 w-full py-5 ease-in-out bg-white md:py-5 z-10`}
    >
      <div className="container flex items-center justify-between">
        <ul className="hidden md:flex gap-4 lg:gap-5 text-[0.813rem] lg:text-base">
          {menuLinks.map((item, index) => (
            <li className="text-smoke-red font-area-bold" key={index}>
              {item.name}
            </li>
          ))}
        </ul>

        <Hamburger />

        <div>
          <Link href={"#"}>
            <Image
              src={HeaderLogo}
              width={130}
              height={100}
              alt="roten-bleicher"
            />
          </Link>
        </div>
      </div>

      <Sidebar />
    </header>
  );
};

export default Header;
