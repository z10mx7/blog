import React, { useEffect, useState }  from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "@/components/Home/Search";
import AddButton from "@/components/Home/AddButton";
import PostCard from "@/components/Blog/PostCard";
import axios from 'axios';

type Post = {
  id: number;
  title: string;
  text: string;
  image: string;
  likes: number;
  tags: string[];
  publishDate: string;
  userId: number;
  user: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    avatar: string;
  };
};



const BlogPost = () => {
  const [blogPosts, setBlogPosts] = useState<Post[]>([]);
  // const formattedDate = formatDate(dateString);
  // Sample data for blog posts
  // const blogPosts = [
  //   {
  //     id: 1,
  //     image: "image-url",
  //     title: "Blog Post 1",
  //     description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  //     tags: ["Tag", "Tag", "Tag"],
  //     author: "John Doe",
  //     authorImage: "author-image-url",
  //     date: "June 1, 2023",
  //     likes: 25,
  //   },
 
  //   // Add more blog posts here...
  // ];


  useEffect(() => {
    axios.get<Post[]>('http://localhost:3000/posts?_expand=user')
      .then(response => {
        setBlogPosts(response.data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);


  return (
    <div className="max-w-7xl mx-auto mt-16 mb-32">
      <div className="flex items-center justify-between p-4">
        <Search />
      <AddButton /> 
        
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {blogPosts.map((post) => (
          <PostCard  key={post.id} post={post} /> 
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
