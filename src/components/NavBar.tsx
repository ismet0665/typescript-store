import React from "react";
import { Link } from "react-router-dom";
import logo from "../img/favicon.png";
const NavBar = () => {
  return (
    <div className="flex justify-between items-center px-5 h-[50px] text-white bg-gray-600 border-b-4 border-black font-bold">
      <div className="flex gap-3 items-center ">
        <img src={logo} alt="logo" className="h-10" />
        <h3>Typescript Store</h3>
      </div>
      <div>
        <Link to={"/"} className="mr-3">
          Home
        </Link>
        <Link to={"/favorites"}>Favorites</Link>
      </div>
    </div>
  );
};

export default NavBar;
