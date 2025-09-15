"use client";

import { useEffect, useMemo, useState } from "react";

import { getPost } from "@/lib/api";
import { useRouter, useSearchParams } from "next/navigation";

import Pagination from "@/components/ui/Pagination";
import PostCard from "@/components/ui/PostCard";

import type { PostPage } from "@/types/type";

const POSTS_PER_PAGE = 9;

const ClientPostList = () => {
  const [posts, setPosts] = useState<PostPage[]>([]);

  const searchParams = useSearchParams();
  const router = useRouter();
  const currentPage = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    const fetchPosts = async () => {
      const allPosts = await getPost();
      setPosts(allPosts);
    };
    fetchPosts();
  }, []);

  const totalPages = useMemo(
    () => Math.ceil(posts.length / POSTS_PER_PAGE),
    [posts],
  );

  const currentPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
    return posts.slice(startIndex, startIndex + POSTS_PER_PAGE);
  }, [posts, currentPage]);

  const handlePageChange = (page: number) => {
    router.push(`?page=${page}`);
  };

  return (
    <div className="flex flex-col items-center min-h-screen py-10 px-4 mt-12">
      <div className="w-full max-w-[1200px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentPosts.map((post) => (
            <PostCard
              key={post.id}
              id={post.id}
              title={post.title}
              body={post.body}
            />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default ClientPostList;
