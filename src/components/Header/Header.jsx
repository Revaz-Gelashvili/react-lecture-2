import "./Header.scss";
import React, { useEffect, useState } from "react";
import Logo from "../../assets/coin-logo.svg";
import Sun from "../../assets/sun.svg";
import Profile from "../../assets/profile-pic.svg";
import Menu from "../../assets/menu.svg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

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
            <Link to="/">
              <li className="work">Home</li>
            </Link>
            <a href="#">
              <li>Rates</li>
            </a>
            <a href="#">
              <li>News</li>
            </a>
            <Link to="/register">
              <li className="work">Register</li>
            </Link>
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
        <div
          className="icon-wrapper cursor-pointer w-16 h-16 flex items-center justify-center"
          style={{
            background: `linear-gradient(135deg, rgb(90,101,245), rgb(181,225,255))`,
          }}
        >
          <svg
            className="icon w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
