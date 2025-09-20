import { memo, useMemo } from "react";

import Link from "next/link";

import Button from "@/components/ui/Button";

const Home = () => {
  const postButton = useMemo(
    () => (
      <Link href="/posts">
        <Button variant="primary" size="lg">
          Go to Post Page
        </Button>
      </Link>
    ),
    [],
  );

  const photoButton = useMemo(
    () => (
      <Link href="/photo">
        <Button variant="danger" size="lg">
          Go to Photo
        </Button>
      </Link>
    ),
    [],
  );
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="justify-center items-center flex mb-5">
          <h1 className="text-blue-950 font-bold text-lg">API PROJECT</h1>
        </div>
        <div className="justify-center items-center flex gap-10">
          {postButton}
          {photoButton}
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
