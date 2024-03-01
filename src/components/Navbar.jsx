import logo from "../Assets/logo2.png";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="flex gap-10 w-100">
      <Link to="/">
        <img
          style={{ width: "160px", height: "160px" }}
          className="w-25 h-25 p-5"
          src={logo}
          alt="application logo"
        />
      </Link>

      <Link to="/">
        <h1 className="mt-12 font-bold text-2xl hover:text-gray-600 hover:cursor-pointer">
          Home
        </h1>
      </Link>
    </div>
  );
};
