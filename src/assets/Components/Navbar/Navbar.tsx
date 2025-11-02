import React from "react";

export default function Navbar() {
  return (
    <div className="bg-white flex items-center justify-between container p-4 fixed top-3  right-0 left-0 rounded-sm">
      <div className="font-Morabba-Bold text-sm pl-3">logo</div>
      <div className=" flex items-center gap-4">
        <a href="#">صحفه اصلی </a>
        <a href="#">نمونه کار ها</a>
        <a href="#">درباره ما</a>
        <a href="#">تماس با ما</a>
      </div>
      <div className="bg-[#0C9C90] rounded-bl-full  rounded-tr-full pt-2 pb-2 text-white pr-8 pl-8">
        <span className="text-sm">نیاز به مشاوره دارد؟</span>
      </div>
      <div className="flex gap-1 items-center justify-center">
        <svg className="h-5 w-5">
          <use href="#device-phone-mobile"></use>
        </svg>
        <span className="pt-1">090369945119</span>
      </div>
      <div className="">
        <svg className="w-5 h-5">
          <use href="#magnifying-glass"></use>
        </svg>
      </div>
      <div className=""></div>
    </div>
  );
}
