import { PostPage } from "@/types/type";
import axios from "axios";

const api = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 5000,
})

export async function getPost(): Promise<PostPage[]> {
    const res = await api.get<PostPage[]>("/posts");
    return res.data
}