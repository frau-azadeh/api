import Button from "@/components/ui/Button";
import Link from "next/link";

export default function Home(){
  return(
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="justify-center items-center flex mb-5">
          <h1 className="text-blue-950 font-bold text-lg">API PROJECT</h1>
        </div>
        <div className="justify-center items-center flex gap-10">
          <Link href="./posts">
            <Button
              variant="primary"
              size="lg"
            >
              Go to post page
            </Button>
          </Link>
          <Link href="./photo">
            <Button 
              variant="danger"
              size="lg"
            >
              Go to photo page
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}