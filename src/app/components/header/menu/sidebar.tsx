"use client";
import React, { useCallback, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useMenuStore } from "../../../../store/menu-store";
import { menuLinks } from "./menu-links";

const Sidebar = () => {
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const sideBarMenu = useRef<HTMLDivElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const activeSection = useMenuStore((state) => state.activeSection);

  const isMenuOpen = useMenuStore((state) => state.isMenuOpen);
  const setIsMenuOpen = useMenuStore((state) => state.setIsMenuOpen);

  const handleDocumentClick = useCallback(
    (event: MouseEvent) => {
      if (
        sideBarMenu.current &&
        menuButtonRef.current &&
        !sideBarMenu.current.contains(event.target as Node) &&
        !menuButtonRef.current?.contains(event.target as Node) &&
        isMenuOpen
      ) {
        setIsMenuOpen(false);
      }
    },
    [isMenuOpen],
  );

  useEffect(() => {
    window.addEventListener("resize", () => setIsMenuOpen(false));

    return () => {
      window.removeEventListener("resize", () => setIsMenuOpen(false));
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    // Cleanup function to reset the overflow property when the component unmounts
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isMenuOpen]);

  // Trigger animations for menu open state
  useEffect(() => {
    if (isMenuOpen) {
      if (sideBarMenu.current) {
        gsap.to(sideBarMenu.current, {
          x: sideBarMenu?.current?.clientWidth,
          duration: 0.4,
          ease: "power2.out",
        });
      }
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0.5,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    } else {
      if (sideBarMenu.current) {
        gsap.to(sideBarMenu.current, {
          x: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }
      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    }
  }, [isMenuOpen]);
  useEffect(() => {
    document.addEventListener("click", handleDocumentClick);
    return () => {
      document.removeEventListener("click", handleDocumentClick);
    };
  }, [handleDocumentClick]);

  const scrollToSection = (targetSection: string) => {
    gsap.to(window, {
      duration: 2,
      scrollTo: { y: targetSection, offsetY: 113 },
      ease: "power2",
    });
    setIsMenuOpen(false);
  };

  return (
    <>
      <div
        ref={sideBarMenu}
        className="fixed left-0 top-0 z-40 -ml-[100vw] h-screen w-screen overflow-y-auto
          will-change-auto"
      >
        <div className="absolute -z-10 h-full w-full bg-white"></div>
        <div
          className="mx-auto flex h-full w-full flex-col justify-center overflow-y-auto p-4 
            min-aspect-9/16:w-3/4 min-aspect:mx-0 min-aspect:h-3/5 min-aspect:w-full min-aspect:justify-center"
        >
          <ul className="space-y-[7vw] text-[7vw] px-8 md:text-left">
            {menuLinks.map((item, index) => (
              <li
                className={`text-red font-area-bold w-max relative after:absolute after:-bottom-1 after:left-0 after:h-[0.041rem] after:w-0 after:bg-red after:transition-width after:duration-300 after:ease-in-out after:content-[''] hover:after:w-full ${
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
        </div>
      </div>

      <div
        ref={overlayRef}
        className={`${
          isMenuOpen ? "pointer-events-auto" : "pointer-events-none"
        } fixed z-30 top-0 h-screen w-screen bg-black opacity-0`}
      ></div>
    </>
  );
};

export default Sidebar;
