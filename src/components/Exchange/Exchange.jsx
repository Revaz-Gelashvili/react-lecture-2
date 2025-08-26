import "./Exchange.scss";

export default function Exchange() {
  return (
    <div className="main-div flex justify-center">
      <div className="content-div w-full max-w-7xl">
        <h1 className="mx-5">Currency Exchange Rates</h1>
        <p className="text-red-600">
          Stay updated with real-time exchange rates for multiple currencies.
          Select your currencies to compare and view historical trends.
        </p>
      </div>
    </div>
  );
}
