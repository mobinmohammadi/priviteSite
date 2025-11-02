import React from 'react'

export default function MenuMobile() {


  // console.log(isActive);
  
  return (
    
<div className="bg-white -right-52 rounded-l-sm shadow-2xl fixed  top-0 w-52 h-full ">
        <div className="absolute text-zinc-800 left-2 cursor-pointer top-3  rounded-full ">
          <svg className="w-5 h-5 ">
            <use href="#x-mark"></use>
          </svg>
        </div>
        <div className="flex justify-between flex-col h-full pb-5">
          <div className=" pt-5 border-b-slate-300 border-b-2 pb-5 flex items-center justify-center font-sans">
            <svg className="w-8 h-8">
              <use href="#code-svg"> </use>
            </svg>
          </div>
          <div className="flex flex-col justify-between h-full pr-2">
            <div className="  pt-5 pr-2 gap-2 h-full border-b-slate-300 border-b-2 sm:gap-4">
              <div className="flex flex-col justify-between gap-5">
                <a href="#">صحفه اصلی </a>
                <a href="#">نمونه کار ها</a>
                <a href="#">درباره ما</a>
                <a href="#">تماس با ما</a>
              </div>
            </div>
            <div className="flex flex-col pt-5 & > *:flex & > *:gap-1 gap-3 & > *:items-center  ">
              <div className="">
                <svg className="w-5 h-5">
                  <use href="#instgram-svg"></use>
                </svg>
                <span>آدرس اینستاگرام</span>
              </div>
              <div className="">
                <svg className="w-5 h-5">
                  <use href="#whatsapp-svg"></use>
                </svg>
                <span>آدرس واتساپ </span>
              </div>
            </div>
          </div>
        </div>
      </div>  )
}
