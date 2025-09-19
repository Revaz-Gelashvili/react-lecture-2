import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { LoadingOutlined } from "@ant-design/icons";
import { Checkbox, Flex, Spin } from "antd";
import Home from "./Pages/Home";
import Register from "./Pages/Register";
import Header from "./components/Header/Header";
import Menu from "./components/Header/Menu";
import "./styles/_App.scss";
import "./styles/main.scss";
import "./styles/tailwind.css";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const toggleChange = (event) => {
    setDarkMode(event.target.checked);
  };

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className=" flex transition-all ease-linear items-center justify-center h-screen bg-white">
        <Flex align="center" gap="middle" className="flex-col text-center">
          <Spin indicator={<LoadingOutlined style={{ fontSize: 70 }} spin />} />
        </Flex>
      </div>
    );
  }

  const toggleSideBar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={darkMode ? "dark" : ""}>
      <Header toggleSideBar={toggleSideBar} />
      <Menu isOpen={isOpen} toggleSideBar={toggleSideBar} />
      {/* <input type="checkbox" checked={darkMode} onChange={toggleChange} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </div>
  );
}
