import "./Header.scss";
import Logo from "../../assets/coin-logo.svg";
import Sun from "../../assets/sun.svg";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-4 py-2 w-full">
      <div className="flex items-center gap-2">
        <h3 className="text-xl font-bold">RateNest</h3>
        <img src={Logo} alt="Logo" className="w-8 h-8" />
      </div>
      <div className="flex items-center gap-4">
        <ul className="flex gap-4">
          <li>Exchange</li>
          <li>Rates</li>
          <li>Charts</li>
          <li>News</li>
        </ul>
        <img src={Sun} alt="Sun" className="w-6 h-6 cursor-pointer" />
      </div>
    </header>
  );
}
