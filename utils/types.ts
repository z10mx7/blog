
export type Post = {
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