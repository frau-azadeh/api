import { Suspense } from "react";

import ClientPostList from "@/components/ClientPostList";

export default function PostPage() {
  return (
    <Suspense fallback={<div className="text-center py-20">Loading...</div>}>
      <ClientPostList />
    </Suspense>
  );
}
