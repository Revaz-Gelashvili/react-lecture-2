import { useState } from "react";
import "./styles/_App.scss";
import "./styles/main.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Exchange from "./components/Exchange/Exchange";
import Menu from "./components/Header/Menu";
<<<<<<< HEAD
import About from "./components/About/About";
=======
>>>>>>> 12234614555f9422b889abcbea8e7e991aee5fc1
import Footer from "./components/Footer/Footer";
import "./styles/tailwind.css";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div>
        <Header toggleSideBar={toggleSideBar} />
        <Menu isOpen={isOpen} toggleSideBar={toggleSideBar} />
      </div>
<<<<<<< HEAD
      <div className="w-full flex justify-center items-center flex-col">
        <div className="w-sm md:w-150 lg:w-200 xl:w-300">
          <Hero />
        </div>
        <Exchange />
        <div className="w-sm md:w-150 lg:w-200 xl:w-300">
          <About />
        </div>
        <Footer />
      </div>
=======
      <Exchange />
      <Footer />
>>>>>>> 12234614555f9422b889abcbea8e7e991aee5fc1
    </>
  );
}
