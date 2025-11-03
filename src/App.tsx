import "./App.css";
import Navbar from "./assets/Components/Navbar/Navbar";
import Footer from "./assets/Footer/Footer";
import FreeWork from "./assets/FreeWordk/FreeWork";
import Header from "./assets/Header/Header";
import HeaderTitle from "./assets/HeaderTitle/HeaderTitle";

function App() {
  return (
    <>
      <div className="container flex flex-col gap-5">
        <Navbar />

        <Header />
        <HeaderTitle title="نمونه کار ها"/>
        <FreeWork/>
        <Footer/>
      </div>
    </>
  );
}

export default App;
