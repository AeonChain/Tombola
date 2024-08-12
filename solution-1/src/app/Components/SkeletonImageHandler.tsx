"use client";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

export type SkeletonImageHandlerProps = {
  overrideClassnames?: string;
} & ImageProps;

export default function SkeletonImageHandler(props: SkeletonImageHandlerProps) {
  const [imageHasLoaded, setImageHasLoaded] = useState(false);
  const { overrideClassnames, ...data } = props;
  const classNames =
    (overrideClassnames ||
      `w-full mx-2 h-64 max-h-64 overflow-hidden justify-self-center `) +
    imageHasLoaded
      ? ""
      : "min-h-64 bg-slate-700 animate-pulse";
  return (
    <div className={classNames}>
      <Image
        {...data}
        onLoad={(_event) => {
          setImageHasLoaded(true);
        }}
      ></Image>
    </div>
  );
}
