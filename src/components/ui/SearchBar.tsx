'use client';

import { Search, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getPost } from '@/lib/api';
import { PostPage } from '@/types/type';

export default function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<PostPage[]>([]);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (query.trim().length === 0) {
        setResults([]);
        return;
      }

      const posts = await getPost();
      const filtered = posts.filter(post =>
        post.title.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setShowResults(true);
    };

    const timeout = setTimeout(fetchData, 300);
    return () => clearTimeout(timeout);
  }, [query]);

  const handleClose = () => {
    setQuery('');
    setResults([]);
    setShowResults(false);
  };

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

      {showResults && results.length > 0 && (
        <div className="absolute mt-1 w-full bg-white shadow-lg rounded-md border border-gray-200 max-h-60 overflow-y-auto z-50">
          <div className="flex justify-end px-2 pt-2">
            <button onClick={handleClose} className="text-gray-500 hover:text-red-600">
              <X className="w-5 h-5" />
            </button>
          </div>
          <ul>
            {results.map((post) => (
              <li key={post.id} className="border-b last:border-0">
                <Link
                  href={`/post/${post.id}`}
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
