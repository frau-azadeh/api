import { PostPage } from "@/types/type";
import axios, { AxiosError } from "axios";

const jsonApi = axios.create({
  baseURL:"https://jsonplaceholder.typicode.com",
  timeout: 5000
})

const picsumApi = axios.create({
  baseURL: "https://picsum.photos",
  timeout: 5000
})

export async function getPost(): Promise<PostPage[]> {
  const res = await jsonApi.get<PostPage[]>("/posts")
  return res.data
}

export async function getPostById(id: string): Promise<PostPage | null> {
  const postId = Number(id)
  if(isNaN(postId)) return null

  try {
    const res = await jsonApi.get<PostPage>(`/posts/${postId}`)
    return res.data

  } catch (error) {
    const err = error as AxiosError
    if(err.response?.status===404){
      console.warn(`This id=${postId} not found`)
      return null
    }
    console.error("This post error is:", err.message)
    return null
  }
}

