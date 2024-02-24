import RestaurantMenuItemList from "./RestaurantMenuItemList";

const RestaurantCategory = ({ itemCardData, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="cursor-pointer justify-between items-center p-4 my-2 rounded-md select-none w-11/12 md:w-8/12 mx-auto shadow-sm border-b border-dashed ">
      <div
        className="flex justify-between cursor-pointer rounded-md select-none"
        onClick={handleClick}
      >
        <span className="font-semibold text-lg">
          {itemCardData?.title} ({itemCardData?.itemCards?.length})
        </span>
        {!showItems ? (
          <span>
            <svg
              className="h-4 w-4"
              fill="#000000"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 330 330"
              xmlSpace="preserve"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                {"{"}" "{"}"}
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
                {"{"}" "{"}"}
              </g>
            </svg>
          </span>
        ) : (
          <span>
            <svg
              className="h-4 w-4"
              fill="#000000"
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 330 330"
              xmlSpace="preserve"
              transform="rotate(180)"
            >
              <g id="SVGRepo_bgCarrier" strokeWidth={0} />
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <g id="SVGRepo_iconCarrier">
                {"{"}" "{"}"}
                <path
                  id="XMLID_225_"
                  d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393 s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
                />
                {"{"}" "{"}"}
              </g>
            </svg>
          </span>
        )}
      </div>
      <div>
        {showItems && (
          <RestaurantMenuItemList
            key={"87887878778"}
            items={itemCardData?.itemCards}
          />
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
