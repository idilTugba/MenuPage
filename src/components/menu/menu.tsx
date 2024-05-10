import React, { useState } from "react";

import { scrollableTabs } from "./menu.module.scss";
import ImageBox from "../boxes/boxImage";
import { useMenuList } from "../../context/MenuContext";
import ScrollableNavbar from "../navbar/ScrollableNavbar";
import BoxFull from "../boxes/boxfull";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

export default function Menu() {
  const [openTab, setOpenTab] = useState<string[]>([
    "Popüler",
    "Restoranın en çok tercih edilen ürünleri",
  ]);

  const { typeOfFoodMap, foodTypeList, cheapestFoods } = useMenuList();

  return (
    <>
      <div className={scrollableTabs}>
        <ScrollableNavbar
          tabs={foodTypeList}
          activeTab={openTab[0]}
          onClickEvent={setOpenTab}
        />
      </div>

      <h2>{openTab[0]}</h2>
      <p>{openTab[1]}</p>
      <div className="block">
        <Swiper
          breakpoints={{
            360: {
              slidesPerView: 2,
            },
            568: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
          }}
          centeredSlides={false}
          spaceBetween={0}
        >
          {typeOfFoodMap.get(openTab[0])?.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <ImageBox data={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>

      <div className="block">
        <h2>Cazip Fiyatlar</h2>
        <p>Cazip Fiyatlı ve Birbirinden lezzetli menüler.</p>
      </div>

      {cheapestFoods.map((item) => {
        return <BoxFull key={item.id} data={item} />;
      })}
    </>
  );
}
