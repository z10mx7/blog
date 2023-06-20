import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";
import { ToastContainer } from "react-toastify";
import { ToastIt, BASE_URL_CREATE } from "@/utils/helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPlus,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import "react-toastify/dist/ReactToastify.css";

const FormComponent = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  const handleTagInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTag = e.target.value;
    setTags((prevTags) => [...prevTags, newTag]);
    e.target.value = "";
  };

  const handleTagRemove = (tag: string) => {
    setTags((prevTags) => prevTags.filter((t) => t !== tag));
  };

  const handleSubmit = () => {
    const postData = {
      // id: 10007, // not needed at all
      image: "http://placeimg.com/640/480/technics",
      likes: 17,
      tags: tags,
      title: title,
      publishDate: new Date().toISOString(),
      text: description,
      userId: 1,
    };
    // Perform API request to post the data
    axios
      .post(BASE_URL_CREATE, postData)
      .then((response) => {
        console.log(response.data);
        ToastIt("🦄 Article Published Successfully!");
        // Handle success message or redirect to a success page
      })
      .catch((error) => {
        console.error(error);
        alert(
          "something went wrong ,are you sure backend server is running ? "
        );
        // Handle error or display an error message
      });
  };

  return (
    <div className="max-w-lg mx-auto w-12/12">
      <ToastContainer />
      <div className="flex items-center justify-between p-4 mt-16">
        <Link href="/">
          <div className="p-2 rounded-full border-2 bg-white w-12 h-12    ">
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="ml-1  mt-1 text-xl"
            />
          </div>
        </Link>
        <h1 className="text-xl font-semibold -ml-44 ">New post</h1>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-[#4F73D0] text-white rounded-full"
        >
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
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          value={description}
          onChange={(e) => setDescription(e.target.value)}
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
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleTagInput(
                  e as unknown as React.ChangeEvent<HTMLInputElement>
                );
              }
            }}
            className="flex-1 px-4 py-2 focus:outline-none"
          />
          <button className="px-4 py-2 bg-white text-gray-300 rounded-md">
            Add
            <FontAwesomeIcon icon={faPlus} className="ml-2" />
          </button>
        </div>
        <div className="flex items-center mt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-4 bg-white text-[#9D9D9D] pb-1 pt-1 border-gray-200 hover:border-black hover:text-black border-2 rounded-3xl text-sm mr-2"
            >
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => handleTagRemove(tag)}
              />{" "}
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FormComponent;
