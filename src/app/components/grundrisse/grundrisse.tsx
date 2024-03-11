import React, { useRef, useState } from "react";
import Image from "next/image";
import FooterLogo from "../../../../public/images/footer/footer-logo.svg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import PlusIcon from "../../../../public/images/icons/plus-icon.svg";
import CrossIcon from "../../../../public/images/icons/cross-red.svg";

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
    console.log(tallBar);
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
        marginTop: "40px",
        marginBottom: "20px",
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
    <div className={` border-t-white border-t-[1px] py-3`}>
      <div
        className="group flex items-center gap-4 relative cursor-pointer"
        onClick={questionClicked}
      >
        <span
          className={`text-[clamp(2rem,5vw,4.375rem)] text-dark-purple inline-block md:max-w-[40vw] w-full group-hover:text-red transition-all ease-in-out duration-300`}
        >
          {faqItem?.question}
        </span>

        <div className="flex-1 flex justify-between relative">
          {!isActive && (
            <Image
              src={PlusIcon}
              width={25}
              height={25}
              alt="expand-answer-icon"
              className="opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300"
            />
          )}

          {isActive && (
            <Image
              src={CrossIcon}
              width={25}
              height={25}
              alt="expand-answer-icon"
              className="absolute right-0 top-1/2 -translate-y-1/2"
            />
          )}
        </div>

        {/* {!isActive ? (
          <Image
            src={!isActive ? PlusIcon : CrossIcon}
            width={25}
            height={25}
            alt="expand-answer-icon"
            className="opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300"
          />
        ) : (
          <Image
            src={CrossIcon}
            width={20}
            height={20}
            alt="close-answer-icon"
            className="absolute right-0 top-1/2 -translate-y-1/2"
          />
        )} */}

        <div></div>
      </div>

      <div
        ref={answerRef}
        className="flex flex-col h-0 overflow-hidden gap-9 lg:gap-14 lg:flex-row"
      >
        <div className="flex-1 md:text-xl">
          <span className="text-white font-area-thin">{faqItem.answer}</span>
        </div>

        <div className="flex-1 flex flex-col gap-9 lg:gap-14 sm:flex-row">
          <div className="space-y-2 flex-1 lg:flex-initial">
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

          <div className="flex-1">
            <Image
              src={FooterLogo}
              width={330}
              height={200}
              alt="footer-logo"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [activeFaq, setActiveFaq] = useState<number>(-1);

  const toggleActive = (id: number) => {
    setActiveFaq((prevActiveFaq) => (prevActiveFaq === id ? -1 : id));
  };

  return (
    <section className="bg-light-purple">
      <div className="container py-[8vw]">
        <div className="flex flex-col justify-between lg:flex-row">
          <h3 className="font-area-bold mb-6 md:text-xl w-[35%]">Grundrisse</h3>

          <p className="text-white md:text-[1.563rem] flex-1">
            Morbi aliquam, neque eu commodo blandit, odio ipsum facilisis sem,
            ut rutrum augue sapien ut velit. Maecenas semper dignissim
            porttitor. Phasellus viverra, turpis id imperdiet commodo, augue
            turpis tincidunt nisl, et pulvinar tellus tellus vel libero. Duis
            hendrerit lacus et hendrerit auctor.
          </p>
        </div>

        {/* faqs */}
        <div className="mt-10 md:mt-20 border-b-white border-t-[1px]">
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
