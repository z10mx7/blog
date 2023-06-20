import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faAmbulance,
  faArrowLeft,
  faAnchor,
  faPlus,faXmark
} from "@fortawesome/free-solid-svg-icons";

import React from "react";

const FormComponent = () => {
  return (
    <div className="max-w-lg mx-auto w-12/12">
      <div className="flex items-center justify-between p-4 mt-16">
        <a className="p-2 rounded-full border-2 bg-white w-12 h-12    ">
          <FontAwesomeIcon icon={faArrowLeft} className="ml-1  mt-1 text-xl" />
        </a>
        <h1 className="text-xl font-semibold -ml-44 ">New post</h1>
        <button className="px-4 py-2 bg-[#4F73D0] text-white rounded-full">
          Publish post
        </button>
      </div>
      <div className="px-4">
        <label htmlFor="title" className="block font-normal mb-2 ml-2">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="w-full px-4 py-2 border  focus:border-gray-500 border-[#E7E7E7] rounded-md focus:outline-none"
        />
      </div>
      <div className="px-4 mt-4">
        <label htmlFor="description" className="block font-normal mb-2 ml-2">
          Description
        </label>
        <textarea
          id="description"
          className="w-full px-4 py-2  focus:border-gray-500 border border-[#E7E7E7] rounded-md focus:outline-none resize-none"
          rows={4}
        ></textarea>
      </div>
      <div className="px-4 mt-4">
        <label htmlFor="tags" className="block font-normal mb-2 ml-2">
          Tags
        </label>
        <div className="flex items-center border border-[#E7E7E7] rounded-md">
          <input
            type="text"
            id="tags"
            className="flex-1 px-4 py-2 focus:outline-none"
          />
          <button className="px-4 py-2 bg-white text-gray-300 rounded-md">
            Add
            <FontAwesomeIcon icon={faPlus} className="ml-2" />
          </button>
        </div>
        <div className="flex items-center mt-2 ">
          <span className="px-4    bg-white text-[#9D9D9D] pb-1  pt-1 border-gray-200 hover:border-black hover:text-black border-2 rounded-3xl  text-sm  ">
          <FontAwesomeIcon icon={faXmark} /> Tag
          </span>
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
