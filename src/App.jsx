import { useState } from "react";
import "./styles/_App.scss";
import "./styles/main.scss";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import Exchange from "./components/Exchange/Exchange";
import Menu from "./components/Header/Menu";
import About from "./components/About/About";
import Comments from "./components/Comments/Comments";
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
      <div className="w-full flex justify-center items-center flex-col">
        <div className="w-sm md:w-150 lg:w-200 xl:w-300">
          <Hero />
        </div>
        <Exchange />
        <div className="w-sm md:w-150 lg:w-200 xl:w-300">
          <About />
          <Comments />
        </div>
        <Footer />
      </div>
    </>
  );
}
