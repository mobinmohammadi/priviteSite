import React from "react";
import { freeWorkData } from "../../../Data";
export default function ContentFreeWork() {
  return (
    <div className="grid  & > *:w-full container mr-2 ml-2  & > *:h-40  grid-cols-1 x:grid-cols-3 xs:grid-cols-2 mb-20 sm:grid-cols-4 gap-4  sm:gap-5 justify-center items-center ">
      {freeWorkData.map((item) => {
        return (
          <div className=" bg-white rounded-sm h-40">
            <img
              className="object-cover w-full max-h-[100px]"
              src={item.img}
              alt=""
            />
            <div className="flex flex-col gap-1 p-2">
              <span className="text-xs font-Morabba-Bold ">
                {item.title}
              </span>
              <div className="flex gap-1 justify-center items-center">
                <svg className="w-3 h-3">
                  <use href="#laptop"></use>
                </svg>
                <span className="text-x fo-bol">{item.creator}</span>
              </div>
            </div>
          </div>
        );
      })}
      {/* <div className=" bg-white rounded-sm h-[200px]">
        <img
          className="object-cover w-full h-28 "
          src="./Img/Supliments/1.PNG"
          alt=""
        />
        <div className="flex flex-col gap-1 p-2">
          <span className="text-xs font-Morabba-Bold ">سایت مکمل فروشی </span>
          <div className="flex gap-1 justify-center items-center">
            <svg className="w-3 h-3">
              <use href="#laptop"></use>
            </svg>
            <span className="text-x fo-bol">ساخته شده توسط Rc</span>
          </div>
        </div>
      </div>
      <div className=" bg-white rounded-sm h-[200px]">
        <div className="bg-white">
          <img
            className="object-cover w-full h-28 "
            src="./Img/Restorants/1.PNG"
            alt=""
          />
          <div className="flex flex-col gap-1 p-2">
            <span className="text-xs font-Morabba-Bold ">
              سایت رستوران مشابه رازینه{" "}
            </span>
            <div className="flex gap-1 justify-center items-center">
              <svg className="w-3 h-3">
                <use href="#laptop"></use>
              </svg>
              <span className="text-x fo-bol">ساخته شده توسط Rc</span>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
