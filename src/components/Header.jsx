import { useState } from "react";
import { RxCross1, RxHamburgerMenu } from "react-icons/rx";
import { NavLink, useNavigate } from "react-router-dom";
import { navTabs } from "../constants/appContstants";
import { IoLogOutOutline } from "react-icons/io5";
import Cookie from "js-cookie";

const Header = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookie.remove("accessToken");
    navigate("/login");
  };
  return (
    <nav className="px-2 flex items-center h-full justify-between">
      <NavLink to="/">
        <img
          src="https://mma.prnewswire.com/media/1550478/Lucid_Logo.jpg?p=facebook"
          alt="logo"
          className="h-[5vh]"
        />
      </NavLink>
      <RxHamburgerMenu onClick={() => setShow(true)} />
      <div
        className={`absolute top-0 right-0 w-[60%] md:w-[40%] bg-purple-100 h-screen z-10 ${
          show ? "right-0" : "right-[-100%]"
        } transition-all duration-150 flex flex-col`}
      >
        <RxCross1 onClick={() => setShow(false)} className="self-end m-2" />
        <ul className="flex flex-col gap-2">
          {navTabs.map((tab, index) => (
            <NavLink
              to={tab.path}
              key={index}
              className={({ isActive }) =>
                isActive ? "bg-purple-200 border-l-4 border-purple-900" : ""
              }
            >
              <li className="p-3">{tab.label}</li>
            </NavLink>
          ))}
        </ul>
        <div className="mt-auto pb-10 mx-auto">
          <button
            onClick={handleLogout}
            type="button"
            className="bg-purple-700 px-3 py-1 text-white font-semibold flex items-center gap-3"
          >
            <span>Logout</span>
            <IoLogOutOutline />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Header;
