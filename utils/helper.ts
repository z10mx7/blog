import { toast } from "react-toastify";

export const ToastIt = (text: string) =>{
    toast.success(text, {
    position: "top-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
  });
} 

export const BASE_URL_CREATE = "http://localhost:3000/posts"
export const BASE_URL_POSTS = "http://localhost:3000/posts?_expand=user"
export const getFullName = (author) => {
  return `${author.firstName} ${author.lastName}`;
};

export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  const options = { day: "2-digit", month: "short", year: "numeric" } as const;
  return date.toLocaleDateString("en-US", options);
};
export const USER_AVATAR = "http://placeimg.com/480/480/sports";
export const truncateText = (text, len) => {return text.slice(0, len);}