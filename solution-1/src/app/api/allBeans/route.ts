import { NextResponse } from 'next/server';

type Params = {
  team: string
}
 
export async function GET(request: Request, context: { params: Params }) {
    const route = process.env.ALL_BEANS_ROUTE;
  if (!route) {
    throw Error("No 'ALL_BEANS_ROUTE' enviroment variable set");
	}
	const result = await fetch(route);
  return  NextResponse.json({ data:await result.json() }, { status: 200 })
}
 