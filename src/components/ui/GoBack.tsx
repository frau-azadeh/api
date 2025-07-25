"use client";
import React from "react";
import Button from "./Button";
import { useRouter } from "next/navigation";
import { ChevronLeft } from "lucide-react";

const GoBack: React.FC = () => {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.back()}
      size="lg"
      variant="primary"
      className="mt-2"
    >
      <span className="flex items-center gap-2">
        <ChevronLeft className="h-5 w-5" />
        Go Back
      </span>
    </Button>
  );
};

export default GoBack;
