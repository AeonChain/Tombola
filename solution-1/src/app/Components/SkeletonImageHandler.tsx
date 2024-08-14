"use client";
import Image, { ImageProps } from "next/image";
import { useState } from "react";

export type SkeletonImageHandlerProps = {
  overrideClassnames?: string;
} & ImageProps;

export default function SkeletonImageHandler(props: SkeletonImageHandlerProps) {
  const [imageHasLoaded, setImageHasLoaded] = useState(false);
  const { overrideClassnames, ...data } = props;
  const loadingClasses = imageHasLoaded
    ? ""
    : "min-h-64 bg-slate-700 animate-pulse";
  const classNames = overrideClassnames
    ? overrideClassnames
    : "mx-2 h-64 max-h-64 overflow-hidden" + loadingClasses;
  console.log(overrideClassnames, classNames, loadingClasses);
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
