import { PhotoPage, PostPage } from "@/types/type";
import axios from "axios";

const jsonApi = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    timeout: 5000,
})

const picsumApi = axios.create({
    baseURL: "https://picsum.photos",
})
export async function getPost(): Promise<PostPage[]> {
    const res = await jsonApi.get<PostPage[]>("/posts");
    return res.data
}

export async function getPhoto(): Promise<PhotoPage[]> {
    const res = await picsumApi.get<PhotoPage[]>("/v2/list");
    return res.data
}

