import "./About.scss";
import React, { useEffect } from "react";
import Expirience from "../../assets/img/about1-img1.png";
import BTC from "../../assets/img/about1-img2.png";
import Someone from "../../assets/img/about1-img3.png";
import Shape from "../../assets/img/about1-shape-bg.png";
import Support1 from "../../assets/support-before.svg";
import Support2 from "../../assets/support-after.svg";
import Switch1 from "../../assets/switch-before.svg";
import Switch2 from "../../assets/switch-after.svg";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div className="about flex relative justify-center  h-[75vh]">
      <div className="left-box w-screen hidden xl:block" data-aos="fade-down">
        <img
          className="absolute top-20 left-30 w-100 h-100"
          src={Shape}
          alt="Shape"
        />
        <img className="absolute left-40" src={Expirience} alt="Shape" />

        <img className="absolute top-25 " src={BTC} alt="Shape" />

        <img
          className="absolute w-70 left-50 top-70"
          src={Someone}
          alt="Shape"
        />
      </div>
      <div
        className="right-box w-screen text-center xl:text-left flex items-center flex-col  xl:items-start "
        data-aos="fade-right"
      >
        <div className="first-line rounded-lg">
          <p>WHY ChOOSE PAYCOIN</p>
        </div>
        <p className="second-line">Where Innovation Meets You</p>
        <div className="third-line">
          <p>At PayCoin, we pride ourselves on offering a user-friendly</p>
          <p>
            platform that catersto both novice traders & seasoned PayCoin
            investors.
          </p>
        </div>
        <div className="box box1 rounded-4xl flex items-center">
          <img src={Switch1} className="img1 1w-20 h-20" alt="Switch" />
          <div>
            <a href="#">
              <p className="first">Crypto Exchange Safely</p>
            </a>
            <p>
              Our platform built on cutting-edge technology, ensuring
              lightning-fast transactions real-time.
            </p>
          </div>
        </div>
        <div className="box box2 rounded-4xl flex items-center">
          <img src={Support1} className="img2 w-20 h-20" alt="Switch" />
          <div>
            <a href="#">
              <p className="first">Crypto Exchange Safely</p>
            </a>
            <p>
              Our platform built on cutting-edge technology, ensuring
              lightning-fast transactions real-time.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
