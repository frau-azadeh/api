import GoBack from "@/components/ui/GoBack";
import Image from "next/image";

export default function NotFoundPage(){
  return(
    <div className="flex flex-col items-center justify-center h-screen">
      <Image
        width={150}
        height={150}
        alt="not found"
        src="/not-found.png"
        className="w-full max-w-md rounded-2xl transform transition-300 duration-300 shadow-md hover:lg:scale-110 hover:scale-75"
      />
      <GoBack/>
    </div>
  )
}