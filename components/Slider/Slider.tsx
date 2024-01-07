"use client";

import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import required modules
import { Pagination } from "swiper/modules";

// Import Swiper styles before global styles
import "swiper/css";
// import "swiper/css/pagination";

// Import globals.css last
import "../../app/globals.css";

const Slider = () => {
  const items = [
    {
      title: "Family Gathering",
      desc: "We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.",
      image: "family-gathering",
      url: "",
    },
    {
      title: "Special Events",
      desc: "Whether it’s a romantic dinner or special date you’re celebrating with others we’ll look after you. We’ll be sure to mark your special date with an unforgettable meal.",
      image: "special-events",
      url: "",
    },
    {
      title: "Social Events",
      desc: "Are you looking to have a larger social event? No problem! We’re more than happy to cater for big parties. We’ll work with you to make your event a hit with everyone.",
      image: "social-events",
      url: "",
    },
  ];

  const pagination = {
    clickable: true,
    el: "#slider-custom-pagination",
    bulletClass: "bullet",
    renderBullet: function (index: number, className: string) {
      // Get the h2 text from the current slide
      const slideText = document
        .querySelectorAll(".swiper-slide")
        [index].querySelector("h2")?.textContent;

      return `<li class="${className}">${slideText ?? "-"}</li>`;
    },
  };

  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        noSwiping={true}
        noSwipingClass="swiper-slide"
        breakpoints={{
          992: {
            // lg
            direction: "vertical",
          },
        }}
        // direction={"vertical"}
        pagination={pagination}
        modules={[Pagination]}
        className="lg:h-[37.5rem]"
      >
        <ul
          id="slider-custom-pagination"
          className="
            absolute top-[28rem] !left-1/2 -translate-x-1/2 z-10
            container
            flex flex-col md:max-lg:flex-row
            items-center
            gap-4
            md:max-lg:justify-between
            md:max-lg:basis-1/3 
            md:max-lg:gap-0"
        ></ul>

        {/* Loop items */}
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <Item {...item} />
          </SwiperSlide>
        ))}
        {/* End - Loop items */}
      </Swiper>
    </>
  );
};

const Item = ({
  title,
  desc,
  image,
  url,
}: {
  title: string;
  desc: string;
  image: string;
  url: string;
}) => (
  <div className="max-lg:container h-full flex max-lg:flex-col gap-48">
    {/* Image */}
    <div
      className="
        flex-shrink-0
        lg:basis-5/12 xl:basis-[37.5vw] 
        h-[25rem] md:h-[22.5rem] lg:h-[37.5rem] 
        [&>img]:w-full [&>img]:h-full [&>img]:object-cover [&>img]:img-shadows"
    >
      <img
        src={`./images/homepage/${image}-desktop.jpg`}
        alt={title}
        className="max-lg:hidden"
      />
      <img
        src={`./images/homepage/${image}-tablet.jpg`}
        alt={title}
        className="hidden md:max-lg:block"
      />
      <img
        src={`./images/homepage/${image}-mobile.jpg`}
        alt={title}
        className="md:hidden"
      />
    </div>
    {/* End - Image */}

    {/* Desc */}
    <div className="lg:basis-5/12 xl:basis-[30.9025vw] max-lg:text-center">
      <h2 className="heading-l pb-3 md:pb-5">{title}</h2>

      <p>{desc}</p>
    </div>
    {/* End - Desc */}
  </div>
);

export default Slider;
