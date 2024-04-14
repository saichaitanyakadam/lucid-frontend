import { useNavigate, NavLink } from "react-router-dom";
import { navTabs } from "../constants/appContstants";
import { IoLogOutOutline } from "react-icons/io5";
import Cookie from "js-cookie";

const Sidebar = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    Cookie.remove("accessToken");
    navigate("/login");
  };
  return (
    <div className="flex flex-col border-r border-gray-300 h-full">
      <NavLink to="/">
        <img
          src="https://mma.prnewswire.com/media/1550478/Lucid_Logo.jpg?p=facebook"
          alt="logo"
          className="h-14"
        />
      </NavLink>
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
  );
};

export default Sidebar;
