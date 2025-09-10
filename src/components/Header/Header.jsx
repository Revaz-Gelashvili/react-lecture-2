import "./Header.scss";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/coin-logo.svg";
import Sun from "../../assets/sun.svg";
import Profile from "../../assets/profile-pic.svg";
import Menu from "../../assets/menu.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Header({ toggleSideBar }) {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  return (
    <div
      className="header-box rounded-4xl bg-white flex items-center justify-between z-10 fixed "
      data-aos="fade-down"
    >
      <div className="flex items-center gap-6">
        <a href="#">
          <h3 className="webName">RateNest</h3>
        </a>
        <a href="#">
          <img src={Logo} alt="Logo" className="w-10 h-10 hidden lg:block" />
        </a>
      </div>
      <div className="flex items-center gap-6">
        <div className="first-line rounded-lg hidden sm:block">
          <p>{time.toLocaleTimeString()}</p>
        </div>
        <div className="hidden md:block">
          <ul className="flex gap-4">
            <a href="#">
              <li>Exchange</li>
            </a>
            <a href="#">
              <li>Rates</li>
            </a>
            <a href="#">
              <li>Charts</li>
            </a>
            <a href="#">
              <li>News</li>
            </a>
          </ul>
        </div>
        <div className="block md:hidden">
          <img
            src={Menu}
            onClick={toggleSideBar}
            alt="menu"
            className="w-10 h-10 cursor-pointer"
          />
        </div>
        <img
          src={Sun}
          alt="Sun"
          className="hidden sm:block w-10 h-10 cursor-pointer"
        />
        <img
          src={Profile}
          alt="Sun"
          className="w-10 h-10 cursor-pointer hidden md:block"
        />
      </div>
    </div>
  );
}
