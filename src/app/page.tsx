import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div>
        <div className="flex justify-center items-center mb-4">
          <h1 className="font-bold text-blue-950">Api Project</h1>
        </div>
        <div className="space-x-3 flex justify-center items-center">
          <Link href="/posts">
            <Button variant="danger" size="md">
              Go to post page
            </Button>
          </Link>
          <Link href="/photo">
            <Button variant="primary" size="md">
              Go to photo page
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
