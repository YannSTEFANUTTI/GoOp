import React from "react";
import { gsap } from "gsap";

function TravelAvailable() {
  const handleClick = () => {
    gsap.to(".findTravel", { opacity: 0, duration: 0.5, delay: 0 });
    gsap.to(".searchBar", { opacity: 0, duration: 0.5, delay: 0, scale: 0 });
    gsap.to(".imgcar", { opacity: 1, duration: 1, delay: 0, scale: 1 });
    gsap.to("#arrowRight", { opacity: 1, duration: 0.5, delay: 1 });
    gsap.to("#arrowLeft", { opacity: 1, duration: 0.5, delay: 1 });
    gsap.to("#selectCar", { opacity: 1, duration: 0.5, delay: 2 });
    gsap.to("#StatsCar", { opacity: 1, duration: 1, delay: 0, x: -400 });
  };
  return (
    <div className="findTravel">
      <div className="w-[100%] h-full flex flex-col justify-center items-center text-gray-800 text-lg mt-6">
        <p>No trip, please create one.</p>
        <div className="flex gap-6 mt-2">
          <label htmlFor="search" className="">
            number of people:
          </label>
          <select
            name=""
            id=""
            className="bg-orange-200 w-12 rounded-lg pl-4 text-base focus:outline-none"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
          </select>
        </div>
        <button
          type="button"
          className="bg-orange-400 px-3 py-1 rounded-xl  mt-5"
          onClick={handleClick}
        >
          Create GoOP
        </button>
      </div>
    </div>
  );
}

export default TravelAvailable;
