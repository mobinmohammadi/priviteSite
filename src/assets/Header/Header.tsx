import React from "react";

export default function Header() {
  return (
    <div className="bg-primary text-white font-Dana h-48 rounded-md p-5 rounded-bl-4xl">
      <div className="flex justify-between w-full items-center h-full">
        {/* متن سمت چپ */}
        <div className="text-xs flex flex-col gap-2">
          <span>مبین محمدی</span>
          <span className="min-w-40">برنامه نویس و <span className="text-rose-600">توسعه دهنده</span> وبسایت</span>
        </div>

        {/* سمت راست: شیپ‌ها و عکس */}
        <div className="relative w-80 h-80 flex items-center justify-center">
          {/* عکس داخل شیپ دوم */}
          <div className="absolute ">
            <img
              src="/Img/Mobin.jpg"
              alt="مبین"
              className="object-cover w-32 ring-1 ring-amber-800"
              style={{
                clipPath:
                  "polygon(35% 0, 94% 11%, 97% 73%, 62% 74%, 25% 100%, 22% 54%, 2% 15%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
