// src/app/posts/[postId]/page.tsx
import { getPostById } from "@/lib/api";
import { PostPage } from "@/types/type";

type Props = {
  params: {
    postId: string;
  };
};

export default async function SinglePostPage({ params }: Props) {
  const post: PostPage | null = await getPostById(params.postId);

  if (!post) {
    return (
      <div className="text-center text-red-600 p-6 font-bold">
        پست مورد نظر پیدا نشد یا شناسه نامعتبر است.
      </div>
    );
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
