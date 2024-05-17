import React, { useMemo, useState } from "react";

import { scrollableTabs } from "./menu.module.scss";
import ImageBox from "../boxes/boxImage";
import { useMenuList } from "../../context/MenuContext";
import ScrollableNavbar from "../navbar/ScrollableNavbar";
import BoxFull from "../boxes/boxfull";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import InfiniteScroll from "../infinitescroll/InfiniteScroll";
import Basket from "../basket/Basket";

export default function Menu() {
  const [openTab, setOpenTab] = useState<string[]>([
    "Popüler",
    "Restoranın en çok tercih edilen ürünleri",
  ]);

  const { typeOfFoodMap, foodTypeList, cheapestFoods } = useMenuList();

  const memoTypeOfFoodMap = useMemo(() => typeOfFoodMap, [typeOfFoodMap]);
  const memoFoodTypeList = useMemo(() => foodTypeList, [foodTypeList]);
  const memoCheapestFoods = useMemo(() => cheapestFoods, [cheapestFoods]);

  return (
    <>
      <div className={scrollableTabs}>
        <ScrollableNavbar
          tabs={memoFoodTypeList}
          activeTab={openTab[0]}
          onClickEvent={setOpenTab}
        />
      </div>

      <h2>{openTab[0]}</h2>
      <p>{openTab[1]}</p>
      <div className="block mb-20">
        <Swiper
          breakpoints={{
            360: {
              slidesPerView: 2,
            },
            600: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 4,
            },
          }}
          centeredSlides={false}
          spaceBetween={0}
        >
          {memoTypeOfFoodMap.get(openTab[0])?.map((item) => {
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

      <InfiniteScroll data={memoCheapestFoods}>
        {(ItemData) => <BoxFull ItemData={ItemData} />}
      </InfiniteScroll>

      <Basket />
    </>
  );
}
