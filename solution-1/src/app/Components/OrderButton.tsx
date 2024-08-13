"use client";

import { useRouter } from "next/navigation";

export default function OrderButton() {
  const router = useRouter();
  return (
    <div
      className="float-end bg-sky-900 rounded-md px-2 py-1 mr-2 hover:bg-sky-700"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        router.push("/order");
      }}
    >
      Order
    </div>
  );
}
