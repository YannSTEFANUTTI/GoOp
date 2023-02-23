/* eslint-disable import/no-unresolved */
import React from "react";
import NavBarItem from "@components/NavBar/NavBarItem";

function NavBar() {
  return (
    <div className="bg-[#F8991C] h-10 w-screen flex justify-end items-center absolute top-0 p-3">
      <div>
        <NavBarItem />
      </div>
    </div>
  );
}

export default NavBar;
