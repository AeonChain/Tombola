'use server'
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest,) {
  const route = process.env.ALL_BEANS_ROUTE;
  if (!route) {
    throw Error("No 'ALL_BEANS_ROUTE' enviroment variable set");
	}

	  const searchParams = req.nextUrl.searchParams.get("searchTerm")
	const apiRoute = route + (searchParams ? `?searchTerm=${searchParams}` : "");
	console.log(apiRoute, searchParams)
	const result = await fetch(apiRoute);
	const data = await result.json()
	// console.log(data);
  return  NextResponse.json({ data:data }, { status: 200 })
}
 