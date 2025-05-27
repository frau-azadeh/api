import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="flex justify-center items-center mb-4">
          <h1 className="text-blue-950 font-bold text-lg">Api Project</h1>
        </div>
        <div className="flex justify-center items-center space-x-4">
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
