import { PhotoPage, PostPage, TodoPage, UserPage } from "@/types/type";
import axios, { Axios, AxiosError } from "axios";

const jsonApi = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 5000,
});

const picsumApi = axios.create({
  baseURL: "https://picsum.photos",
  timeout: 5000,
});

export async function getPost(): Promise<PostPage[]> {
  const res = await jsonApi.get<PostPage[]>("/posts");
  return res.data;
}

export async function getPostById(id: string): Promise<PostPage | null> {
  const postId = Number(id);
  if (isNaN(postId)) return null;

  try {
    const res = await jsonApi.get<PostPage>(`/posts/${postId}`);
    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    if (err.response?.status === 404) {
      console.warn(`This id=${postId} not found`);
      return null;
    }
    console.error("This post error is:", err.message);
    return null;
  }
}

export async function getTodo(): Promise<TodoPage[]> {
  const res = await jsonApi.get<TodoPage[]>("/todos");
  return res.data;
}

export async function getTodoById(id: string): Promise<TodoPage | null> {
  const todoId = Number(id);
  if (isNaN(todoId)) return null;

  try {
    const res = await jsonApi.get<TodoPage>(`/todos/${todoId}`);
    return res.data;
  } catch (error) {
    const err = error as AxiosError;
    if (err.response?.status === 404) {
      console.warn(`This id=${todoId} not found`);
      return null;
    }
    console.error("This to do have error:", err.message);
    return null;
  }
}

export async function getUser(): Promise<UserPage[]> {
  const res = await jsonApi.get<UserPage[]>("/users");
  return res.data;
}

export async function getPhoto(): Promise<PhotoPage[]> {
  const res = await picsumApi.get<PhotoPage[]>("/v2/list");
  return res.data;
}
