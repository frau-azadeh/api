"use client";

import { Search, X, Loader2 } from "lucide-react";
import Link from "next/link";
import { useSearch } from "@/components/hooks/useSearch";

export default function SearchBar() {
  const { query, setQuery, results, showResults, loading, error, handleClose } =
    useSearch();

  return (
    <div className="relative w-full max-w-xl">
      <input
        type="text"
        placeholder="Search posts..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full pl-10 pr-10 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
      />
      <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />

      {loading && (
        <Loader2 className="absolute right-3 top-2.5 w-5 h-5 animate-spin text-blue-500" />
      )}

      {showResults && (
        <div className="absolute mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 max-h-60 overflow-y-auto z-50">
          <div className="flex justify-end px-2 pt-2">
            <button
              onClick={handleClose}
              className="text-gray-500 hover:text-red-600"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {error && <p className="text-red-600 px-4 py-2 text-sm">{error}</p>}

          {!error && !loading && results.length === 0 && (
            <p className="text-gray-500 px-4 py-2 text-sm">Not found</p>
          )}

          <ul>
            {results.map((post) => (
              <li key={post.id} className="border-b last:border-0">
                <Link
                  href={`/posts/${post.id}`}
                  onClick={handleClose}
                  className="block p-2 hover:bg-blue-100 text-gray-800"
                >
                  {post.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
