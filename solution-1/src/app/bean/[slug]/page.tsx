"use server";

import SkeletonImageHandler from "@/app/Components/SkeletonImageHandler";

import Link from "next/link";
import { useState } from "react";

export default async function BeanPage({
  params,
}: {
  params: { slug: string };
}) {
  const route = process.env.SINGLE_BEAN_ROUTE;
  if (!route) {
    throw Error("No 'SINGLE_BEAN_ROUTE' enviroment variable set");
  }
  const response = await fetch(route + params.slug);

  const data: Bean = await response.json();
  return (
    <div>
      <div className="bg-slate-300 text-center flex flex-wrap justify-between">
        <Link href="/">
          <span className="">Back to list</span>
        </Link>
        <h1 className="grow">{data.name}</h1>

        <SkeletonImageHandler
          alt={`Image of the bean called: ${data.name}`}
          src={data.image}
          width={360}
          height={200}
          loading={"eager"}
          placeholder={"empty"}
          data-loaded="false"
        />
      </div>
      <div className="flex justify-around py-4">
        <span className="bg-slate-900 rounded-3xl text-white p-4">
          {data.colour}
        </span>
        <span className="bg-slate-900 rounded-3xl text-white p-4">
          {data.cost}
        </span>
        <span className="bg-slate-900 rounded-3xl text-white p-4">
          {data.country}
        </span>
      </div>
      <div>{data.description}</div>
    </div>
  );
}
