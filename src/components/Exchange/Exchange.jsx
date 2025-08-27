import "./Exchange.scss";
import Select from "../Exchange/Select";

export default function Exchange() {
  return (
    <div className="main-div flex justify-center">
      <div className="">
        <div className="text-center content-div w-full max-w-sm lg:max-w-7xl sm:max-w-xl">
          <h1>Currency Exchange Rates</h1>
          <p className="text-yellow-600">
            Stay updated with real-time exchange rates for multiple currencies.
            Select your currencies to compare and view historical trends.
          </p>
        </div>
        <div className="select-currency gap-5 w-full">
          <Select />
          <Select />
        </div>
      </div>
    </div>
  );
}
