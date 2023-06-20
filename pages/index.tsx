import axios from "axios";
import { Post } from "@/utils/types";
import Error from "@/components/Home/Error";
import Search from "@/components/Home/Search";
import { BASE_URL_POSTS } from "@/utils/helper";
import PostCard from "@/components/Blog/PostCard";
import React, { useEffect, useState } from "react";
import AddButton from "@/components/Home/AddButton";

const BlogPost = () => {
  const [blogPosts, setBlogPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Post[]>(BASE_URL_POSTS)
      .then((response) => {
        setBlogPosts(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error:", error);
        setError("Failed to fetch blog posts.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex items-center h-screen">
        <div className="mx-auto">
          <img src="/assets/images/loader.gif" />
        </div>
      </div>
    );
  }

  if (error) {
    return <Error text={"Failed to fetch blog posts."} />;
  }

  return (
    <div className="max-w-7xl mx-auto mt-16 mb-32">
      <div className="flex items-center justify-between p-4">
        <Search />
        <AddButton />
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {blogPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
