"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import Banner from "./components/banner/banner";
import Footer from "./components/footer/footer";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);
  useGSAP(() => {
    window.scrollTo(0, 0);
    if (window.innerWidth > 768) {
      // ScrollSmoother.create({ smooth: 1, smoothTouch: 0 });
    }
  }, []);

  return (
    // <div id="smooth-wrapper">
    //   <div id="smooth-content">
    <main className="">
      <Banner />
    </main>
    // </div>
    // </div>
  );
}
