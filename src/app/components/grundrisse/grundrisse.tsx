import React, { useRef, useState } from "react";
import Image from "next/image";
import PropertyStructure from "../../../../public/images/property-structure.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PlusIcon from "../../../../public/images/icons/plus-icon.svg";
import CrossIcon from "../../../../public/images/icons/cross-red.svg";
import Link from "next/link";
import ArrowRed from "../../../../public/images/icons/arrow-red.svg";
import useSectionInView from "@/utils/useSectionInView";

type FaqITemType = {
  question: string;
  answer: string;
  floor: string;
  livingSpace: string;
  rooms: string;
};

const faq: FaqITemType[] = [
  {
    question: "Wohnungstyp 1",
    answer:
      "Mauris molestie sed ex ut sagittis. Aliquam nulla mauris, mattis eu elemen tum vitae, cursus et ipsum. Morbi a aliquet lacus. Vivamus tincidunt felis quis arcu finibus, nec consequat metus interdum. Pellentesque quis mauris egestas, ullamcorper metus in, porttitor nulla. Donec ornare, urna non lobortis ultricies.",
    floor: "1. Obergeschoss",
    livingSpace: "ca. 56 m2",
    rooms: "3 Zimmer",
  },
  {
    question: "Wohnungstyp 2",
    answer:
      "Mauris molestie sed ex ut sagittis. Aliquam nulla mauris, mattis eu elemen tum vitae, cursus et ipsum. Morbi a aliquet lacus. Vivamus tincidunt felis quis arcu finibus, nec consequat metus interdum. Pellentesque quis mauris egestas, ullamcorper metus in, porttitor nulla. Donec ornare, urna non lobortis ultricies.",
    floor: "1. Obergeschoss",
    livingSpace: "ca. 56 m2",
    rooms: "3 Zimmer",
  },
  {
    question: "Wohnungstyp 3",
    answer:
      "Mauris molestie sed ex ut sagittis. Aliquam nulla mauris, mattis eu elemen tum vitae, cursus et ipsum. Morbi a aliquet lacus. Vivamus tincidunt felis quis arcu finibus, nec consequat metus interdum. Pellentesque quis mauris egestas, ullamcorper metus in, porttitor nulla. Donec ornare, urna non lobortis ultricies.",
    floor: "1. Obergeschoss",
    livingSpace: "ca. 56 m2",
    rooms: "3 Zimmer",
  },
  {
    question: "Wohnungstyp 4",
    answer:
      "Mauris molestie sed ex ut sagittis. Aliquam nulla mauris, mattis eu elemen tum vitae, cursus et ipsum. Morbi a aliquet lacus. Vivamus tincidunt felis quis arcu finibus, nec consequat metus interdum. Pellentesque quis mauris egestas, ullamcorper metus in, porttitor nulla. Donec ornare, urna non lobortis ultricies.",
    floor: "1. Obergeschoss",
    livingSpace: "ca. 56 m2",
    rooms: "3 Zimmer",
  },
  {
    question: "Wohnungstyp 5",
    answer:
      "Mauris molestie sed ex ut sagittis. Aliquam nulla mauris, mattis eu elemen tum vitae, cursus et ipsum. Morbi a aliquet lacus. Vivamus tincidunt felis quis arcu finibus, nec consequat metus interdum. Pellentesque quis mauris egestas, ullamcorper metus in, porttitor nulla. Donec ornare, urna non lobortis ultricies.",
    floor: "1. Obergeschoss",
    livingSpace: "ca. 56 m2",
    rooms: "3 Zimmer",
  },
];

