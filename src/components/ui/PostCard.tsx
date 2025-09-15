import React from "react";

import { ChevronsRight } from "lucide-react";
import Link from "next/link";

interface PostPageProps {
  id?: number;
  title: string;
  body: string;
  hideLink?: boolean;
}
const PostCard: React.FC<PostPageProps> = ({
  id,
  title,
  body,
  hideLink = false,
}) => {
  return (
    <div className="border border-gray-300 rounded-2xl bg-white p-4 shadow-md">
      <h2 className="text-lg text-blue-900 line-clamp-1 font-bold">{title}</h2>
      <p className="p-2 text-base text-gray-500 line-clamp-3 leading-8 text-justify">
        {body}
      </p>
      {!hideLink && id !== undefined && (
        <Link
          href={`/posts/${id}`}
          className="flex items-end text-blue-500 hover:text-blue-800 duration-300 transition font-bold"
        >
          Read More
          <ChevronsRight className="w-5 h-5" />
        </Link>
      )}
    </div>
  );
};

export default PostCard;
