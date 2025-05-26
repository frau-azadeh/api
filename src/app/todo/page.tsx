import { getTodo } from "@/lib/api";
import Link from "next/link";

export default async function TodoPage() {
  const todos = await getTodo();

  return (
    <div className="flex justify-center bg-gray-50 min-h-screen py-10 px-4">
      <div className="w-full max-w-[1200px]">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {todos.map((todo) => (
            <div
              className="bg-white border border-gray-200 rounded-xl shadow-md p-6 hover:shadow-lg transition-all duration-300"
              key={todo.id}
            >
              <span className="text-xl font-bols text-blue-900 mb-2 line-clamp-2">
                {todo.title}
              </span>
              <p className="mb-4">Complete: {todo.completed ? "✅" : "❌"}</p>
              <Link
                href={`/todo/${todo.id}`}
                className="text-blue-600 hover:underline font-medium"
              >
                read more →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
