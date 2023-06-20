import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  return (
    <div className="relative flex items-center  ">
      <FontAwesomeIcon
        icon={faMagnifyingGlass}
        className="absolute left-3 text-gray-400"
      />
      <input
        type="text"
        placeholder="Search"
        className="pl-10 focus:placeholder-transparent pr-4 py-2 border hover:border-gray-400  border-[#E7E7E7]  rounded-3xl focus:outline-none"
      />
    </div>
  );
};

export default Search;
