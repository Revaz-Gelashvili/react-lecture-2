import React from "react";
import GitHub from "../../assets/github.svg";
import Telegram from "../../assets/telegram.svg";
import "./Footer.scss";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Footer() {
  return (
    <div className="footer rounded-4xl h-16 flex items-center text-center justify-center bottom-0 left-0">
      <div className="flex items-center text-center justify-between w-sm md:w-150 lg:w-200 xl:w-300">
        <div className="content ">
          <h3>RateNest</h3>
        </div>
        <div className="about  hidden sm:block">
          <p className="flex gap-1">
            <span className="hidden md:block">
              First React Project Developed By
            </span>
            <a href="#" className="underline">
              Revaz Gelashvili
            </a>
          </p>
        </div>
        <div className="flex justify-center items-center gap-7">
          <a
            href="https://github.com/Revaz-Gelashvili/react-lecture-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={GitHub} alt="GitHub" className="w-8 h-8" />
          </a>
          <a
            href="https://t.me/re_gel"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Telegram} alt="Telegram" className="w-8 h-8" />
          </a>
        </div>
      </div>
    </div>
  );
}
