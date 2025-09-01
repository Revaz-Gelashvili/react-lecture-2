import GitHub from "../../assets/github.svg";
import Telegram from "../../assets/telegram.svg";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className="footer h-16 flex items-center text-center bg-gray-100 justify-center fixed bottom-0 left-0 w-full">
      <div className="flex items-center text-center justify-between w-sm md:w-150 lg:w-200 xl:w-300">
        <div className="content ">
          <h3>RateNest</h3>
        </div>
        <div className="about">
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
            <img src={GitHub} alt="GitHub" className="w-7 h-7" />
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