const FaqItem = ({
  id,
  faqItem,
  isActive,
  toggleActive,
}: {
  id: number;
  faqItem: FaqITemType;
  isActive: boolean;
  toggleActive: (id: number) => void;
}) => {
  const answerRef = useRef<HTMLDivElement | null>(null);
  const tallbarPlus = useRef<HTMLSpanElement | null>(null);
  const flatbarPlus = useRef<HTMLSpanElement | null>(null);

  const { contextSafe } = useGSAP();

  const questionClicked = contextSafe(() => {
    const tl = gsap.timeline();

    const activeFaq = document.querySelector(".active");
    const tallBar = document.querySelector(".icon-animate");
    if (activeFaq) {
      gsap.to(activeFaq, {
        height: "0",
        marginTop: "0px",
        marginBottom: "0px",
        duration: 0.4,
      });
      activeFaq?.classList.remove("active");

      tl.to(tallBar, {
        scale: 1,
        duration: 0.2,
      });

      tl.to(tallBar, {
        rotate: 90,
        duration: 0.2,
      });
    }

    if (!isActive) {
      gsap.to(answerRef.current, {
        height: "auto",
        marginTop: "63px",
        marginBottom: "30px",
        duration: 0.4,
      });
      answerRef.current?.classList.add("active");
      tallbarPlus.current?.classList.add("icon-animate");

      tl.to(tallbarPlus.current, {
        rotate: 180,
        duration: 0.2,
      });

      tl.to(flatbarPlus.current, {
        scale: 0,
        duration: 0.2,
      });

      tl.to(tallbarPlus.current, {
        scale: 0,
        duration: 0.2,
      });
    } else {
      gsap.to(answerRef.current, {
        height: 0,
        marginTop: "0px",
        marginBottom: "0px",
        duration: 0.4,
      });
      answerRef.current?.classList.remove("active");

      tl.to(flatbarPlus.current, {
        scale: 1,
        duration: 0.2,
      });

      tl.to(tallbarPlus.current, {
        scale: 1,
        duration: 0.2,
      });

      tl.to(tallbarPlus.current, {
        rotate: 90,
        duration: 0.2,
      });
    }

    toggleActive(id);
  });

  return (
    <div className={` border-b-[1px] border-b-white py-4`}>
      <div
        className="group flex items-center gap-8 relative cursor-pointer"
        onClick={questionClicked}
      >
        <span
          className={`text-[2rem] md:text-[4.375rem] flex-1 md:flex-initial max-w-[34.688rem] w-full text-dark-purple inline-block group-hover:text-red transition-all ease-in-out duration-300 ${
            isActive && "text-red"
          }`}
        >
          {faqItem?.question}
        </span>

        <div className="md:flex-1 flex justify-between relative">
          {!isActive && (
            <Image
              src={PlusIcon}
              width={44}
              height={44}
              alt="expand-answer-icon"
              className="opacity-100 group-hover:opacity-100 transition-all ease-in-out duration-300 w-[2rem] md:w-auto max-w-[2.75rem]"
            />
          )}

          {isActive && (
            <Image
              src={CrossIcon}
              width={30}
              height={30}
              alt="expand-answer-icon"
              className="absolute right-0 top-1/2 -translate-y-1/2 w-[2rem] lg:w-auto max-w-[2.5rem]"
            />
          )}
        </div>
      </div>

      <div
        ref={answerRef}
        className="flex flex-col h-0 overflow-hidden gap-9 2xl:gap-[8.25rem] xl:flex-row"
      >
        <div className="flex-1 md:text-xl md:-mb-2 max-w-[42.125rem]">
          <span className="text-white font-area-thin inline-block">
            {faqItem.answer}
          </span>
          <Link
            href="#"
            className="group mt-7.5 inline-flex items-center gap-4 self-center mt-6 md:mt-[2.875rem]"
          >
            <Image src={ArrowRed} width={41} height={36} alt="" />

            <span className="font-area-bold md:text-xl tranition-all duration-300 text-red group-hover:pl-2 ">
              GRUNDRISS RUNTERLADEN
            </span>
          </Link>
        </div>

        <div className="flex-1 flex flex-col gap-9 2xl:gap-[8.25rem] sm:flex-row">
          <div className="flex-1 lg:flex-initial flex flex-col justify-between gap-4 xl:gap-0 font-area-bold">
            <div className="flex flex-col md:text-[1.438rem]">
              <span className="text-white">Etage</span>
              <span className="text-red">{faqItem.floor}</span>
            </div>

            <div className="flex flex-col md:text-[1.438rem]">
              <span className="text-white">Wohnfläche</span>
              <span className="text-red">{faqItem.livingSpace}</span>
            </div>

            <div className="flex flex-col md:text-[1.438rem]">
              <span className="text-white">Zimmer</span>
              <span className="text-red">{faqItem.rooms}</span>
            </div>
          </div>

          <div className="flex-1 sm:self-end">
            <Image
              src={PropertyStructure}
              width={170}
              height={100}
              alt=""
              className="w-full md:max-h-[220px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState<number>(-1);
  const { ref } = useSectionInView("#gundrisse");

  const toggleActive = (id: number) => {
    setActiveFaq((prevActiveFaq) => (prevActiveFaq === id ? -1 : id));
  };

  return (
    <section ref={ref} id="gundrisse" className="bg-light-purple mt-[1.938rem]">
      <div className="container py-10 md:py-[7.82vw]">
        <div className="flex flex-col justify-between lg:flex-row">
          <h3 className="font-area-bold mb-6 md:text-[1.438rem] w-[35%]">
            Grundrisse
          </h3>

          <p className="text-white md:text-[1.563rem] flex-1">
            Morbi aliquam, neque eu commodo blandit, odio ipsum facilisis sem,
            ut rutrum augue sapien ut velit. Maecenas semper dignissim
            porttitor. Phasellus viverra, turpis id imperdiet commodo, augue
            turpis tincidunt nisl, et pulvinar tellus tellus vel libero. Duis
            hendrerit lacus et hendrerit auctor.
          </p>
        </div>

        {/* faqs */}
        <div className="mt-10 md:mt-[5.188rem] border-b-white border-t-[1px]">
          {faq.map((faqItem, index) => (
            <FaqItem
              id={index}
              faqItem={faqItem}
              isActive={activeFaq === index}
              toggleActive={toggleActive}
              key={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
