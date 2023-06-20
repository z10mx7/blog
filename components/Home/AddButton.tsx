import React from "react";
import Link from "next/link";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const AddButton = () => {
  return (
    <Link href="/new">
      <button className="px-4 py-2 bg-[#4F73D0] flex items-center justify-between  text-white rounded-full active:bg-[#224DBA]">
        Add new post
        <FontAwesomeIcon
          icon={faPlus}
          className=" rounded-full p-2   ml-2 text-[#4F73D0] text-sm bg-white "
        />
      </button>{" "}
    </Link>
  );
};

export default AddButton;
