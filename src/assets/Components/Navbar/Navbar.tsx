import React, { useEffect, useState } from "react";
import MenuMobile from "../../MenuMobile/MenuMobile";

export default function Navbar() : React.ReactElement {

  const [open, setOpen] = useState<boolean>(false);
  const [isFixed , setIsFixed] = useState(false)


  useEffect(() => {
    const handelScrool = () => {
     if(window.screenY > 50){
      setIsFixed(true)

     }else{
      setIsFixed(false)
     }
    }
    window.addEventListener("scroll" , handelScrool)
    return () => {
      window.removeEventListener("scroll" , handelScrool)
    }
  },[]) 
 
  return (
    <>
    
    <div className={`bg-white  flex mt-2.5 items-center justify-between p-4 ${isFixed ? "fixed top-3" : ""}  right-0 left-0 rounded-sm`}>
      <div className="cursor-pointer ">
        <svg  onClick={() => setOpen(!open) } className="w-8 h-8 sm:hidden flex">
          <use href="#bars-3"></use>
        </svg>
      </div>
      <div className="fixed top-0 ring-0 z-50">

      <MenuMobile open={open} setOpen={setOpen} />
      </div>
      <div className="hidden sm:flex">
        <div className="font-Morabba-Bold text-sm pl-3">logo</div>
        <div className=" flex items-center gap-2 sm:gap-4  & > *:text-sm & > *:sm:text-base">
          <a href="#">صحفه اصلی </a>
          <a href="#">نمونه کار ها</a>
          <a href="#">درباره ما</a>
          <a href="#">تماس با ما</a>
        </div>
      </div>
      <div className="bg-primary sm:rounded-bl-full  sm:rounded-tr-full pt-2 pb-2 text-white pr-4 pl-4 rounded-sm  sm:rounded-0">
        <span className="text-xs sm:text-sm">نیاز به مشاوره دارد؟</span>
      </div>
      <div className="hidden sm:flex gap-1 items-center justify-center">
        <svg className="h-5 w-5">
          <use href="#device-phone-mobile"></use>
        </svg>
        <span className="pt-1">090369945119</span>
      </div>
      <div className="hidden sm:flex">
        <svg className="w-5 h-5">
          <use href="#magnifying-glass"></use>
        </svg>
      </div>
      <div className="hidden gap-5 sm:flex">
        <svg className="w-5 h-5">
          <use href="#instgram-svg"></use>
        </svg>
        <svg className="w-5 h-5">
          <use href="#whatsapp-svg"></use>
        </svg>
      </div>
    </div>
 
    </>
    
  );
}
