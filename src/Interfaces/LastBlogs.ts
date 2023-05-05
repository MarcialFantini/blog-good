export interface Blogs {
  message: MessageBlog[];
  status: number;
}

export interface MessageBlog {
  id: number;
  title: string;
  content: string;
  author: string;
  published: boolean;
  category: string;
  createdAt: string;
  updatedAt: string;
  ImagesModels: ImagesModel[];
}

export interface ImagesModel {
  id: number;
}

export interface Blog {
  title: string;
  content: string;
  author: string;
  published: boolean;
  category: string;
}
