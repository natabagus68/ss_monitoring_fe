import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ChevronIcon from "./icons-new/ChevronIcon.jsx";

export const NavItem = ({
  children = null,
  label = "Lable",
  icon = null,
  className = null,
  to = null,
  active = null,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className={`font-semibold text-[#5C5C5C] flex flex-col gap-2 ${className}`}
    >
      {to ? (
        <NavLink
          to={to}
          onClick={() => setOpen(!!!open)}
          className={({ isActive }) =>
            `flex items-center cursor-pointer gap-3 h-[37px] rounded-md px-2 hover:text-red-500
           ${
             (isActive && to !== null) || active === true ? "text-red-500" : ""
           }`
          }
        >
          <div className="w-6 h-6">{icon}</div>
          {<div className={`whitespace`}>{label}</div>}
          {children && (
            <ChevronIcon
              className={`ml-auto transition ${open && "-rotate-90"}`}
            />
          )}
        </NavLink>
      ) : (
        <button
          to={to}
          onClick={() => setOpen(!!!open)}
          className={`flex items-center cursor-pointer gap-3 w-full h-[37px] rounded-md px-2 hover:bg-[#E9EEF5] hover:text-red-500 ${
            open || active ? "text-red-500 bg-[#E9EEF5]" : ""
          }`}
        >
          <div className="w-6 h-6">{icon}</div>
          {<div className={`whitespace-nowrap`}>{label}</div>}
          {children && (
            <ChevronIcon
              className={`ml-auto transition ${open && "-rotate-90"}`}
            />
          )}
        </button>
      )}
      {children && (
        <div
          className={`${
            open || active ? `flex` : `hidden`
          } flex flex-col gap-2`}
        >
          {children}
        </div>
      )}
    </div>
  );
};
