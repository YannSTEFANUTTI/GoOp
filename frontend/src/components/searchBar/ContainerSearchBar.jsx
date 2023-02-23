import React from "react";
/* import { gsap } from "gsap"; */
import TravelAvailable from "@components/searchBar/TravelAvailable";
import ReactDatePicker from "../ReactDatePicker/ReactDatePicker";

function ContainerSearchBar() {
  const [show, setShow] = React.useState(false);
  const handleClick = (e) => {
    e.preventDefault();
    setShow(!show);
  };
  return (
    <div className="searchBar">
      <form className="w-[100%] h-full flex flex-col justify-center items-center text-gray-800 text-lg">
        <div className="flex justify-center gap-16 w-full mt-11 ">
          <div className="flex flex-col gap-1 w-2/5 ">
            <label htmlFor="search" className="">
              Place of departure
            </label>
            <input
              type="text"
              name="villeDepart"
              className="rounded-xl bg-orange-200 pl-3 h-8 outline-none focus:border-2 focus:border-orange-500"
              placeholder="Paris chantier naval"
            />
          </div>
          <div className="flex flex-col gap-1 w-2/5">
            <label htmlFor="search" className="">
              Arrival point
            </label>
            <input
              type="text"
              name="villeArrivee"
              className="rounded-xl bg-orange-200 pl-3 h-8 outline-none focus:border-2 focus:border-orange-500"
              placeholder="Lyon chantier naval"
            />
          </div>
        </div>
        <ReactDatePicker />
        <button
          type="submit"
          className="bg-orange-400 px-3 py-1 rounded-xl  mt-5"
          onClick={handleClick}
        >
          Find GoOp
        </button>
      </form>
      {show && <TravelAvailable />}
      <div />
    </div>
  );
}

export default ContainerSearchBar;
