import MenuMobile from "../../MenuMobile/MenuMobile";

export default function Navbar() {

  return (
    <div className="bg-white flex items-center justify-between container p-4 fixed top-3  right-0 left-0 rounded-sm">
      <div className="cursor-pointer">
        <svg className="w-8 h-8 sm:hidden flex">
          <use href="#bars-3"></use>
        </svg>
      </div>
      <MenuMobile />
      <div className="hidden sm:flex">
        <div className="font-Morabba-Bold text-sm pl-3">logo</div>
        <div className=" flex items-center gap-2 sm:gap-4  & > *:text-sm & > *:sm:text-base">
          <a href="#">صحفه اصلی </a>
          <a href="#">نمونه کار ها</a>
          <a href="#">درباره ما</a>
          <a href="#">تماس با ما</a>
        </div>
      </div>
      <div className="bg-[#0C9C90] sm:rounded-bl-full  sm:rounded-tr-full pt-2 pb-2 text-white pr-4 pl-4 rounded-sm  sm:rounded-0">
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
  );
}
