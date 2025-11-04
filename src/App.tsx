import "./App.css";
import "./index.css";
import Navbar from "./assets/Components/Navbar/Navbar";
import Footer from "./assets/Footer/Footer";
import FreeWork from "./assets/FreeWork/FreeWork";
import Header from "./assets/Header/Header";
import HeaderTitle from "./assets/HeaderTitle/HeaderTitle";
import Counseling from "./assets/Counseling/Counseling";
import { useEffect, useState } from "react";
import Scills from "./assets/Components/Scills/Scills";

function App() {
  const [isShowModaleCounseling, setIsShowModaleCounseling] =
    useState<boolean>(false);
  useEffect(() => {
    console.log(isShowModaleCounseling);
  }, [isShowModaleCounseling]);
  return (
    <>
      <div className="container flex flex-col gap-5">
        <Navbar setIsShowModaleCounseling={setIsShowModaleCounseling} />

        <Header />
        <Scills/>
        <FreeWork />
        <div
          className={`fixed left-1/2 w-full top-1/2 transform transition-all duration-300 z-50
    ${
      isShowModaleCounseling
        ? "-translate-x-1/2 -translate-y-1/2 opacity-100"
        : "-translate-x-1/2 -translate-y-full opacity-0 pointer-events-none"
    }`}
        >
          <Counseling setIsShowModaleCounseling={setIsShowModaleCounseling} />
        </div>

        <Footer />
      </div>
    </>
  );
}

export default App;
