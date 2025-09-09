import "./Header.scss";
import Logo from "../../assets/coin-logo.svg";
import Sun from "../../assets/sun.svg";
import Profile from "../../assets/profile-pic.svg";
import Menu from "../../assets/menu.svg";

export default function Header({ toggleSideBar }) {
  return (
    <div className="header-box rounded-4xl bg-white flex items-center justify-between z-10 fixed ">
      <div className="flex items-center gap-6">
        <a href="#">
          <h3 className="webName">RateNest</h3>
        </a>
        <a href="#">
          <img src={Logo} alt="Logo" className="w-10 h-10 hidden md:block" />
        </a>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden md:block">
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
        <img
          src={Profile}
          alt="Sun"
          className="w-10 h-10 cursor-pointer hidden md:block"
        />
      </div>
    </div>
  );
}
