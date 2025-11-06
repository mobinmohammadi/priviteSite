import React from "react";
import Typewriter from "typewriter-effect";

export default function Header() {
  return (
    <>
   <h1>این گل تقدیم به تو مخاطب خاص ❤️😘</h1> 
    <div className="bg-white border-r-[6px] border-primary rounded-md p-5 rounded-bl-[2rem]">
      <div className="flex justify-between sm:pt-12 sm:pb-12 sm:pl-12 w-full md:flex-row flex-col-reverse items-center h-full">
        
        {/* متن سمت چپ */}
        <div className="text-xs flex flex-col gap-2 mt-5 text-center md:text-right text-zinc-900">
          <span className="text-xs md:text-lg">مبین محمدی</span>
          <div className="min-w-40 text-xs md:text-base font-Morabba">
            <Typewriter
              options={{
                strings: [
                  "برنامه‌نویس فرانت‌اند",
                  "متخصص ReactJs",
                  "متخصص TypeScript",
                ],
                autoStart: true,
                loop: true,
                delay: 100,
                deleteSpeed: 50,
              }}
            />
          </div>
        </div>

        {/* عکس و آیکون‌ها */}
        <div className="relative flex items-center justify-center">
          {/* عکس */}
          <div className="rounded-full overflow-hidden ring-4 ring-amber-300">
            <img
              src="/Img/user.jpg"
              alt="مبین"
              className="object-cover  w-32 sm:w-52 ring-1 ring-amber-800"
            />
          </div>

          {/* آیکون‌ها با فاصله از عکس */}
          <svg className="w-12 h-12 bg-sky-600 sm:block hidden rounded-full absolute top-0 left-1/2 -translate-x-1/2 -translate-y-15">
            <use href="#react-svg"></use>
          </svg>

          <svg className="w-12 h-12 bg-zinc-800 sm:block hidden absolute right-0 rounded-full  top-1/2 translate-x-15 -translate-y-1/2">
            <use href="#js-svg"></use>
          </svg>

          <svg className="w-12 h-12 bg-amber-700 sm:block hidden absolute bottom-0 rounded-full  left-1/2 -translate-x-1/2 translate-y-15">
            <use href="#css-svg"></use>
          </svg>

          <svg className="w-12 h-12 bg-green-500 sm:block hidden absolute left-0 rounded-full  top-1/2 -translate-x-15 -translate-y-1/2">
            <use href="#typeScript-svg"></use>
          </svg>
        </div>
      </div>
    </div>
    </>
  );
}
  