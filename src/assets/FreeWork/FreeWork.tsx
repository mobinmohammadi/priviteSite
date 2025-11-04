import React, { useEffect, useState } from "react";
import ContentFreeWork from "./ContentFreeWork/ContentFreeWork";
import { motion, AnimatePresence } from "framer-motion";
import HeaderTitle from "../HeaderTitle/HeaderTitle";

export default function FreeWork() {
  const menus = ["شخصی", "فروشگاهی", "خبری"];
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [titleFilter, setTitleFilter] = useState<string | number>("شخصی");
  const [isShowPost, setIsShowPost] = useState<boolean>(false);

  useEffect(() => {
    setIsShowPost(true);
  }, [titleFilter]);
  return (
    // <div className='text-xs'>این بخش به زودی تکمیل میشود 🙄</div>
    <>
      <HeaderTitle title="نمونه کار ها" />

      <div className="flex gap-6  flex-col  container">
        <div className="flex flex-col gap-5">
          <div className="flex justify-evenly & > *:text-xs  & > *:sm:text-sm & > *:w-24 & > *:sm:w-32 text-center & > *:cursor-pointer & > *:pt-2 & > *:pb-2   & > * >:pt-4  rounded-md text-sm bg-white">
            {menus.map((item, index) => (
              <span
                onClick={() => {
                  setActiveIndex(index);
                  setTitleFilter(item);
                  console.log(item);
                }}
                className={`${activeIndex == index ? "active-freeWork" : ""}`}
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex gap-1 text-xs md:text-sm mr-3">
            <span>فیلتر شده بر اساس پروژه های</span>
            <span className="font-bold border-b-2 border-b-red-600 border-dashed pb-1">{titleFilter}</span>
          </div>
        </div>
        <div className="flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="w-full"
            >
              <ContentFreeWork />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
