import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <h1>Api Project</h1>
      <Link href="/posts">
        <Button variant="danger" size="md"> Go to post page</Button>
      </Link>
      <Link href="/photo">
        <Button variant="primary" size="md">Go to photo page</Button>
      </Link>
    </div>
  );
}
