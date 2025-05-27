export interface PostPage {
  id: number;
  title: string;
  body: string;
}

export interface PhotoPage {
  id: string;
  author: string;
  download_url: string;
}

export type TodoPage = {
  id: number;
  title: string;
  completed: string;
};
