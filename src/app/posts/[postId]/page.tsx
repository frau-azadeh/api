import { getPostById } from "@/lib/api";
import { PostPage } from "@/types/type";
import { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = {
  params: {
    postId: string;
  };
};

export async function generateMetadata({params}:Props): Promise<Metadata> {
  const post = await getPostById(params.postId)


if(!post){
  return{
    title:"not found",
    description: "not found with userId"
  };
}
return{
  title:`post: ${post.title}`,
  description: post.body.slice(0,100)
}
}
export default async function SinglePostPage({ params }: Props) {
  const post:PostPage | null = await getPostById(params.postId);

  if (!post) {
    notFound();
  }
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-2xl w-full bg-white border border-gray-200 shadow-xl rounded-xl p-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">{post.title}</h1>
        <p className="text-gray-700 text-lg leading-relaxed">{post.body}</p>
      </div>
    </div>
  );
}
