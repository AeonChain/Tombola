import { NextResponse } from 'next/server';


export async function GET() {
  const bOTDRoute = process.env.BOTD_ROUTE;
  if (!bOTDRoute) {
    throw Error("No 'BOTD_ROUTE' enviroment variable set");
  }
	const result = await fetch(bOTDRoute);
  return  NextResponse.json({ data:await result.json() }, { status: 200 })
}
 