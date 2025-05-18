import { getPost } from "@/lib/api";
import Link from "next/link";

const PostPage = async () => {
  const posts = await getPost();

  return (
    <div className="flex justify-center bg-gray-50 min-h-screen py-10 px-4">
      <div className="w-full max-w-[1200px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
            >
              <h2 className="text-xl font-semibold text-blue-900 mb-2 line-clamp-2">
                {post.title}
              </h2>
              <p className="text-gray-600 text-base mb-4 line-clamp-3">
                {post.body}
              </p>

              <Link
                href={`/posts/${post.id}`}
                className="text-blue-600 hover:underline font-medium"
              >
                Read more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
