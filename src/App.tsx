import "./App.css";
import Navbar from "./assets/Components/Navbar/Navbar";
import Footer from "./assets/Footer/Footer";
import Header from "./assets/Header/Header";

function App() {
  return (
    <>
      <div className="container flex flex-col gap-5">
        <Navbar />

        <Header />
        <Footer/>
      </div>
    </>
  );
}

export default App;
