"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import Banner from "./components/banner/banner";
import DieLage from "./components/die-lage/die-lage";
import FAQ from "./components/grundrisse/grundrisse";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  useGSAP(() => {
    window.scrollTo(0, 0);
    if (window.innerWidth > 768) {
      ScrollSmoother.create({ smooth: 4, smoothTouch: 0 });
    }
  }, []);

  return (
    <main className="">
      <Banner />
      <FAQ />
    </main>
  );
}
