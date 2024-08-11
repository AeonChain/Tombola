"use client";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

export default function SkeletonImageHandler(props: ImageProps) {
  const [imageHasLoaded, setImageHasLoaded] = useState(false);
  return (
    <div
      className={`w-full mx-2 h-64 max-h-64 overflow-hidden justify-self-center ${imageHasLoaded ? "" : "min-h-64 bg-slate-700 animate-pulse"}`}
    >
      <Image
        {...props}
        onLoad={(_event) => {
          setImageHasLoaded(true);
        }}
      ></Image>
    </div>
  );
}
