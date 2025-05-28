import { useEffect, useState } from "react";
import { getPost } from "@/lib/api";
import { PostPage } from "@/types/type";

export function useSearch() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<PostPage[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (query.trim().length === 0) {
        setResults([]);
        setShowResults(false);
        setError(null);
        return;
      }

      setLoading(true);
      setError(null);

      try {
        const posts = await getPost();
        const filtered = posts.filter((post) =>
          post.title.toLowerCase().includes(query.toLowerCase()),
        );
        setResults(filtered);
        setShowResults(true);
      } catch (err) {
        setError("خطا در دریافت داده‌ها");
        setShowResults(true);
      } finally {
        setLoading(false);
      }
    };

    const timeout = setTimeout(fetchData, 300);
    return () => clearTimeout(timeout);
  }, [query]);

  const handleClose = () => {
    setQuery("");
    setResults([]);
    setShowResults(false);
    setLoading(false);
    setError(null);
  };

  return {
    query,
    setQuery,
    results,
    showResults,
    loading,
    error,
    handleClose,
  };
}
