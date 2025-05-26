import { getPost } from "@/lib/api";
import PostCard from "@/components/ui/PostCard";

const PostPage = async () => {
  const posts = await getPost();

  return (
    <div className="flex justify-center min-h-screen py-10 px-4">
      <div className="w-full max-w-[1200px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostPage;
