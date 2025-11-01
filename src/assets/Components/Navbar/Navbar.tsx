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
      <div className=""></div>
      <div className=""></div>
      <div className=""></div>
    </div>
  );
}
