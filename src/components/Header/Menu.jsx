import Close from "../../assets/close.svg";
import Sun2 from "../../assets/sun.svg";
import "./Header.scss";

export default function Menu({ isOpen, toggleSideBar }) {
  return (
    <div
      className={`sideBar flex flex-col justify-between z-30 fixed top-0 left-0 h-full w-64 bg-white text-black transform 
      ${isOpen ? "translate-x-0" : "-translate-x-full"} 
      transition-transform duration-300`}
    >
      <div className="p-4">
        <img
          src={Close}
          onClick={toggleSideBar}
          alt="close"
          className="w-12 h-12 cursor-pointer"
        />
      </div>
      <ul className="p-4 flex flex-col gap-5">
        <a href="#">
          <li className="py-2">Exchange</li>
        </a>
        <a href="#">
          <li className="py-2">Rates</li>
        </a>
        <a href="#">
          <li className="py-2">Charts</li>
        </a>
        <a href="#">
          <li className="py-2">News</li>
        </a>
      </ul>
      <img src={Sun2} alt="Sun" className="w-12 h-12 cursor-pointer" />
    </div>
  );
}
