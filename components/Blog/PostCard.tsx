import React from "react";
import Link from "next/link";
import { getFullName, formatDate, USER_AVATAR, truncateText } from "@/utils/helper";

const PostCard = (props) => {
  const { post } = props;

  return (
    <div
      key={post.id}
      className="bg-white p-4   rounded-md border-gray-200 border-2 relative"
      style={{
        height:"500px"
      }}
    >
      <Link href={"/post/" + post.id}>
        <img
          src={post.image}
          alt="Blog Post"
          className="w-full h-40 object-cover rounded-md"
        />
      </Link>
      <Link href={"/post/" + post.id}>
        <h2 className="text-xl font-semibold mt-2">{post.title}</h2>
      </Link>
      <p className="text-[#9D9D9D] text-sm mt-2">{truncateText(post.text, 150)}</p>
      <div className="flex flex-wrap mt-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="px-4    bg-white text-[#9D9D9D]  border-gray-200 border-2 rounded-3xl  text-sm  "
          >
            {tag}
          </span>
        ))}
      </div>
      <div className=" flex items-center mt-4 justify-between absolute bottom-0 left-0 right-0"  >
        <img
          src={USER_AVATAR}
          alt="Author"
          className="w-8 h-8 rounded-full mr-2 ml-2 mb-2"
        />
        <div>
          <p className="text-sm font-semibold -ml-16   ">{getFullName(post.user)}</p>
          <p className="text-xs text-gray-600  -ml-16 mb-2">
            {formatDate(post.publishDate)}
          </p>
        </div>
        <div className="flex items-center">
        <span className="text-sm ml-1 text-gray-400 mr-2">{post.likes}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 mr-2"
            fill="#9D9D9D"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
