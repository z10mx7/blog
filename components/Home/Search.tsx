import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

type SearchProps = {
  onSearch: (query: string) => void;
};

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    onSearch(searchQuery);
  };

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
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />
    </div>
  );
};

export default Search;
