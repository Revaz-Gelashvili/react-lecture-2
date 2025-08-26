import "./Header.scss";
import Logo from "../../assets/coin-logo.svg";
import Sun from "../../assets/sun.svg";
import Profile from "../../assets/profile-pic.svg";

export default function Header() {
  return (
    <div className="header flex items-center justify-between w-full">
      <div className="flex items-center gap-2">
        <h3 className="text-xl font-bold">RateNest</h3>
        <img src={Logo} alt="Logo" className="w-8 h-8" />
      </div>
      <div className="flex items-center gap-4">
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
        <img src={Sun} alt="Sun" className="w-6 h-6 cursor-pointer" />
        <img src={Profile} alt="Sun" className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  );
}
