import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const formData = await request.json()
  const placeOrderRoute = process.env.PLACEORDER_ROUTE;
  if (!placeOrderRoute) {
    throw Error("No 'PLACEORDER_ROUTE' enviroment variable set");
	}
	    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
	const result = await fetch(placeOrderRoute,requestOptions);
  return  NextResponse.json({ data:await result.json() }, { status: 200 })
}
 