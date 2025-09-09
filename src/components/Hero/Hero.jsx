import "./Hero.scss";
import React from "react";
import { Button, Input, Flex } from "antd";
import PayPal from "../../assets/bank1.svg";
import Visa from "../../assets/bank2.svg";
import MasterCard from "../../assets/bank3.svg";
import HeroMobile from "../../assets/img/hero1-mobile1.png";
import Coins from "../../assets/img/hero1-coin.png";
import AppleBtn from "../../assets/img/apple-btn.png";
import HeroMan from "../../assets/img/hero1-main.png";

export default function Hero() {
  return (
    <div className="hero h-[50rem]">
      <div className="content flex items-center justify-center">
        <div className="left-box">
          <div className="first-line rounded-lg">
            <p>Invest in the Future of RateNest</p>
          </div>
          <p className="second-line">
            Exchange With <br /> RateNest App
          </p>
          <div className="third-line">
            <p>At PayCoin, we're committed to providing you with at</p>
            <p>a cutting-edge exchange experience a that goes beyond.</p>
          </div>
          <div className="email flex relative items-center w-sm md:w-lg">
            <Input className="h-15  w-full" placeholder="Email Adress" />
            <Button className="button absolute right-27" type="primary">
              Get Started
            </Button>
          </div>
          <div className="cards flex items-center">
            <p>Buy currency with:</p>
            <div className="flex item">
              <a href="#">
                <img className="w-20 h-10" src={PayPal} alt="Paypadl" />
              </a>
              <a href="#">
                <img className="w-20 h-10" src={Visa} alt="Visa" />
              </a>
              <a href="#">
                <img className="w-20 h-10" src={MasterCard} alt="MasterCard" />
              </a>
            </div>
          </div>
        </div>
        <div className="right-box hidden lg:block relative h-[413px] w-screen">
          <img
            className="absolute w-70 h-120 left-100 z-5 hidden xl:block"
            src={HeroMan}
            alt="Man"
          />
          <img
            className="absolute w-60 h-55 left-55 top-55 hidden xl:block"
            src={Coins}
            alt="Man"
          />
          <img
            className="absolute mobile hidden lg:block xl:w-70 xl:h-70 xl:left-20 top-20 xl:top-0 "
            src={HeroMobile}
            alt="Man"
          />
        </div>
      </div>
    </div>
  );
}
