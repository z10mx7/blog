import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "@/components/Home/Search";
import AddButton from "@/components/Home/AddButton";
import { faHorse } from "@fortawesome/free-solid-svg-icons";
const Error = (props) => {
  const {text} = props ; 
  return (
    <div className="max-w-7xl mx-auto mt-16 mb-32">
      <div className="flex items-center justify-between p-4">
        <Search />
        <AddButton />
      </div>
      <div className="   mt-32 flex justify-center">
        <FontAwesomeIcon icon={faHorse} className="mr-8" />
        {/* Failed to fetch blog posts. */}
        {text}
        <br />
        make sure backend server is runned already
      </div>
    </div>
  );
};

export default Error;
