"use client";

import { MovingElement } from "@/components/navbar";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="text-xl mt-4">Page Not Found</p>

      <MovingElement
        change={() => router.push("/")}
        ariaLabel="Navigate to home"
        className="mt-8"
      >
        <Link
          href={"/"}
          className="tracking-tighter font-bold text-xl flex items-center gap-2"
        >
          <ArrowLeft />
          Go back to home
        </Link>
      </MovingElement>
    </div>
  );
}
