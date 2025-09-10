import "./Exchange.scss";
import React from "react";
import SelectCurrency from "../Exchange/Select";
import { useState, useEffect } from "react";
import { Button } from "antd";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Exchange() {
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("GEL");
  const [fromAmount, setFromAmount] = useState(1);
  const [toAmount, setToAmount] = useState(0);
  const [isUpdatingFrom, setIsUpdatingFrom] = useState(true);

  const convert = async (amount, from, to) => {
    const res = await fetch(
      `https://hexarate.paikama.co/api/rates/latest/${from}?target=${to}`
    );
    const data = await res.json();
    return amount * data.data.mid;
  };

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: true,
    });
  }, []);

  useEffect(() => {
    if (isUpdatingFrom) {
      convert(fromAmount, fromCurrency, toCurrency).then((val) =>
        setToAmount(Number(val.toFixed(4)))
      );
    }
  }, [fromAmount, fromCurrency, toCurrency, isUpdatingFrom]);

  useEffect(() => {
    if (!isUpdatingFrom) {
      convert(toAmount, toCurrency, fromCurrency).then((val) =>
        setFromAmount(Number(val.toFixed(4)))
      );
    }
  }, [toAmount, toCurrency, fromCurrency, isUpdatingFrom]);

  return (
    <div className="main-div bg-white w-full flex justify-center flex-col items-center">
      <div className="title-box rounded-4xl" data-aos="fade-up">
        <p>Convert at the best rate</p>
      </div>
      <div
        className="exchange flex flex-col items-center gap-5 w-sm md:w-150 lg:w-200 xl:w-300"
        data-aos="zoom-out-up"
      >
        <SelectCurrency
          id="fromCurrency"
          value={fromCurrency}
          amount={fromAmount}
          onCurrencyChange={setFromCurrency}
          onAmountChange={(val) => {
            setIsUpdatingFrom(true);
            setFromAmount(val);
          }}
        />

        <SelectCurrency
          id="toCurrency"
          value={toCurrency}
          amount={toAmount}
          onCurrencyChange={setToCurrency}
          onAmountChange={(val) => {
            setIsUpdatingFrom(false);
            setToAmount(val);
          }}
        />
      </div>

      <Button className="button w-70" type="primary" data-aos="fade-up">
        Convert
      </Button>
    </div>
  );
}
