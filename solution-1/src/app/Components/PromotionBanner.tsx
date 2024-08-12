import Link from "next/link";
import SkeletonImageHandler from "./SkeletonImageHandler";

export type PromotionBannerProps = {
  title: string;
  description: string;
  destination: string;
  image: string;
  imageAlt: string;
};

export default function PromotionBanner(props: PromotionBannerProps) {
  return (
    <Link
      href={props.destination}
      className="w-full mx-8 text-center justify-between font-mono text-3xl bg-slate-200 flex"
    >
      <div className="bg-slate-500 m-8 flex">
        <div>
          <SkeletonImageHandler
            overrideClassnames="w-[100px] h-[100px] md:w-[200px] md:h-[200px] overflow-hidden "
            alt={props.imageAlt}
            src={props.image}
            width={200}
            height={200}
            loading={"eager"}
          />
        </div>
        <div className="flex flex-wrap text-center">
          <div className="w-full text-xl md:text-3xl">{props.title}</div>
          <div className="grow text-base -mt-4 sm:-mt-12 md:mt-0">
            {props.description}
          </div>
        </div>
      </div>
    </Link>
  );
}
