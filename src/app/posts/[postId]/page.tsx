import { getPostById } from "@/lib/api";
import { PostPage } from "@/types/type";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import PostCard from "@/components/ui/PostCard";

type PropsSinglePostPage = {
  params: {
    postId: string;
  };
};

export async function generateMetadata({
  params,
}: PropsSinglePostPage): Promise<Metadata> {
  const post = await getPostById(params.postId);

  if (!post) {
    return {
      title: "not found",
      description: "not found with userId",
    };
  }

  return {
    title: `post: ${post.title}`,
    description: post.body.slice(0, 100),
  };
}

export default async function SinglePostPage({
  params,
}: PropsSinglePostPage) {
  const post: PostPage | null = await getPostById(params.postId);

  if (!post) {
    notFound();
  }

  return (
    <div className="flex justify-center items-center min-h-screen px-4 py-10">
      <div className="max-w-2xl w-full">
        <PostCard
          title={post.title}
          body={post.body}
          hideLink={true} // چون داخل جزئیات هستیم، لینک نمی‌خوایم
        />
      </div>
    </div>
  );
}
