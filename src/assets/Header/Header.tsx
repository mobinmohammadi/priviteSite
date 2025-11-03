import React from "react";
import Typewriter from "typewriter-effect";

export default function Header() {
  return (
    <div className="bg-primary ring-2 ring-zinc-700 text-white font-Dana h-48 rounded-md p-5 rounded-bl-4xl">
      <div className="flex justify-between w-full items-center h-full">
        {/* متن سمت چپ */}
        <div className="text-xs flex flex-col gap-2">
          <span>مبین محمدی</span>
          <div className="min-w-40">
            <Typewriter
              options={{
                strings: [
                  "برنامه نویس فرانت‌ اند",
                  "متخصص ReactJs ",
                  " متخصص تایپ اسکریپت ",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
              }}
            />
          </div>
        </div>

        {/* سمت راست: شیپ‌ها و عکس */}
        <div className="relative w-40 h-40 flex items-center justify-center">
          {/* عکس داخل شیپ دوم */}
          <div className="absolute rounded-full overflow-hidden ring-5  ring-amber-300 ">
            <div className="">

            </div>
            <img
              src="/Img/user.jpg"
              alt="مبین"
              className="object-cover w-32 ring-1 ring-amber-800"
              // style={{
              //   clipPath:
              //     "polygon(35% 0, 94% 11%, 97% 73%, 62% 74%, 25% 100%, 22% 54%, 2% 15%)",
              // }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
