import { useState } from "react";
import "./styles/_App.scss";
import Header from "./components/Header/Header";
import Exchange from "./components/Exchange/Exchange";
import Menu from "./components/Header/Menu";
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
      <Exchange />
      <Footer />
    </>
  );
}
