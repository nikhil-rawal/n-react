import { useState } from "react";

const SearchBar = ({ listOfRestaurants, setFilteredRestaurants }) => {
  const [searchText, setSearchText] = useState("");

  function searchRestaurant(e) {
    setSearchText(e.target.value);
    const searchFilteredRestaurants = listOfRestaurants.filter((resName) => {
      if (e.target.value === "") {
        return listOfRestaurants;
      }
      // else if (
      //   !listOfRestaurants.some(
      //     (res) => res.info.name.toLowerCase() === e.target.value.toLowerCase()
      //   )
      // ) {
      //   return listOfRestaurants;
      // }
      else {
        return resName?.info?.name
          ?.toLowerCase()
          .includes(searchText.toLowerCase());
      }
    });
    setFilteredRestaurants(searchFilteredRestaurants);
  }
  return (
    <div className="flex w-full my-8 md:my-14 justify-center items-center mx-auto">
      <div className="py-2 md:py-0 flex flex-row w-10/12 md:w-8/12 relative">
        <input
          type="text"
          className="border border-gray-200 outline-orange-300 text-gray-900 text-md rounded-lg focus:ring-orange-100 focus:border-orange-100 hover:bg-orange-50 w-full ps-3 md:ps-6 2xl:ps-6 p-0 md:p-2 2xl:p-4 hover:text-gray-1000 2xl:text-lg"
          placeholder="Search your favourite restaurant"
          value={searchText}
          onChange={searchRestaurant}
        />
        <button
          className="p-3 ms-4 text-sm 2xl:text-lg font-medium text-white bg-orange-400 rounded-lg border-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 absolute right-0 top-0 bottom-0 transform scale-80 -translate-x-5"
          onClick={() => {
            const searchFilteredRestaurants = listOfRestaurants.filter(
              (resName) =>
                resName?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
            );
            setFilteredRestaurants(searchFilteredRestaurants);
          }}
        >
          <svg
            className="w-3 md:w-4 2xl:w-6 h-3 md:h-4 2xl:h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </div>
    </div>

    // <div className="flex w-full my-8 md:my-14 justify-center items-center mx-auto">
    //   <div className="py-2 md:py-0 flex flex-row w-10/12 md:w-8/12">
    //     <input
    //       type="text"
    //       className="border border-gray-200 outline-orange-300 text-gray-900 text-md rounded-lg focus:ring-orange-100 focus:border-orange-100 hover:bg-orange-50 w-full ps-3 md:ps-6 2xl:ps-6 p-0 md:p-2 2xl:p-4 hover:text-gray-1000 2xl:text-lg"
    //       placeholder="Search your favourite restaurant"
    //       value={searchText}
    //       onChange={searchRestaurant}
    //     />
    //     <button
    //       className="p-2.5 ms-2 text-sm 2xl:text-lg font-medium text-white bg-orange-400 rounded-lg border border-orange-400 hover:bg-orange-500 focus:ring-4 focus:outline-none focus:ring-orange-300 "
    //       onClick={() => {
    //         const searchFilteredRestaurants = listOfRestaurants.filter(
    //           (resName) =>
    //             resName?.info?.name
    //               .toLowerCase()
    //               .includes(searchText.toLowerCase())
    //         );
    //         setFilteredRestaurants(searchFilteredRestaurants);
    //       }}
    //     >
    //       <svg
    //         className="w-3 md:w-4 2xl:w-6 h-3 md:h-4 2xl:h-6"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 20 20"
    //       >
    //         <path
    //           stroke="currentColor"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth={2}
    //           d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
    //         />
    //       </svg>
    //     </button>
    //   </div>
    // </div>
  );
};

export default SearchBar;
