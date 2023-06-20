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