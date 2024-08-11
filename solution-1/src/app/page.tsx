'use server'
import List from "./Components/List";


export default async function Home() {
		const route = process.env.ALL_BEANS_ROUTE;
	if (!route) {
		throw Error("No 'ALL_BEANS_ROUTE' enviroment variable set");
	}
	const response = await fetch(route);
	const data: Bean[] = await response.json();
  return <><List AvailableBeans={data} /></>
}
