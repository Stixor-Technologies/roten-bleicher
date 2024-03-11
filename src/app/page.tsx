"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import Banner from "./components/banner/banner";
import Philosophy from "./components/philosophie/philosophy";
import DasObjekt from "./components/das-objekt/das-objekt";
import DetailSection from "./components/detail/detail";
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
      <Philosophy />
      <DasObjekt />
      <DetailSection />
      <FAQ />
    </main>
  );
}
