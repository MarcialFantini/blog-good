import { useState } from "react";

interface response {
  message: string;
  data: Blog[];
}

interface Blog {
  id: number;
  title: string;
  content: string;
  author: string;
  published: boolean;
  category: string;
  createdAt: string;
  updatedAt: string;
  Likes: any[];
  Comments: any[];
  ImagesModels: ImagesModel[];
}

interface ImagesModel {
  id: number;
}

export const CustomFetchBlogs = () => {
  const [data, setData] = useState<null | Blog[]>(null);
  const [isLoad, setIsLoad] = useState(false);
  const [firstBlog, setFirstBlog] = useState<Blog | null>(null);

  const fetchData = (id: number) => {
    setIsLoad(true);
    fetch(`http://localhost:5000/api/v1/blogs/page/${id}`, {
      cache: "no-cache",
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Error to fetch blogs");
        }
        return res.json() as Promise<response>;
      })
      .then((data) => {
        setData(data.data);
        setFirstBlog(data.data[0]);
      })
      .catch((err) => console.log(err));

    setIsLoad(false);
  };

  return { data, fetchData, isLoad, firstBlog };
};
