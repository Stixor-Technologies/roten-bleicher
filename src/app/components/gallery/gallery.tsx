import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";
import { Pagination, Autoplay } from "swiper/modules";
import { StaticImageData } from "next/image";

interface GalleryProps {
  galleryImages: StaticImageData[];
  fromDetail?: boolean;
}

const Gallery: FC<GalleryProps> = ({ galleryImages, fromDetail }) => {
  return (
    <Swiper
      pagination={{
        clickable: true,
      }}
      loop={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Pagination, Autoplay]}
      breakpoints={{
        0: {
          direction: "horizontal",
        },
        1024: {
          direction: "vertical",
        },
      }}
      className="mySwiper w-full h-[50vh] lg:aspect-video lg:max-h-[891px] lg:h-full !flex !items-center flex-col lg:flex-row"
    >
      {galleryImages?.map((imageSrc, index) => (
        <SwiperSlide key={index}>
          <div
            className={`relative mx-auto size-full overflow-hidden z-0 ${
              index === galleryImages?.length - 1 &&
              !fromDetail &&
              "bg-light-purple"
            }`}
          >
            <Image
              className={`absolute top-0 left-0 h-full w-full rounded-none z-10 ${
                index === galleryImages?.length - 1
                  ? "object-contain"
                  : "object-cover"
              } `}
              src={imageSrc}
              width={1536}
              height={900}
              alt=""
              priority
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Gallery;
