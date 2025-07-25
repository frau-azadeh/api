import GoBack from "@/components/ui/GoBack";
import Image from "next/image";

export default function NotFoundPage() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Image
        src="/not-found.png"
        width={150}
        height={150}
        alt="not found"
        className="w-full max-w-md rounded-2xl shadow-lg transform transition duration-300 hover:scale-75 md-hover:scale-125 sm:hover:scale-50"
      />
      <GoBack />
    </div>
  );
}
