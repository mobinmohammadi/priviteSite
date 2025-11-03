import React, { SetStateAction } from "react";

interface counselingType {
  setIsShowModaleCounseling: React.Dispatch<SetStateAction<boolean>>;
}

export default function Counseling({
  setIsShowModaleCounseling,
}: counselingType) {
  return (
    <div className="bg-white flex flex-col gap-3 justify-evenly items-center p-5 w-[90%] rounded-sm shadow-2xl h-48 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed">
      <div className="flex ">
        <svg onClick={() => setIsShowModaleCounseling(false)} className="w-5 h-5 cursor-pointer absolute left-2 top-3 ">
          <use href="#x-mark"></use>
        </svg>
        <svg
          className="size-8 md:size-10 mx-auto"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.333 3.33337V8.33337"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M26.667 3.33337V8.33337"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M5.83301 15.15H34.1663"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M29.9997 38.3333C33.6816 38.3333 36.6663 35.3486 36.6663 31.6667C36.6663 27.9848 33.6816 25 29.9997 25C26.3178 25 23.333 27.9848 23.333 31.6667C23.333 35.3486 26.3178 38.3333 29.9997 38.3333Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M31.7834 33.5166L28.25 30"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M31.7501 30.0333L28.2168 33.5667"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M35 14.1667V27.2667C33.7833 25.8834 32 25 30 25C26.3167 25 23.3333 27.9834 23.3333 31.6667C23.3333 32.9167 23.6833 34.1 24.3 35.1C24.65 35.7 25.1 36.2334 25.6167 36.6667H13.3333C7.5 36.6667 5 33.3334 5 28.3334V14.1667C5 9.16671 7.5 5.83337 13.3333 5.83337H26.6667C32.5 5.83337 35 9.16671 35 14.1667Z"
            stroke="#292D32"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M19.9921 22.8333H20.0071"
            stroke="#292D32"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M13.8242 22.8333H13.8391"
            stroke="#292D32"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
          <path
            d="M13.8242 27.8333H13.8391"
            stroke="#292D32"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </div>
      <span className="font-Dana text-zinc-800 font-bold text-md sm:text-sm">
        متاسفانه فعلا نتظیم نشده است 😥
      </span>
      <span className="text-slate-500 text-xs sm:text-md tracking-wider">
        {" "}
        احتمالا مدتی بعد اضافه خواهد شد این بخش ♻
      </span>
    </div>
  );
}
