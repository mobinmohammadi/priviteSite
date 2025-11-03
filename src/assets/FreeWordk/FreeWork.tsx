import React from "react";
import ContentFreeWork from "./ContentFreeWork/ContentFreeWork";

export default function FreeWork() {
  return (
    // <div className='text-xs'>این بخش به زودی تکمیل میشود 🙄</div>
    <div className="flex gap-12 flex-col  container">
      <div className="flex justify-evenly & > *:text-xs  & > *:sm:text-sm & > *:w-24 & > *:sm:w-32 text-center & > *:cursor-pointer & > *:pt-2 & > *:pb-2   & > * >:pt-4  rounded-md text-sm bg-white">
        <span className="active-freeWork">شخصی</span>
        <span>فروشگاهی</span>
        <span>خبری</span>
      </div>
      <div className="flex justify-center  items-center">
        <ContentFreeWork />
      </div>
    </div>
  );
}
