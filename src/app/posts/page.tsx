'use client';

import { useEffect, useState } from 'react';
import { getPost } from '@/lib/api';
import PostCard from '@/components/ui/PostCard';
import Pagination from '@/components/ui/Pagination';
import { useSearchParams, useRouter } from 'next/navigation';
import type { PostPage } from '@/types/type';

const POSTS_PER_PAGE = 9;

const PostPage = () => {
  const [posts, setPosts] = useState<PostPage[]>([]);
  const searchParams = useSearchParams();
  const router = useRouter();

  const pageParam = Number(searchParams.get('page')) || 1;
  const [currentPage, setCurrentPage] = useState<number>(pageParam);

  useEffect(() => {
    const fetchData = async () => {
      const allPosts = await getPost();
      setPosts(allPosts);
    };
    fetchData();
  }, []);

  useEffect(() => {
    setCurrentPage(pageParam);
  }, [pageParam]);

  const totalPages = Math.ceil(posts.length / POSTS_PER_PAGE);
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const currentPosts = posts.slice(startIndex, startIndex + POSTS_PER_PAGE);

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

export default PostPage;
