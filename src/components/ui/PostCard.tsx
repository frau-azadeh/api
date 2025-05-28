import Link from "next/link";
import React from "react";
import { ChevronsRight } from "lucide-react";
interface PostCardProps {
  id?: number;
  title: string;
  body: string;
  hideLink?: boolean;
}

const PostCard: React.FC<PostCardProps> = ({
  id,
  title,
  body,
  hideLink = false,
}) => {
  return (
    <div className="border border-gray-300 rounded-xl p-4 bg-white shadow-md hover:shadow-xl transition duration-300">
      <h2 className="text-blue-400 line-clamp-1 mb-4 font-bold text-lg">
        {title}
      </h2>
      <p className="pl-2 text-justify text-base leading-8 line-clamp-4 mb-2 text-gray-600">
        {body}
      </p>
      {!hideLink && id !== undefined && (
        <Link
          href={`/posts/${id}`}
          className="text-blue-500 hover:text-blue-800 duration-300 transition flex items-end gap-6"
        >
          Read more <ChevronsRight className="w-4 h-4" />
        </Link>
      )}
    </div>
  );
};

export default PostCard;
