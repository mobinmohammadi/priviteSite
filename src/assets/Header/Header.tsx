import React from "react";

export default function Header() {
  return (
    <div className="bg-primary text-white font-Dana h-48 rounded-md p-5 rounded-bl-4xl">
      <div className="flex justify-between items-center h-full">
        {/* متن سمت چپ */}
        <div className="text-sm flex flex-col gap-2">
          <span>مبین محمدی</span>
          <div>برنامه نویس و توسعه دهنده وبسایت</div>
        </div>

        {/* سمت راست: شیپ‌ها و عکس */}
       <div className="relative w-80 h-80 flex items-center justify-center">


  {/* عکس داخل شیپ دوم */}
  <div className="absolute  top-1/2 left-1/2 w-42 h-42 -translate-x-1/2 -translate-y-1/2">
    <img
      src="/Img/Mobin.jpg"
      alt="مبین"
      className="w-full h-full object-cover ring-1 ring-amber-800"
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
