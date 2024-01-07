import React from "react";
import { NavLink } from "react-router-dom";

function Katalog() {
  return (
    <div className="mt-10 flex flex-col mx-4">
      <NavLink to="/card" className="text-2xl font-bold">
        O'g'il bolalar
      </NavLink>
      <NavLink to="/card" className="text-2xl font-bold">
        Qiz bolalar
      </NavLink>
      <NavLink to="/card" className="text-2xl font-bold">
        Chaqaloqlar
      </NavLink>
      <NavLink to="/card" className="text-2xl font-bold">
        O'yinchoqlar
      </NavLink>
    </div>
  );
}

export default Katalog;
