import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCity } from "../utils/citySlice";
import cityCoordinates from "./cityCoordinates";

const SelectCity = () => {
  const [currentCity, setCurrentCity] = useState("");

  const changeCity = (e) => {
    setCurrentCity(e.target.value);
    // dispatch(setCity(currentCity));
  };

  // useEffect(() => {
  //   changeCity();
  // }, [currentCity]);

  // const count = useSelector((state) => state.city.currentCity);
  // const dispatch = useDispatch();

  const cities = [
    "Delhi",
    "Mumbai",
    "Kolkata",
    "Chennai",
    "Hyderabad",
    "Ahemdabad",
    "Bengaluru",
    "Jaipur",
    "Amritsar",
    "Fatehabad",
  ];

  // cities.map((city) =>
  //   console.log(
  //     `${city} - lat: ${cityCoordinates[city].latitude} lng: ${cityCoordinates[city].longitude}`
  //   )
  // );

  // export const MyContext = createContext();

  return (
    <div className="flex flex-row items-center">
      <svg
        className="w-4 2xl:w-6 2xl:h-6 h-6 md:h-4 mt-1.5 md:mt-1"
        stroke="#f97316"
        fill="#f97316"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 466.583 466.582"
        xmlSpace="preserve"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          {" "}
          <g>
            {" "}
            <path d="M233.292,0c-85.1,0-154.334,69.234-154.334,154.333c0,34.275,21.887,90.155,66.908,170.834 c31.846,57.063,63.168,104.643,64.484,106.64l22.942,34.775l22.941-34.774c1.317-1.998,32.641-49.577,64.483-106.64 c45.023-80.68,66.908-136.559,66.908-170.834C387.625,69.234,318.391,0,233.292,0z M233.292,233.291c-44.182,0-80-35.817-80-80 s35.818-80,80-80c44.182,0,80,35.817,80,80S277.473,233.291,233.292,233.291z" />{" "}
          </g>{" "}
        </g>
      </svg>
      <select
        value={currentCity}
        onChange={changeCity}
        className="text-gray-700 2xl:text-2xl pl-1 font-semibold hover:underline hover:underline-offset-3 border-none outline-none"
      >
        <option value="" className="text-slate-300" disabled={true}>
          Select city
        </option>
        {cities?.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCity;
