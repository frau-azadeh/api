import { getPost } from "@/lib/api"

export default async function PostPage() {
    const posts = await getPost();

    return(
        <ul className="space-x-3">
            {posts.map((post)=>(
                <li className="border border-blue-500 hover:border-red-500 m-4 p-5  rounded-xl" key={post.id}>
                    <h2 className="text-2xl text-blue-400 font-bold">{post.title}</h2>
                    <p className="text-xl text-gray-600">{post.body}</p>
                </li>
            ))}
        </ul>
    )
    
}