import Link from "next/link";

interface PostCardProps {
  id?: number;
  title: string;
  body: string;
  hideLink?: boolean; // Not show "Read more".
}

const PostCard = ({ id, title, body, hideLink = false }: PostCardProps) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300">
      <h2 className="text-xl font-semibold text-blue-900 mb-2 line-clamp-none">
        {title}
      </h2>
      <p className="text-gray-600 text-base mb-4 leading-relaxed line-clamp-none">
        {body}
      </p>
      {!hideLink && id !== undefined && (
        <Link
          href={`/posts/${id}`}
          className="text-blue-600 hover:underline font-medium"
        >
          Read more →
        </Link>
      )}
    </div>
  );
};

export default PostCard;
