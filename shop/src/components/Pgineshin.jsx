// icon
import { BiSearchAlt } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaHome, FaPhone } from "react-icons/fa";
import { MdOutlinePhoneEnabled } from "react-icons/md";
// react
import { useState } from "react";
import { NavLink } from "react-router-dom";

function Pgineshin() {
  return (
    <div className=" hidden rounded-2xl  mx-4  bg-indigo-500 px-5 py-2  max-md:flex items-center justify-between sticky bottom-4">
      <div>
        <NavLink
          to="/"
          className="text-white flex flex-col justify-center items-center text-2xl"
        >
          <FaHome />
          <h1 className="text-[12px]">Bosh sahifa</h1>
        </NavLink>
      </div>
      <div>
        <NavLink
          to="/katalog"
          className="flex text-white text-2xl flex-col justify-center items-center"
        >
          <BiSearchAlt />
          <h1 className="text-[12px]">Katalog</h1>
        </NavLink>
      </div>

      <div>
        <div className=" ">
          <NavLink
            to="/karzinka"
            className="text-white flex flex-col justify-center items-center text-2xl"
          >
            <MdOutlineShoppingCart />
            <h1 className="text-[12px]">Savat</h1>
          </NavLink>
        </div>
      </div>
      <div className=" ">
        <NavLink
          to="/tel"
          className="text-white flex flex-col justify-center items-center text-2xl"
        >
          <MdOutlinePhoneEnabled />
          <h1 className="text-[12px]">Tel</h1>
        </NavLink>
      </div>
    </div>
  );
}

export default Pgineshin;
