'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { getPostById } from '@/lib/api';
import { PostPage } from '@/types/type'; 

const SinglePostPageContent = () => {
  const { postId } = useParams();
  const [post, setPost] = useState<PostPage | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!postId) return;
      const data = await getPostById(postId.toString());
      setPost(data);
    };

    fetchPost();
  }, [postId]);

  if (!post) {
    return <div className="text-center text-gray-500">Loading Post ...</div>;
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 py-10">
      <div className="max-w-2xl w-full bg-white border border-gray-200 shadow-xl rounded-xl p-8">
        <h1 className="text-3xl font-bold text-blue-800 mb-4">{post.title}</h1>
        <p className="text-gray-700 text-lg leading-relaxed">{post.body}</p>
      </div>
    </div>
  );
};

export default SinglePostPageContent;





