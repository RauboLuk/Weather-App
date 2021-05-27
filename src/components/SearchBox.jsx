import { useEffect, useState } from "react";
import useAxios from "axios-hooks";
import CloseIcon from "@material-ui/icons/Close";
import SearchIcon from "@material-ui/icons/Search";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";

const SearchBox = ({ setIsModalVisible, setWoeid }) => {
  const [search, setSearch] = useState("");
  const [{ data, loading, error }, getLocations, manualCancel] = useAxios(
    {
      url: `https://mycorsproxy-it.herokuapp.com/https://www.metaweather.com/api/location/search/?query=${search}`,
      method: "get",
    },
    { manual: true }
  );

  const getLocation = () => {
    getLocations();
  };

  const setCity = (id) => {
    setWoeid(id);
    setIsModalVisible(false);
  };

  console.log(data);

  return (
    <div className="w-full min-h-full absolute top-0 left-0 z-10 bg-navyBlue-light text-gray-light font-rale font-medium p-4 flex flex-col">
      <CloseIcon
        tabIndex="0"
        className="cursor-pointer self-end focus:ring-2 focus:ring-blue-400"
        onClick={() => setIsModalVisible(false)}
      />
      <div className="w-full mt-9 mb-7 flex flex-row gap-3">
        <div className="border border-gray-light p-4 flex gap-4 focus-within:ring-2 focus-within:ring-blue-400">
          <SearchIcon className="text-gray-border" />
          <input
            type="text"
            placeholder="search location"
            value={search}
            onChange={({ target: { value } }) => setSearch(value)}
            className="bg-transparent outline-none w-full placeholder-gray-border font-mediumfocus:ring-2 focus:ring-blue-400"
          />
        </div>
        <button
          className="bg-blue1 h-full p-4 font-semibold focus:ring-2 focus:ring-blue-400"
          onClick={getLocation}
        >
          Search
        </button>
      </div>
      <ul>
        {loading && <li>Loading...</li>}
        {data
          ?.filter((loc) => loc.location_type === "City")
          .map((city) => (
            <li key={city.woeid} className="w-full">
              <button
                className="px-3 py-6 w-full flex justify-between items-center cursor-pointer border border-transparent focus-within:ring-2 focus-within:ring-blue-400 hover:border-gray-border group"
                onClick={() => setCity(city.woeid)}
              >
                <span className="overflow-hidden">{city.title}</span>
                <ArrowForwardIosIcon
                  className="text-gray-border invisible group-hover:visible"
                  style={{ fontSize: 14 }}
                />
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default SearchBox;
